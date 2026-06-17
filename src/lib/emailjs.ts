import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_wokgafr';
const PUBLIC_KEY = '-H1EthK8oixJCz_Hk';

// Template ID for Future Code Cohort 2 confirmation emails.
// Create a template in EmailJS with variables: {{to_name}}, {{to_email}}, {{cohort}}
// Then replace this placeholder with the real template ID.
const FUTURE_CODE_TEMPLATE_ID = 'template_futcode';

export const sendRegistrationEmail = (params: {
  to_name: string;
  to_email: string;
  program_name: string;
  amount: string;
}) => {
  return emailjs.send(SERVICE_ID, 'template_i7kc9uc', params, PUBLIC_KEY);
};

export const sendContactEmail = (params: {
  name: string;
  email: string;
  title: string;
  message: string;
}) => {
  return emailjs.send(SERVICE_ID, 'template_qin2pdh', params, PUBLIC_KEY);
};

export const sendFutureCodeConfirmation = (params: {
  to_name: string;
  to_email: string;
  cohort: string;
}) => {
  return emailjs.send(SERVICE_ID, FUTURE_CODE_TEMPLATE_ID, params, PUBLIC_KEY);
};
