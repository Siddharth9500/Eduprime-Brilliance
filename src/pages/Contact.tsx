import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/WaveDivider";
import { siteInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// Data for easy admin panel integration
const contactInfo = {
  address: siteInfo.address,
  phone: siteInfo.phone,
  email: siteInfo.email,
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  ],
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-mustard font-medium text-sm uppercase tracking-wider">Reach Out</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive mt-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                Have questions? We'd love to hear from you. Send us a message and we'll respond promptly.
              </p>
            </motion.div>
          </div>
          <WaveDivider fillColor="hsl(var(--beige))" className="mt-12" />
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-beige">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl font-bold text-olive mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mustard flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-olive">Address</h3>
                      <p className="text-muted-foreground mt-1">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mustard flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-olive">Phone</h3>
                      <p className="text-muted-foreground mt-1">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mustard flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-olive">Email</h3>
                      <p className="text-muted-foreground mt-1">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mustard flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-olive">Office Hours</h3>
                      {contactInfo.hours.map((hour, index) => (
                        <p key={index} className="text-muted-foreground mt-1">{hour.day}: {hour.time}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 aspect-video bg-cream rounded-2xl overflow-hidden border border-border">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-olive/5 to-olive/10">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-olive/30 mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl font-bold text-olive mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-olive mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 rounded-xl bg-cream border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-olive mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl bg-cream border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-olive mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="h-12 rounded-xl bg-cream border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-olive mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={6}
                      className="resize-none rounded-xl bg-cream border-border"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-olive hover:bg-olive-dark text-cream h-14 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
