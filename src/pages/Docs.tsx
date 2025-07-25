import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Book, ChevronRight, Search, FileText, Video, Code, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Docs = () => {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      items: ["Quick Start Guide", "Account Setup", "First Competition"]
    },
    {
      icon: FileText,
      title: "Competitions",
      description: "Everything about participating in competitions",
      items: ["How to Register", "Submission Guidelines", "Judging Process"]
    },
    {
      icon: Video,
      title: "Tutorials",
      description: "Video guides and walkthroughs",
      items: ["Platform Overview", "Profile Setup", "Advanced Features"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Technical documentation for developers",
      items: ["Authentication", "Endpoints", "SDKs"]
    }
  ];

  const popularGuides = [
    { title: "How to win your first competition", views: "12.3k", time: "5 min read" },
    { title: "Building a strong profile", views: "8.7k", time: "3 min read" },
    { title: "Understanding evaluation criteria", views: "6.2k", time: "7 min read" },
    { title: "Team formation best practices", views: "4.8k", time: "4 min read" },
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to know about using EventHub to grow your career
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search documentation..."
              className="pl-10 h-12 text-lg bg-card border-border/50 focus:border-primary"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {docSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      >
                        <ChevronRight className="w-3 h-3 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                Popular Guides
              </CardTitle>
              <CardDescription>Most viewed documentation by our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularGuides.map((guide, index) => (
                  <motion.div
                    key={guide.title}
                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-200 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{guide.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{guide.views} views</span>
                        <span>•</span>
                        <span>{guide.time}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-gradient-hero rounded-2xl text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Community Forum
            </Button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;