
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4 animate-fade-in">Terms & Conditions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Please review our terms and conditions carefully to understand our services and policies.
          </p>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="prose max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-6">Last Updated: May 13, 2023</p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Borderline Consultancy ("we," "our," or "us"). These Terms and Conditions govern your use of our visa consultancy services and website. By using our services, you agree to comply with and be bound by these terms. Please read them carefully.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="mb-4">
                  Borderline Consultancy provides visa consultancy services for various Chinese visa categories, including business, study, family, and work visas. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Visa application assistance and guidance</li>
                  <li>Document preparation and verification</li>
                  <li>Application submission to the relevant authorities</li>
                  <li>Tracking and follow-up on application status</li>
                  <li>Pre-departure briefing and assistance</li>
                </ul>
                <p>
                  We strive to provide accurate and up-to-date information; however, visa requirements and processes are subject to change at the discretion of the Chinese immigration authorities.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                <p className="mb-4">
                  As a client of Borderline Consultancy, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide accurate, truthful, and complete information for your visa application</li>
                  <li>Submit genuine and authentic documents</li>
                  <li>Cooperate with our consultants throughout the application process</li>
                  <li>Respond promptly to requests for additional information or documentation</li>
                  <li>Pay all applicable fees as per our fee schedule</li>
                  <li>Attend scheduled appointments or provide timely notice of cancellation</li>
                </ul>
                <p>
                  Failure to comply with these responsibilities may result in delays or potential rejection of your visa application, for which we cannot be held responsible.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payment</h2>
                <p className="mb-4">
                  Our fee structure is as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Initial consultation fee: As per current rates (may be waived if you proceed with our services)</li>
                  <li>Service fees: Vary depending on the type of visa and services required</li>
                  <li>Third-party fees: These include embassy fees, authentication charges, courier fees, etc.</li>
                </ul>
                <p className="mb-4">
                  Payment terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>50% advance payment at the time of engagement</li>
                  <li>Remaining balance before application submission</li>
                  <li>Additional services will be billed separately</li>
                </ul>
                <p>
                  All fees paid are non-refundable once the service has commenced, except as provided in our refund policy.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
                <p className="mb-4">
                  Our refund policy is as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Consultation fees are non-refundable</li>
                  <li>If you cancel our services before we commence work, we will refund 70% of the advance payment</li>
                  <li>No refunds will be issued once we have begun processing your application</li>
                  <li>Embassy fees and third-party charges are non-refundable as these are paid directly to the respective authorities</li>
                </ul>
                <p>
                  Please note that we cannot guarantee the approval of your visa application, as the final decision rests with the immigration authorities.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality and Privacy</h2>
                <p>
                  We respect your privacy and will handle your personal information in accordance with our Privacy Policy. We will not disclose your personal information to third parties except as required for your visa application or as required by law.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  While we make every effort to ensure the success of your visa application, we cannot guarantee approval as the final decision rests with the immigration authorities. Borderline Consultancy shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our services, including but not limited to visa denial, delays, or changes in immigration policies.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Force Majeure</h2>
                <p>
                  Borderline Consultancy shall not be liable for any failure or delay in performing our obligations where such failure or delay results from causes beyond our reasonable control, including but not limited to natural disasters, governmental actions, or other events that are unforeseeable and outside our control.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Amendments to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications indicates your acceptance of the updated terms.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <address className="not-italic mt-4">
                  Borderline Consultancy<br />
                  MM Alam Road, Gulberg III<br />
                  Lahore, Pakistan<br />
                  Email: info@borderlineconsultancy.com<br />
                  Phone: +92 321 1234567
                </address>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 btn-hover">
                <Link to="/contact">Contact Us for Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
