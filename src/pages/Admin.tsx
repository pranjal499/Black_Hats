import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Users, BarChart3, Settings, Plus, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Calendar, label: "Events", href: "/admin/events" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Bell, label: "Notifications", href: "/admin/notifications" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const stats = [
    { title: "Total Events", value: "2,847", change: "+12%", color: "text-green-accent" },
    { title: "Active Users", value: "48,392", change: "+8%", color: "text-blue-accent" },
    { title: "Registrations", value: "12,483", change: "+23%", color: "text-primary" },
    { title: "Revenue", value: "$94,532", change: "+15%", color: "text-purple-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <motion.aside 
          className="w-64 min-h-screen bg-card border-r border-border p-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-2">Admin Panel</h2>
            <p className="text-sm text-muted-foreground">Manage your platform</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <motion.button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  item.active 
                    ? "bg-primary text-primary-foreground shadow-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
              </div>
              <Button variant="orange" size="lg" className="shadow-glow">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <p className={`text-sm ${stat.color} font-medium`}>
                        {stat.change} from last month
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest events and user activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border border-border/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            New registration for "AI Hackathon 2024"
                          </p>
                          <p className="text-xs text-muted-foreground">2 minutes ago</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;