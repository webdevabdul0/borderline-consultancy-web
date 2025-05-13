
import { Link } from "react-router-dom";
import { Check, ArrowRight, GraduationCap, Users, Briefcase, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "business",
      title: "Chinese Business Visa",
      icon: <Briefcase className="h-10 w-10 text-white" />,
      description: "For entrepreneurs and business professionals looking to visit China for commercial activities, meetings, negotiations, and other business-related purposes.",
      features: [
        "Short-term and long-term business visas",
        "Multiple entry options available",
        "Fast processing for urgent cases",
        "Complete documentation assistance",
        "Application status tracking"
      ],
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "study",
      title: "Chinese Study Visa",
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      description: "For students who have been accepted by Chinese educational institutions to pursue academic studies, language courses, or research programs.",
      features: [
        "Pre-admission guidance",
        "University application assistance",
        "Student visa processing",
        "Documentation preparation",
        "Pre-departure orientation"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "family",
      title: "Family Visa",
      icon: <Users className="h-10 w-10 text-white" />,
      description: "For family members of Chinese citizens or foreigners legally residing in China who wish to join them for reunion or settlement purposes.",
      features: [
        "Spouse visa assistance",
        "Child visa processing",
        "Parent visa applications",
        "Family reunion documentation",
        "Application status tracking"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "work",
      title: "Work Visa",
      icon: <HomeIcon className="h-10 w-10 text-white" />,
      description: "For professionals who have secured employment opportunities with Chinese companies, institutions, or organizations.",
      features: [
        "Work permit assistance",
        "Employment visa processing",
        "Documentation preparation",
        "Application status tracking",
        "Post-arrival guidance"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-up">Our Visa Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            We provide comprehensive visa consultancy services specializing in Chinese visas for various purposes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center stagger-item"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="gradient-card p-10 rounded-2xl shadow-lg h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="gradient-primary hover:opacity-90 mt-auto self-start btn-hover text-lg px-8 py-6 h-auto">
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl shadow-xl overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-700/40 flex items-center justify-center">
                      <div className="text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-lg text-blue-100">Professional consultancy services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="section-title gradient-text">Need More Information?</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Our visa experts are ready to answer your questions and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="gradient-primary hover:opacity-90 btn-hover text-lg px-8 py-6 h-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 btn-hover text-lg px-8 py-6 h-auto">
              <Link to="/application-process">View Application Process <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
