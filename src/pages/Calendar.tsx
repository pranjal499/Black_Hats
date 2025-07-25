import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const Calendar = () => {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const [events, setEvents] = useState([
    { date: 15, title: "AI Hackathon", type: "competition", color: "bg-primary" },
    { date: 18, title: "React Workshop", type: "workshop", color: "bg-blue-accent" },
    { date: 22, title: "Job Fair", type: "job", color: "bg-green-accent" },
    { date: 25, title: "Design Contest", type: "competition", color: "bg-purple-accent" },
    { date: 28, title: "Tech Talk", type: "event", color: "bg-primary" },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", type: "competition" });

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    const day = Number(form.date.split("-")[2]);
    setEvents([
      ...events,
      { date: day, title: form.title, type: form.type, color: "bg-primary" },
    ]);
    setForm({ title: "", date: "", type: "competition" });
    setOpen(false);
  };

  const upcomingEvents = [
    {
      date: "Dec 15",
      time: "9:00 AM",
      title: "AI Hackathon 2024",
      type: "Competition",
      registrations: 1240,
      color: "bg-primary"
    },
    {
      date: "Dec 18",
      time: "2:00 PM",
      title: "Advanced React Workshop",
      type: "Workshop",
      registrations: 85,
      color: "bg-blue-accent"
    },
    {
      date: "Dec 22",
      time: "10:00 AM",
      title: "Tech Career Fair",
      type: "Job Fair",
      registrations: 567,
      color: "bg-green-accent"
    },
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Event Calendar</h1>
            <p className="text-muted-foreground">Keep track of all upcoming opportunities</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="orange">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddEvent} className="space-y-4">
                  <Input
                    placeholder="Event Title"
                    value={form.title}
                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    required
                  />
                  <Input
                    type="date"
                    value={form.date}
                    onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                    required
                  />
                  <Select value={form.type} onValueChange={value => setForm(f => ({ ...f, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="competition">Competition</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="job">Job</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                    </SelectContent>
                  </Select>
                  <DialogFooter>
                    <Button type="submit" variant="hero">Add Event</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                    {monthName}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {weekDays.map((day) => (
                    <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const dayEvents = events.filter(event => event.date === day);
                    const isToday = day === currentDate.getDate();
                    
                    return (
                      <motion.div
                        key={index}
                        className={`min-h-[80px] p-2 border border-border/30 rounded-lg relative cursor-pointer hover:bg-accent transition-colors ${
                          isToday ? 'bg-primary/5 border-primary/30' : ''
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.01 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {day && (
                          <>
                            <div className={`text-sm font-medium ${isToday ? 'text-primary' : 'text-foreground'}`}>
                              {day}
                            </div>
                            <div className="mt-1 space-y-1">
                              {dayEvents.map((event, eventIndex) => (
                                <div
                                  key={eventIndex}
                                  className={`text-xs px-1 py-0.5 rounded ${event.color} text-white truncate`}
                                >
                                  {event.title}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your registered events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    className="p-4 border border-border/30 rounded-lg hover:border-primary/50 transition-all duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 ${event.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                          <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                        </div>
                        <h3 className="font-medium text-foreground mb-1">{event.title}</h3>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{event.time}</span>
                          <span>{event.registrations} registered</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "View All Events", description: "Browse complete event list" },
                  { title: "My Registrations", description: "Manage your registrations" },
                  { title: "Export Calendar", description: "Export to your calendar app" },
                  { title: "Set Reminders", description: "Configure notifications" },
                ].map((action, index) => (
                  <motion.button
                    key={action.title}
                    className="w-full text-left p-3 border border-border/30 rounded-lg hover:border-primary/50 transition-all duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="font-medium text-foreground text-sm">{action.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
                  </motion.button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;