
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Gateway to <span className="text-blue-200">China</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                Professional visa consultancy services for Business, Study, Work, and Family visas.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 btn-hover">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-md h-80 relative overflow-hidden rounded-xl shadow-2xl animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-900/70 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-2xl font-bold mb-4">Trusted by Thousands</h3>
                  <p className="text-blue-100 mb-6">Successfully processed over 5,000+ visa applications</p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                      <div className="text-3xl font-bold text-white">98%</div>
                      <div className="text-sm text-blue-100">Success Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                      <div className="text-3xl font-bold text-white">10+</div>
                      <div className="text-sm text-blue-100">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in providing visa consultancy services for various categories of Chinese visas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Business Visa",
                description: "For entrepreneurs and business professionals visiting China for meetings, negotiations, and business activities.",
                icon: "💼"
              },
              {
                title: "Study Visa",
                description: "For students pursuing education in Chinese universities and educational institutions.",
                icon: "🎓"
              },
              {
                title: "Family Visa",
                description: "For family members of Chinese residents or citizens for reunion and settlement purposes.",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Work Visa",
                description: "For professionals seeking employment opportunities in Chinese companies and institutions.",
                icon: "🏢"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md card-hover"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 animate-hover"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 btn-hover">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make the visa application process straightforward and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Meet with our experts to discuss your visa requirements and options."
              },
              {
                step: "02",
                title: "Documentation",
                description: "We help you prepare and verify all required documents for your application."
              },
              {
                step: "03",
                title: "Application Submission",
                description: "We submit your application and track its progress until approval."
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl border border-gray-200 card-hover"
              >
                <span className="absolute -top-4 -left-4 bg-blue-600 text-white text-xl font-bold h-12 w-12 rounded-full flex items-center justify-center shadow-lg">
                  {process.step}
                </span>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 btn-hover">
              <Link to="/application-process">View Full Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Visa Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team today and take the first step towards your Chinese visa.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
