const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body || '{}');
  const { name, email, phone, visaType, message, subject, date, time, formType } = data;

  // Compose email subject and body based on formType
  let emailSubject = 'New Form Submission';
  let emailBody = '';

  switch (formType) {
    case 'quote':
      emailSubject = `Visa Quote Request from ${name}`;
      emailBody = `You have received a new visa quote request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nVisa Type: ${visaType}\nMessage: ${message}`;
      break;
    case 'contact':
      emailSubject = `Contact Inquiry from ${name}`;
      emailBody = `You have received a new contact inquiry.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nVisa Type: ${visaType}\nMessage: ${message}`;
      break;
    case 'appointment':
      emailSubject = `Appointment Booking from ${name}`;
      emailBody = `You have received a new appointment booking.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`;
      break;
    default:
      emailSubject = `Form Submission from ${name}`;
      emailBody = `You have received a new form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
  }

  // Use Netlify's email forwarding (form-to-email) by returning a response with the email details
  // Netlify will forward this to the configured email address if set up in the dashboard
  // If not, you can use a service like Formspree or Netlify Forms (free tier)

  // For demonstration, just return the email content
  return {
    statusCode: 200,
    body: JSON.stringify({
      to: 'borderlinevisaconsultancy@gmail.com',
      subject: emailSubject,
      text: emailBody,
      message: 'Form processed. Configure Netlify email forwarding or use Netlify Forms for actual delivery.'
    })
  };
}; 