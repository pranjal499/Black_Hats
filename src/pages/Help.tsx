import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle, ChevronDown, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const faqs = [
    {
      question: "How do I register for a competition?",
      answer: "To register for a competition, simply browse our competitions page, find an event you're interested in, and click the 'Register' button. You'll need to complete your profile and meet any eligibility requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I participate in multiple competitions simultaneously?",
      answer: "Yes! You can participate in as many competitions as you'd like, as long as you meet the requirements for each one and can manage the time commitments."
    },
    {
      question: "How are competition winners selected?",
      answer: "Winners are selected based on the specific criteria outlined in each competition. This typically includes factors like innovation, technical implementation, presentation quality, and adherence to guidelines."
    },
    {
      question: "What if I need to withdraw from a competition?",
      answer: "You can withdraw from a competition at any time through your dashboard. Refund policies vary by competition and are outlined in the terms and conditions."
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to your profile page and click the 'Edit Profile' button. You can update your personal information, skills, bio, and other details from there."
    },
    {
      question: "Can I form a team for competitions?",
      answer: "Many competitions allow team participation. Check the specific competition rules to see if teams are allowed and what the maximum team size is."
    },
    {
      question: "How do I get notifications about new opportunities?",
      answer: "Enable notifications in your account settings and select your preferred categories. You can choose to receive notifications via email, push notifications, or both."
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      color: "bg-blue-accent"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "Send Email",
      color: "bg-green-accent"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      action: "Call Now",
      color: "bg-purple-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How can we help?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help..."
              className="pl-10 h-12 text-lg bg-card border-border/50 focus:border-primary"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <AccordionItem value={`item-${index}`} className="border border-border/30 rounded-lg px-4">
                        <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Choose how you'd like to get help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    className="p-4 border border-border/30 rounded-lg hover:border-primary/50 transition-all duration-200 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">{option.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Getting Started Guide",
                  "Account Settings",
                  "Privacy Policy",
                  "Terms of Service",
                  "Community Guidelines"
                ].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-gradient-hero rounded-2xl text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Our support team is standing by to assist you with any questions or issues.
          </p>
          <Button variant="secondary" size="lg">
            Submit a Support Ticket
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;