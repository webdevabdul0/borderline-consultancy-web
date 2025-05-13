
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "business",
      title: "Chinese Business Visa",
      icon: "💼",
      description: "For entrepreneurs and business professionals looking to visit China for commercial activities, meetings, negotiations, and other business-related purposes.",
      features: [
        "Short-term and long-term business visas",
        "Multiple entry options available",
        "Fast processing for urgent cases",
        "Complete documentation assistance",
        "Application status tracking"
      ]
    },
    {
      id: "study",
      title: "Chinese Study Visa",
      icon: "🎓",
      description: "For students who have been accepted by Chinese educational institutions to pursue academic studies, language courses, or research programs.",
      features: [
        "Pre-admission guidance",
        "University application assistance",
        "Student visa processing",
        "Documentation preparation",
        "Pre-departure orientation"
      ]
    },
    {
      id: "family",
      title: "Family Visa",
      icon: "👨‍👩‍👧‍👦",
      description: "For family members of Chinese citizens or foreigners legally residing in China who wish to join them for reunion or settlement purposes.",
      features: [
        "Spouse visa assistance",
        "Child visa processing",
        "Parent visa applications",
        "Family reunion documentation",
        "Application status tracking"
      ]
    },
    {
      id: "work",
      title: "Work Visa",
      icon: "🏢",
      description: "For professionals who have secured employment opportunities with Chinese companies, institutions, or organizations.",
      features: [
        "Work permit assistance",
        "Employment visa processing",
        "Documentation preparation",
        "Application status tracking",
        "Post-arrival guidance"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Our Visa Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            We provide comprehensive visa consultancy services specializing in Chinese visas for various purposes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col justify-center">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-auto self-start btn-hover">
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <div className="text-center p-8">
                      <span className="block text-7xl mb-4 text-white">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-blue-100">Professional consultancy services</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our visa experts are ready to answer your questions and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 btn-hover">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 btn-hover">
              <Link to="/application-process">View Application Process <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
