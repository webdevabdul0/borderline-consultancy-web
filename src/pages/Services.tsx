
import { Link } from "react-router-dom";
import { Check, ArrowRight, GraduationCap, Users, Briefcase, HomeIcon, Plane, Building, Landmark, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "china",
      title: "Chinese Visa",
      icon: <Globe className="h-10 w-10 text-white" />,
      description: "Our flagship service providing comprehensive visa solutions for business, study, work, and family visits to China.",
      features: [
        "Business visa for entrepreneurs",
        "Study visa for students",
        "Family reunion visas",
        "Work permits assistance",
        "Complete documentation support"
      ],
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "uk",
      title: "UK Visa",
      icon: <Landmark className="h-10 w-10 text-white" />,
      description: "Professional consultancy services for various UK visa categories including business, study, tourist, and settlement visas.",
      features: [
        "Business visitor visas",
        "Student visas (Tier 4)",
        "Family and settlement visas",
        "Skilled worker visas",
        "Tourist and short-term visas"
      ],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "canada",
      title: "Canadian Visa",
      icon: <Plane className="h-10 w-10 text-white" />,
      description: "Expert guidance for Canadian immigration including express entry, study permits, work permits, and visitor visas.",
      features: [
        "Express Entry applications",
        "Study permits for students",
        "Work permits assistance",
        "Family sponsorship",
        "Visitor visa applications"
      ],
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "european",
      title: "European Visas",
      icon: <Building className="h-10 w-10 text-white" />,
      description: "Specialized services for various European countries including Spain, Belgium, Greece, Italy, and Germany.",
      features: [
        "Schengen visa applications",
        "Student visa processing",
        "Work permit assistance",
        "Business visitor visas",
        "Long-term residence permits"
      ],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "japan",
      title: "Japan Visa",
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      description: "Comprehensive consultancy services for Japanese visas including study, work, business, and dependent visas.",
      features: [
        "Student visa applications",
        "Work visa processing",
        "Business visitor visas",
        "Dependent visa services",
        "Documentation assistance"
      ],
      image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "business",
      title: "Business Visas",
      icon: <Briefcase className="h-10 w-10 text-white" />,
      description: "Specialized business visa services for entrepreneurs, investors, and corporate professionals across multiple countries.",
      features: [
        "Business visitor visas",
        "Investor visa programs",
        "Corporate transfer visas",
        "Conference and event visas",
        "Business immigration services"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "study",
      title: "Study Visas",
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      description: "Expert guidance for students seeking to pursue education in various countries with comprehensive application support.",
      features: [
        "University application assistance",
        "Student visa processing",
        "Scholarship guidance",
        "Pre-departure orientation",
        "Language test preparation"
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "family",
      title: "Family Visas",
      icon: <Users className="h-10 w-10 text-white" />,
      description: "Specialized services for family reunification, spouse visas, dependent visas, and settlement applications.",
      features: [
        "Spouse visa applications",
        "Dependent visa processing",
        "Family reunion services",
        "Settlement visa assistance",
        "Documentation support"
      ],
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "work",
      title: "Work Visas",
      icon: <HomeIcon className="h-10 w-10 text-white" />,
      description: "Professional assistance for work permits, employment visas, and skilled migration across multiple countries.",
      features: [
        "Work permit applications",
        "Skilled worker visas",
        "Employment visa processing",
        "Labor market testing",
        "Professional qualification assessment"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8 animate-fade-up">Our Visa Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay font-medium">
            We provide comprehensive visa consultancy services specializing in visas for various countries and purposes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
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
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-300 mb-8 font-medium">{service.description}</p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-6 w-6 text-blue-400 mr-3 mt-0.5" />
                          <span className="text-lg text-gray-200 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="gradient-primary hover:opacity-90 mt-auto self-start btn-hover text-lg px-8 py-6 h-auto font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/50 flex items-center justify-center">
                      <div className="text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-lg text-blue-100 font-medium">Professional consultancy services</p>
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
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="section-title gradient-text">Need More Information?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
            Our visa experts are ready to answer your questions and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="gradient-primary hover:opacity-90 btn-hover text-lg px-8 py-6 h-auto font-bold">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900/50 btn-hover text-lg px-8 py-6 h-auto font-bold">
              <Link to="/application-process">View Application Process <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
