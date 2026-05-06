import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { sendRegistrationEmail } from '../lib/emailjs';
import './PaymentCallback.css';

const STORAGE_KEY = 'theteller_pending';

export const PaymentCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [stage, setStage] = useState<'loading' | 'success' | 'failed'>('loading');
  const [registrantName, setRegistrantName] = useState('');
  const [program, setProgram] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    const process = async () => {
      const code = searchParams.get('code');
      const paymentStatus = searchParams.get('status');
      const txId = searchParams.get('transaction_id') || '';
      setTransactionId(txId);

      const pendingRaw = localStorage.getItem(STORAGE_KEY);
      if (!pendingRaw) {
        setErrorMsg('No pending registration found. If you completed payment, please contact support.');
        setStage('failed');
        return;
      }

      let pending: { transId: string; formData: Record<string, string>; program: string; price: string };
      try {
        pending = JSON.parse(pendingRaw);
      } catch {
        setErrorMsg('Registration data was corrupted. Please contact support.');
        setStage('failed');
        return;
      }

      setProgram(pending.program);

      const isSuccess = code === '000' || paymentStatus === 'approved' || paymentStatus === 'successful';

      if (!isSuccess) {
        setErrorMsg('Payment was not completed. You can try again.');
        setStage('failed');
        localStorage.removeItem(STORAGE_KEY);
        return;
      }

      const { error: dbError } = await supabase.from('registrations').insert({
        ...pending.formData,
        program: pending.program,
        amount_paid: parseFloat(pending.price),
        payment_status: 'success',
        payment_reference: txId || pending.transId,
      });

      if (dbError) {
        setErrorMsg(
          `Payment received but registration save failed. Please contact us with transaction ID: ${txId || pending.transId}`
        );
        setStage('failed');
        return;
      }

      sendRegistrationEmail({
        to_name: pending.formData.full_name,
        to_email: pending.formData.email,
        program_name: pending.program,
        amount: pending.price,
      });

      localStorage.removeItem(STORAGE_KEY);
      setRegistrantName(pending.formData.full_name);
      setStage('success');
    };

    process();
  }, []);

  if (stage === 'loading') {
    return (
      <div className="callback-page">
        <div className="callback-card">
          <div className="callback-spinner" />
          <p>Processing your registration...</p>
        </div>
      </div>
    );
  }

  if (stage === 'success') {
    return (
      <div className="callback-page">
        <div className="callback-card success">
          <div className="callback-icon">✓</div>
          <h2>You're Registered!</h2>
          <p>
            Thank you, <strong>{registrantName}</strong>. Your spot for <strong>{program}</strong> has been secured.
          </p>
          <p className="callback-sub">A confirmation email has been sent to you with further details.</p>
          <Link to="/programs" className="callback-btn">Back to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="callback-page">
      <div className="callback-card failed">
        <div className="callback-icon fail">✕</div>
        <h2>Payment Not Completed</h2>
        <p>{errorMsg}</p>
        {transactionId && (
          <p className="callback-sub">Transaction ID: <code>{transactionId}</code></p>
        )}
        <div className="callback-actions">
          <Link to="/programs/intelligent-business" className="callback-btn">Try Again</Link>
          <Link to="/contact" className="callback-btn secondary">Contact Support</Link>
        </div>
      </div>
    </div>
  );
};
