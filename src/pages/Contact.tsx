
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    visaType: "business",
    newsletter: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      visaType: "business",
      newsletter: false
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            We're here to help with all your visa inquiries. Reach out to our team using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-100">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-blue-900/60 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100 mb-1">Office Location</h3>
                    <p className="text-gray-300">
                      Office 26 M2 Floor, Eden Tower,<br />
                      Gulberg 3, Lahore, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-blue-900/60 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100 mb-1">Phone Numbers</h3>
                    <p className="text-gray-300">
                      Office: +92 333 0481 399<br />
                      Mobile: +92 317 4848375
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-blue-900/60 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100 mb-1">Email Addresses</h3>
                    <p className="text-gray-300">
                      Info: info@borderlinevisa.com<br />
                      Support: support@borderlinevisa.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-blue-900/60 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100 mb-1">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map or Office Image */}
              <div className="mt-8 h-64 bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&h=400&q=80" 
                  alt="Lahore" 
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800/70 p-8 rounded-xl shadow-md border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-100">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your full name" 
                      required 
                      className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your email address" 
                      required 
                      className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Your phone number" 
                      required 
                      className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visaType" className="text-gray-200">Visa Type</Label>
                    <select 
                      id="visaType" 
                      name="visaType" 
                      value={formData.visaType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-700/70 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <Label htmlFor="subject" className="text-gray-200">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Subject of your message" 
                    required 
                    className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-200">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Write your message here..." 
                    rows={4} 
                    required 
                    className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    checked={formData.newsletter} 
                    onCheckedChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subscribe to our newsletter for visa updates
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 btn-hover">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "Do I need an appointment to visit your office?",
                answer: "Yes, we recommend scheduling an appointment to ensure our consultants are available to assist you properly. You can book an appointment by phone, email, or through our website."
              },
              {
                question: "How quickly can you process my visa application?",
                answer: "Processing times vary by visa type and individual circumstances. After the initial consultation, we can provide a more accurate timeline based on your specific situation."
              },
              {
                question: "Do you offer online consultations?",
                answer: "Yes, we offer virtual consultations for clients who cannot visit our office in person. You can schedule a video call with our visa experts through our online booking system."
              },
              {
                question: "What documents should I bring to my first consultation?",
                answer: "For the initial consultation, it's helpful to bring your passport, any previous visa documentation, educational certificates, and employment details depending on the type of visa you're applying for."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/70 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
