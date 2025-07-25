import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Event } from "@/data/mockEvents";

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'competition':
        return 'bg-primary text-primary-foreground';
      case 'hackathon':
        return 'bg-purple-accent text-purple.accent-foreground';
      case 'workshop':
        return 'bg-blue-accent text-blue-accent-foreground';
      case 'internship':
        return 'bg-green-accent text-green.accent-foreground';
      case 'job':
        return 'bg-yellow-500 text-yellow-50';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const progressPercentage = (event.participants / event.maxParticipants) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20">
        {/* Image Header */}
        <div className="relative overflow-hidden">
          <img 
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {event.featured && (
              <Badge className="bg-primary text-primary-foreground animate-pulse-glow">
                Featured
              </Badge>
            )}
            <Badge className={getTypeColor(event.type)}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {event.difficulty}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {event.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {event.description}
            </p>
            <p className="text-xs text-muted-foreground">
              by <span className="font-medium text-foreground">{event.organizer}</span>
            </p>
          </div>

          {/* Event Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              <span>{formatDate(event.date)}</span>
              <div className="mx-2">•</div>
              <Clock className="w-4 h-4 mr-1 text-destructive" />
              <span className="text-destructive">Deadline: {formatDate(event.deadline)}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 text-blue-accent" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="font-medium text-foreground">{event.prize}</span>
            </div>
          </div>

          {/* Participants Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center text-muted-foreground">
                <Users className="w-4 h-4 mr-1" />
                <span>{event.participants.toLocaleString()} participants</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {event.maxParticipants.toLocaleString()} max
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <motion.div 
                className="bg-gradient-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs bg-blue-light text-blue-accent hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {event.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{event.tags.length - 3} more
              </Badge>
            )}
          </div>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              size="lg"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}