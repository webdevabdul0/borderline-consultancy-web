
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
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
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-up">Application Process</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            We follow a streamlined and efficient process to ensure your visa application is handled professionally.
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="mb-16 last:mb-0 stagger-item stagger-delay-${index % 3 + 1}">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex md:flex-col items-center md:items-start">
                    <div className="flex-shrink-0 gradient-primary text-white h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-0.5 bg-blue-200 h-36 ml-10 -mb-6"></div>
                    )}
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">{step.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                    <div className="gradient-card p-8 rounded-xl shadow-md">
                      <h3 className="font-semibold text-xl text-gray-900 mb-5">What we provide:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                            <span className="text-lg text-gray-700">{detail}</span>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="section-title gradient-text text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid gap-8">
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
              <div key={index} className="gradient-card p-8 rounded-xl shadow-lg stagger-item stagger-delay-${index % 4 + 1}">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{faq.question}</h3>
                <p className="text-lg text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Application?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Our visa experts are ready to guide you through every step of the process.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover text-lg px-10 py-7 h-auto">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
