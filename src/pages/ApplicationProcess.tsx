
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ApplicationProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Schedule a consultation with our visa experts to discuss your requirements, eligibility, and available options for your Chinese visa application.",
      details: [
        "Free initial assessment",
        "Review of visa requirements",
        "Personalized visa strategy",
        "Timeline estimation"
      ]
    },
    {
      number: "02",
      title: "Documentation Preparation",
      description: "We assist you in preparing and organizing all the required documents for your visa application according to the latest Chinese embassy requirements.",
      details: [
        "Document checklist provision",
        "Document verification",
        "Translation services",
        "Document authentication assistance"
      ]
    },
    {
      number: "03",
      title: "Application Form Completion",
      description: "Our experts will help you complete the visa application forms accurately to avoid any errors that might lead to delays or rejections.",
      details: [
        "Accurate form filling",
        "Review for completeness",
        "Digital signature assistance",
        "Biometric information guidance"
      ]
    },
    {
      number: "04",
      title: "Application Submission",
      description: "We submit your completed application to the Chinese embassy or consulate and ensure all procedures are followed correctly.",
      details: [
        "Embassy appointment scheduling",
        "Representation services",
        "Application tracking",
        "Fee payment assistance"
      ]
    },
    {
      number: "05",
      title: "Visa Processing & Follow-up",
      description: "We monitor your application status and follow up with the authorities to ensure timely processing of your visa application.",
      details: [
        "Regular status updates",
        "Embassy liaison",
        "Additional document submission if required",
        "Query handling"
      ]
    },
    {
      number: "06",
      title: "Visa Collection & Briefing",
      description: "Once your visa is approved, we collect it on your behalf and provide a pre-departure briefing with important information for your trip to China.",
      details: [
        "Visa verification",
        "Travel information",
        "Cultural orientation",
        "Post-arrival support information"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Application Process</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            We follow a streamlined and efficient process to ensure your visa application is handled professionally.
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex md:flex-col items-center md:items-start">
                    <div className="flex-shrink-0 bg-blue-600 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-0.5 bg-blue-200 h-28 ml-7 -mb-4"></div>
                    )}
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h2>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-3">What we provide:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "How long does the visa application process take?",
                answer: "The processing time varies depending on the visa type and current embassy workload. Generally, it takes 5-15 working days after submission. We will provide you with an estimated timeline during your consultation."
              },
              {
                question: "Do I need to visit your office in person?",
                answer: "While an in-person consultation is recommended, we also offer virtual consultations via video call. However, for certain visa types, at least one in-person meeting may be required for document verification."
              },
              {
                question: "What happens if my visa application is rejected?",
                answer: "In case of rejection, we will analyze the reasons, address the issues, and assist you in reapplying if possible. Our high success rate is due to our thorough preparation, but in rare cases of rejection, we provide guidance on the next steps."
              },
              {
                question: "Can you expedite my visa application?",
                answer: "Yes, we offer expedited services for urgent cases at an additional fee. The possibility and timeline for expedited processing depend on the visa type and current embassy policies."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our visa experts are ready to guide you through every step of the process.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
