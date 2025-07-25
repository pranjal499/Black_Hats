import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User, Settings, Award, Calendar, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate about building scalable web apps.",
  });
  const [form, setForm] = useState(profile);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(form);
    setEditOpen(false);
  };

  const achievements = [
    { icon: Award, name: "Competition Winner", date: "Dec 2023" },
    { icon: Star, name: "Top Performer", date: "Nov 2023" },
    { icon: BookOpen, name: "Course Completed", date: "Oct 2023" },
  ];

  const recommendations = [
    {
      title: "Advanced React Workshop",
      type: "Course",
      difficulty: "Advanced",
      match: 95,
      color: "bg-blue-accent"
    },
    {
      title: "AI Startup Challenge",
      type: "Competition",
      difficulty: "Intermediate",
      match: 88,
      color: "bg-primary"
    },
    {
      title: "Frontend Developer Role",
      type: "Job",
      difficulty: "Senior",
      match: 92,
      color: "bg-green-accent"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Profile Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold text-foreground mb-2">{profile.name}</h1>
                  <p className="text-muted-foreground mb-4">{profile.title}</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => { setForm(profile); setEditOpen(true); }}>
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Competitions", value: "23", icon: Award },
                  { label: "Achievements", value: "12", icon: Star },
                  { label: "Events", value: "45", icon: Calendar },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Achievements */}
              <Card className="bg-gradient-card border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Your latest accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.name}
                        className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <achievement.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{achievement.name}</p>
                          <p className="text-sm text-muted-foreground">{achievement.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Opportunities based on your skills and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={rec.title}
                      className="p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-12 h-12 ${rec.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{rec.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{rec.type}</Badge>
                        <span className="text-sm text-muted-foreground">{rec.difficulty}</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Match</span>
                          <span className="text-sm font-medium text-foreground">{rec.match}%</span>
                        </div>
                        <Progress value={rec.match} className="h-2" />
                      </div>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
            />
            <Input
              placeholder="Title"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              required
            />
            <Textarea
              placeholder="Bio"
              value={form.bio}
              onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
            />
            <DialogFooter>
              <Button type="submit" variant="hero">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;