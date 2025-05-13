
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Home = () => {
  const { toast } = useToast();
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "business",
    message: ""
  });

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", quoteForm);
    
    toast({
      title: "Quote Request Received!",
      description: "We'll respond with a detailed quote soon.",
      duration: 5000,
    });
    
    setQuoteForm({
      name: "",
      email: "",
      phone: "",
      visaType: "business",
      message: ""
    });
  };

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
                  <a href="#book-quote">Get Started</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 btn-hover">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-md h-80 relative overflow-hidden rounded-xl shadow-2xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=500&q=80" 
                  alt="Shanghai skyline" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                icon: "💼",
                image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&h=400&q=80"
              },
              {
                title: "Study Visa",
                description: "For students pursuing education in Chinese universities and educational institutions.",
                icon: "🎓",
                image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=400&q=80"
              },
              {
                title: "Family Visa",
                description: "For family members of Chinese residents or citizens for reunion and settlement purposes.",
                icon: "👨‍👩‍👧‍👦",
                image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&h=400&q=80"
              },
              {
                title: "Work Visa",
                description: "For professionals seeking employment opportunities in Chinese companies and institutions.",
                icon: "🏢",
                image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&h=400&q=80"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md card-hover overflow-hidden"
              >
                <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
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

      {/* Book a Quote Section */}
      <section id="book-quote" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-1 border-2 border-blue-600 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Chinese cityscape" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="mt-8 bg-white p-6 rounded-xl shadow-md -mt-20 ml-8 relative z-10 max-w-md">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0eiIgZmlsbD0iI0RGMDE0QyIvPjxwYXRoIGQ9Ik0yODIuNiA0MjguNmwyMDkuNi03MC4xIDk2LjggMzA2LjYgMTM3LjktMzcuNUw2MzUgMzU4LjNsMTA2LjYgMzMuN1MyNjQuNiA2NCA2NCA1MTIiIGZpbGw9IiNGRkRFMDAiLz48L3N2Zz4=" 
                    alt="Chinese flag" 
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">China Visa Specialists</h3>
                    <p className="text-gray-600">Authorized by Chinese Embassy</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Our team of professionals ensures a smooth visa application process with the highest success rate in Pakistan."
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Book a Free Quote</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below to receive a personalized visa consultation and quote. Our experts will contact you within 24 hours.
              </p>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={quoteForm.name} 
                      onChange={handleQuoteChange} 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={quoteForm.email} 
                      onChange={handleQuoteChange} 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={quoteForm.phone} 
                      onChange={handleQuoteChange} 
                      placeholder="Your phone number" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visaType">Visa Type</Label>
                    <select 
                      id="visaType" 
                      name="visaType" 
                      value={quoteForm.visaType}
                      onChange={handleQuoteChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="business">Business Visa</option>
                      <option value="study">Study Visa</option>
                      <option value="family">Family Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={quoteForm.message} 
                    onChange={handleQuoteChange} 
                    placeholder="Any specific requirements or questions" 
                    rows={4} 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 btn-hover">
                  Get Your Free Quote
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  <span className="text-red-500 font-bold">Special Offer:</span> 20% discount on file completion available for a limited time.
                </p>
              </form>
            </div>
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
