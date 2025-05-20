import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Appointments = () => {
  const { toast } = useToast();
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "china",
    date: "",
    time: "",
    message: ""
  });

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/send-form-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...appointmentForm, formType: 'appointment' })
      });
      if (response.ok) {
        toast({
          title: 'Appointment Request Submitted!',
          description: "We'll confirm your appointment shortly.",
          duration: 5000,
        });
        setAppointmentForm({
          name: '',
          email: '',
          phone: '',
          country: 'china',
          date: '',
          time: '',
          message: ''
        });
      } else {
        toast({
          title: 'Submission Failed',
          description: 'There was an error submitting your appointment. Please try again later.',
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your appointment. Please try again later.',
        duration: 5000,
      });
    }
  };

  const countries = [
    { id: "china", name: "China", image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "uk", name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "canada", name: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "spain", name: "Spain", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "belgium", name: "Belgium", image: "https://images.unsplash.com/photo-1608830597604-619220679440?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "japan", name: "Japan", image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "greece", name: "Greece", image: "https://images.unsplash.com/photo-1509854851158-677e730a9a12?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "italy", name: "Italy", image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&h=400&q=80" },
    { id: "germany", name: "Germany", image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800&h=400&q=80" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8 animate-fade-up">Schedule Your Appointment</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            Book a consultation with our visa experts for personalized guidance on your application journey.
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <Tabs defaultValue="china" className="w-full">
            <div className="text-center mb-12">
              <h2 className="section-title gradient-text">Select Your Destination</h2>
              <p className="section-subtitle">
                Choose the country you're applying to and schedule a consultation with our specialists.
              </p>
            </div>
            
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 mb-12 bg-gray-800 p-1">
              {countries.map(country => (
                <TabsTrigger 
                  key={country.id} 
                  value={country.id}
                  className="font-semibold py-2 data-[state=active]:gradient-primary"
                >
                  {country.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {countries.map(country => (
              <TabsContent key={country.id} value={country.id} className="animate-fade-in-delay">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                    <img 
                      src={country.image} 
                      alt={`${country.name} landscape`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/80 flex flex-col items-center justify-center p-8 text-center">
                      <h3 className="text-4xl font-bold text-white mb-4">{country.name} Visa Services</h3>
                      <p className="text-xl text-blue-100 mb-6">
                        Our experts specialize in {country.name} visa applications with a high success rate.
                      </p>
                      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                          <div className="text-4xl font-bold text-white">98%</div>
                          <div className="text-lg text-blue-100">Success Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                          <div className="text-4xl font-bold text-white">24h</div>
                          <div className="text-lg text-blue-100">Response Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="gradient-card p-10 rounded-2xl shadow-lg">
                    <h3 className="text-3xl font-bold mb-8 text-white">Book Your {country.name} Visa Consultation</h3>
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-lg font-medium">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={appointmentForm.name} 
                            onChange={handleAppointmentChange} 
                            placeholder="Your full name" 
                            required 
                            className="h-12 text-base bg-gray-800 border-gray-700"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-medium">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={appointmentForm.email} 
                            onChange={handleAppointmentChange} 
                            placeholder="Your email address" 
                            required 
                            className="h-12 text-base bg-gray-800 border-gray-700"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-lg font-medium">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={appointmentForm.phone} 
                            onChange={handleAppointmentChange} 
                            placeholder="Your phone number" 
                            required 
                            className="h-12 text-base bg-gray-800 border-gray-700"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-lg font-medium">Preferred Date</Label>
                          <div className="relative">
                            <Input 
                              id="date" 
                              name="date" 
                              type="date" 
                              value={appointmentForm.date} 
                              onChange={handleAppointmentChange} 
                              required 
                              className="h-12 text-base bg-gray-800 border-gray-700"
                            />
                            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="time" className="text-lg font-medium">Preferred Time</Label>
                          <Input 
                            id="time" 
                            name="time" 
                            type="time" 
                            value={appointmentForm.time} 
                            onChange={handleAppointmentChange} 
                            required 
                            className="h-12 text-base bg-gray-800 border-gray-700"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="visaType" className="text-lg font-medium">Visa Type</Label>
                          <select 
                            id="visaType" 
                            name="visaType" 
                            onChange={handleAppointmentChange}
                            className="flex h-12 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="business">Business Visa</option>
                            <option value="study">Study Visa</option>
                            <option value="family">Family Visa</option>
                            <option value="work">Work Visa</option>
                            <option value="tourist">Tourist Visa</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-lg font-medium">Additional Information</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={appointmentForm.message} 
                          onChange={handleAppointmentChange} 
                          placeholder="Any specific questions or requirements?" 
                          rows={4} 
                          className="text-base bg-gray-800 border-gray-700"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full gradient-primary hover:opacity-90 btn-hover text-lg h-14 font-bold">
                        Schedule Appointment
                      </Button>
                      
                      <p className="text-center text-base text-gray-400">
                        By scheduling an appointment, you agree to our <a href="/terms" className="text-blue-400 hover:underline">Terms & Conditions</a>.
                      </p>
                    </form>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Why Book a Consultation?</h2>
            <p className="section-subtitle">
              Our personalized consultations provide exclusive benefits to enhance your visa application process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Guidance",
                description: "Get personalized advice from visa specialists with years of experience and in-depth knowledge."
              },
              {
                title: "Documentation Support",
                description: "Receive comprehensive assistance with preparing and organizing your visa application documents."
              },
              {
                title: "Higher Success Rate",
                description: "Significantly improve your chances of visa approval with professional consultation."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="gradient-card p-8 rounded-xl shadow-lg stagger-item stagger-delay-${index + 1}"
              >
                <div className="h-16 w-16 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-lg text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Our visa consultants are available to address your urgent inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 btn-hover text-lg px-8 py-6 h-auto font-bold">
              <a href="tel:+923330481399">+92 333 0481 399</a>
            </Button>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 btn-hover text-lg px-8 py-6 h-auto font-bold">
              <a href="tel:+923174848375">+92 317 4848 375</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
