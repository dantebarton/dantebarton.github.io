import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("Change event:", e.target.name, e.target.value); // Debugging line
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const recipientEmail = "dantebartona.j@gmail.com";
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default mail client
    window.open(mailtoLink, "_blank", "noopener,noreferrer");
    
    // Show success message after a short delay to allow the mailto link to open
    setTimeout(() => {
      toast({
        title: "Message ready to send!",
        description: "Your email client has been opened with your message.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-[#4D96DA]" />,
      title: "Email",
      value: "dantebartona.j@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-[#4D96DA]" />,
      title: "Phone",
      value: "+1 (857) 544-7708"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#4D96DA]" />,
      title: "Location",
      value: "MA"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-dark mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#4D96DA] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for any work opportunities or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#4D96DA] hover:bg-[#3778B8] text-white flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Preparing Email..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          <div className="order-1 lg:order-2 lg:pl-12">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-serif font-semibold text-navy-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">{info.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-navy-dark font-medium">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-navy-dark font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/dante-barton/" className="w-10 h-10 bg-[#4D96DA] text-white rounded-full flex items-center justify-center hover:bg-[#3778B8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://github.com/dantebarton" className="w-10 h-10 bg-[#4D96DA] text-white rounded-full flex items-center justify-center hover:bg-[#3778B8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
