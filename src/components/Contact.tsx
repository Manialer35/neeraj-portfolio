
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link for sending email
    const mailtoLink = `mailto:neerajmadkar35@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened!",
      description: "Your default email client has been opened with the message. Please send it to complete the contact.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "neerajmadkar35@gmail.com",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8888769281",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India, Maharashtra, Pune",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold">Send a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 hover:from-pink-600 hover:via-rose-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always excited to collaborate on new projects and explore innovative ideas. 
                Whether you need video editing, web development, or any creative-technical solution, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group hover-scale cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4 sm:p-6 text-center">
                <h4 className="text-lg sm:text-xl font-bold mb-2">Available for Freelance</h4>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Currently accepting new projects and collaborations
                </p>
                <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto animate-pulse"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
