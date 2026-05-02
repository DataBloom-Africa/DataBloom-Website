import React from 'react';
import './Policy.css';

export const RefundPolicy: React.FC = () => {
  return (
    <div className="policy-page">
      <h1>Refund Policy</h1>
      <p className="effective-date">Effective Date: May 2, 2026</p>

      <h2>1. Introduction</h2>
      <p>This Refund Policy outlines the terms and conditions under which refunds may be granted for programs, trainings, webinars, and other paid services offered by DataBloom Africa.</p>
      <p>By enrolling in any paid service, you agree to this Refund Policy in addition to our Terms of Service and Privacy Policy.</p>

      <h2>2. General Refund Principles</h2>
      <p>At DataBloom Africa, we are committed to delivering high-quality learning experiences. Due to the nature of our programs — many of which involve limited slots, resource allocation, and structured delivery — refunds are granted only under specific conditions.</p>
      <p>Refund eligibility depends on:</p>
      <ul>
        <li>The type of program or service</li>
        <li>The timing of the refund request</li>
        <li>The level of participation or access already granted</li>
      </ul>

      <h2>3. Eligibility for Refunds</h2>
      <h3>a. Before Program Start</h3>
      <p>Participants may request a refund if:</p>
      <ul>
        <li>The request is made <strong>at least 5–7 days before</strong> the program start date</li>
        <li>No access has been granted to course materials, platforms, or sessions</li>
      </ul>
      <p><strong>Refund Amount:</strong> Full refund minus administrative/processing fees (if applicable)</p>

      <h3>b. After Program Commencement</h3>
      <p>Once a program has started, refunds are generally <strong>not granted</strong>, except in exceptional cases such as:</p>
      <ul>
        <li>Verified medical emergencies</li>
        <li>Technical failure from our end preventing participation</li>
        <li>Program cancellation by DataBloom Africa</li>
      </ul>
      <p>Each case will be reviewed individually.</p>

      <h3>c. After Access to Materials</h3>
      <p>No refunds will be issued if:</p>
      <ul>
        <li>You have accessed course materials, recordings, or learning platforms</li>
        <li>You have attended one or more sessions</li>
        <li>You have participated in mentorship, projects, or internship pathways</li>
      </ul>
      <p>This is because value delivery is considered to have begun.</p>

      <h2>4. Non-Refundable Situations</h2>
      <p>Refunds will <strong>not</strong> be provided in the following cases:</p>
      <ul>
        <li>Change of mind after enrollment</li>
        <li>Failure to attend sessions</li>
        <li>Lack of time or personal scheduling conflicts</li>
        <li>Dissatisfaction due to unmet personal expectations (where services were delivered as described)</li>
      </ul>

      <h2>5. Program Cancellation or Rescheduling</h2>
      <h3>a. By DataBloom Africa</h3>
      <p>If we cancel a program:</p>
      <ul>
        <li>You will receive a <strong>full refund</strong>, or</li>
        <li>You may choose to transfer to a future cohort</li>
      </ul>
      <p>If a program is rescheduled, you may opt to join the new schedule or request a full refund.</p>

      <h3>b. By Participant</h3>
      <p>If you are unable to attend:</p>
      <ul>
        <li>You may request a <strong>transfer to a future cohort</strong> (subject to approval)</li>
        <li>Transfers are generally allowed <strong>once per program</strong></li>
      </ul>

      <h2>6. Special Cases (Partial Refunds or Credits)</h2>
      <p>In some situations, we may offer partial refunds or program credits for future use. These apply where:</p>
      <ul>
        <li>Participation was minimal</li>
        <li>A valid reason is provided and approved</li>
      </ul>

      <h2>7. Refund Process</h2>
      <p>To request a refund, you must:</p>
      <ol style={{ paddingLeft: '1.5rem', marginBottom: '14px' }}>
        <li>Send an email to: <a href="mailto:info@databloomafrica.com"><strong>info@databloomafrica.com</strong></a></li>
        <li>Include: full name, program name, payment details/receipt, and reason for request</li>
        <li>Submit within <strong>7 days before program start</strong>, or <strong>48 hours after payment</strong> (whichever is earlier)</li>
      </ol>

      <h2>8. Processing Time</h2>
      <ul>
        <li>Approved refunds will be processed within <strong>7–14 business days</strong></li>
        <li>Refunds will be made via the <strong>original payment method</strong>, where possible</li>
        <li>Payment processors or banks may take additional time</li>
      </ul>

      <h2>9. Fraud and Abuse</h2>
      <p>DataBloom Africa reserves the right to:</p>
      <ul>
        <li>Deny refund requests suspected of abuse or fraud</li>
        <li>Suspend accounts involved in repeated refund claims</li>
      </ul>

      <h2>10. Relationship with Other Policies</h2>
      <p>This Refund Policy should be read alongside our Terms of Service and Privacy Policy.</p>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Refund Policy from time to time. Updates will be posted on this page with a revised effective date. Continued use of our services indicates acceptance of any changes.</p>

      <h2>12. Contact Us</h2>
      <p><strong>DataBloom Africa</strong><br />
      Email: <a href="mailto:info@databloomafrica.com">info@databloomafrica.com</a><br />
      Location: Ghana</p>
    </div>
  );
};
