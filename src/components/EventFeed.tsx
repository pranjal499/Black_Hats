import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EventCard } from "./EventCard";
import { FilterBar } from "./FilterBar";
import { mockEvents, Event } from "@/data/mockEvents";
import { Button } from "@/components/ui/button";
import { Grid, List, Filter, SortAsc } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EventFeed({ searchTerm }: { searchTerm?: string }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"date" | "deadline" | "participants" | "featured">("featured");
  const [filters, setFilters] = useState<any>({});
  const [showAll, setShowAll] = useState(false);

  const effectiveFilters = { ...filters };
  if (searchTerm !== undefined) {
    effectiveFilters.search = searchTerm;
  }

  const filteredAndSortedEvents = useMemo(() => {
    let events = [...mockEvents];

    // Apply filters
    if (effectiveFilters.search) {
      const searchLower = effectiveFilters.search.toLowerCase();
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.organizer.toLowerCase().includes(searchLower) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    if (effectiveFilters.category && effectiveFilters.category !== "All") {
      events = events.filter(event => event.category === effectiveFilters.category);
    }

    if (effectiveFilters.type && effectiveFilters.type !== "All Types") {
      events = events.filter(event => event.type === effectiveFilters.type);
    }

    if (effectiveFilters.difficulty && effectiveFilters.difficulty !== "All Levels") {
      events = events.filter(event => event.difficulty === effectiveFilters.difficulty);
    }

    if (effectiveFilters.location) {
      events = events.filter(event => 
        event.location.toLowerCase().includes(effectiveFilters.location.toLowerCase())
      );
    }

    if (effectiveFilters.tags && effectiveFilters.tags.length > 0) {
      events = events.filter(event =>
        effectiveFilters.tags.some((tag: string) => event.tags.includes(tag))
      );
    }

    if (effectiveFilters.dateFrom) {
      events = events.filter(event => new Date(event.date) >= effectiveFilters.dateFrom);
    }

    if (effectiveFilters.dateTo) {
      events = events.filter(event => new Date(event.date) <= effectiveFilters.dateTo);
    }

    // Sort events
    events.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case "participants":
          return b.participants - a.participants;
        default:
          return 0;
      }
    });

    return events;
  }, [effectiveFilters, sortBy]);

  const displayedEvents = showAll ? filteredAndSortedEvents : filteredAndSortedEvents.slice(0, 9);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trending <span className="bg-gradient-to-r from-primary to-blue-accent bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the hottest competitions, hackathons, and career opportunities from top companies worldwide.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <FilterBar onFilterChange={handleFilterChange} />

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                {filteredAndSortedEvents.length} opportunities found
              </span>
              {Object.keys(filters).some(key => filters[key] && filters[key] !== "All" && filters[key] !== "All Types" && filters[key] !== "All Levels") && (
                <Badge variant="secondary" className="bg-blue-light text-blue-accent">
                  Filtered
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Sort */}
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-background border border-border rounded-md px-3 py-1 text-sm focus:border-primary focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="date">Event Date</option>
                <option value="deadline">Deadline</option>
                <option value="participants">Most Popular</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-md"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-md"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {filteredAndSortedEvents.length > 0 ? (
            <motion.div
              key={`${sortBy}-${JSON.stringify(filters)}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {displayedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No opportunities found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find more opportunities.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFilters({})}
                className="bg-background"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        {!showAll && filteredAndSortedEvents.length > 9 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load {filteredAndSortedEvents.length - 9} More Opportunities
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}