import { ArrowRight, GraduationCap, Users, Briefcase, Home as HomeIcon } from "lucide-react";
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

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/send-form-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...quoteForm, formType: 'quote' })
      });
      if (response.ok) {
        toast({
          title: 'Quote Request Received!',
          description: "We'll respond with a detailed quote soon.",
          duration: 5000,
        });
        setQuoteForm({
          name: '',
          email: '',
          phone: '',
          visaType: 'business',
          message: ''
        });
      } else {
        toast({
          title: 'Submission Failed',
          description: 'There was an error submitting your quote. Please try again later.',
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your quote. Please try again later.',
        duration: 5000,
      });
    }
  };

  const services = [
    {
      title: "Business Visa",
      description: "For entrepreneurs and business professionals visiting partner countries for meetings, negotiations, and business activities.",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Study Visa",
      description: "For students pursuing education in international universities and educational institutions.",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Family Visa",
      description: "For family members seeking reunion and settlement purposes in multiple countries.",
      icon: <Users className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Work Visa",
      description: "For professionals seeking employment opportunities in international companies and institutions.",
      icon: <HomeIcon className="h-8 w-8 text-white" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <section className="gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Global <span className="text-blue-200">Visa Gateway</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Professional visa consultancy services for multiple countries including Business, Study, Work, and Family visas.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover text-lg">
                  <a href="#book-quote">Get Started</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 btn-hover text-lg">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center animate-fade-in-delay">
              <div className="w-full max-w-lg h-96 relative overflow-hidden rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=500&q=80" 
                  alt="Shanghai skyline" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="image-overlay"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-3xl font-bold mb-4 text-white">Trusted by Thousands</h3>
                  <p className="text-xl text-blue-100 mb-6">Successfully processed over 5,000+ visa applications</p>
                  <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                      <div className="text-4xl font-bold text-white">98%</div>
                      <div className="text-lg text-blue-100">Success Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                      <div className="text-4xl font-bold text-white">10+</div>
                      <div className="text-lg text-blue-100">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Our Visa Services</h2>
            <p className="section-subtitle text-gray-300">
              We specialize in providing visa consultancy services for various categories across multiple countries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="gradient-card p-6 rounded-xl shadow-lg card-hover overflow-hidden stagger-item stagger-delay-${index + 1}"
              >
                <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">{service.title}</h3>
                <p className="text-gray-300 mb-5">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-400 font-medium flex items-center hover:text-blue-300 animate-hover"
                >
                  Learn More <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 btn-hover text-lg px-8 py-6 h-auto">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Our Application Process</h2>
            <p className="section-subtitle text-gray-300">
              We make the visa application process straightforward and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                className="relative p-8 rounded-xl border border-gray-700 card-hover gradient-card stagger-item stagger-delay-${index + 1}"
              >
                <span className="absolute -top-6 -left-6 gradient-primary text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center shadow-lg">
                  {process.step}
                </span>
                <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-100">{process.title}</h3>
                <p className="text-lg text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950 btn-hover text-lg px-8 py-6 h-auto">
              <Link to="/application-process">View Full Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book a Quote Section */}
      <section id="book-quote" className="py-20 bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="p-2 border-4 border-blue-600 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="European landscape" 
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
              <div className="mt-8 bg-gray-800 p-8 rounded-xl shadow-lg -mt-24 ml-12 relative z-10 max-w-md gradient-card">
                <div className="flex items-center space-x-5 mb-5">
                  <img 
                    src="/lovable-uploads/9960c49c-dd0f-44e4-b34e-9eebc50f62e6.png" 
                    alt="Border Visa Logo" 
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">International Visa Specialists</h3>
                    <p className="text-lg text-gray-300">Authorized by multiple embassies</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic">
                  "Our team of professionals ensures a smooth visa application process with the highest success rate across all destinations."
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg gradient-card">
              <h2 className="text-3xl font-bold mb-8 text-gray-100 gradient-text">Book a Free Quote</h2>
              <p className="text-lg text-gray-300 mb-8">
                Fill out the form below to receive a personalized visa consultation and quote. Our experts will contact you within 24 hours.
              </p>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base text-gray-200">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={quoteForm.name} 
                      onChange={handleQuoteChange} 
                      placeholder="Your full name" 
                      required 
                      className="h-12 text-base bg-gray-700 text-white border-gray-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base text-gray-200">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={quoteForm.email} 
                      onChange={handleQuoteChange} 
                      placeholder="Your email address" 
                      required 
                      className="h-12 text-base bg-gray-700 text-white border-gray-600"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base text-gray-200">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={quoteForm.phone} 
                      onChange={handleQuoteChange} 
                      placeholder="Your phone number" 
                      required 
                      className="h-12 text-base bg-gray-700 text-white border-gray-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visaType" className="text-base text-gray-200">Visa Type</Label>
                    <select 
                      id="visaType" 
                      name="visaType" 
                      value={quoteForm.visaType}
                      onChange={handleQuoteChange}
                      className="flex h-12 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <Label htmlFor="message" className="text-base text-gray-200">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={quoteForm.message} 
                    onChange={handleQuoteChange} 
                    placeholder="Any specific requirements or questions" 
                    rows={4} 
                    className="text-base bg-gray-700 text-white border-gray-600"
                  />
                </div>
                
                <Button type="submit" className="w-full gradient-primary hover:opacity-90 btn-hover text-lg h-14">
                  Get Your Free Quote
                </Button>
                
                <p className="text-center text-base text-gray-300">
                  <span className="text-red-400 font-bold">Special Offer:</span> 20% discount on file completion available for a limited time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Visa Application?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Contact our team today and take the first step towards your international visa.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 btn-hover text-lg px-10 py-7 h-auto">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
