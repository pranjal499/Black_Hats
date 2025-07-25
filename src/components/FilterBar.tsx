import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { eventCategories, eventTypes, difficultyLevels } from "@/data/mockEvents";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const popularTags = [
    "AI", "React", "Python", "Design", "Startup", "Remote", 
    "JavaScript", "Machine Learning", "Blockchain", "Data Science",
    "Mobile", "Cloud", "DevOps", "Cybersecurity", "UI/UX"
  ];

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    applyFilters({ tags: newTags });
  };

  const applyFilters = (newFilters: any = {}) => {
    const filters = {
      search: searchTerm,
      category: selectedCategory,
      type: selectedType,
      difficulty: selectedDifficulty,
      location: selectedLocation,
      tags: selectedTags,
      dateFrom,
      dateTo,
      ...newFilters
    };
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedType("All Types");
    setSelectedDifficulty("All Levels");
    setSelectedLocation("");
    setSelectedTags([]);
    setDateFrom(undefined);
    setDateTo(undefined);
    onFilterChange({});
  };

  const hasActiveFilters = 
    searchTerm || 
    selectedCategory !== "All" || 
    selectedType !== "All Types" || 
    selectedDifficulty !== "All Levels" ||
    selectedLocation ||
    selectedTags.length > 0 ||
    dateFrom ||
    dateTo;

  return (
    <motion.div 
      className="bg-card border border-border rounded-2xl shadow-soft p-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quick Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          placeholder="Search events, companies, or skills..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            applyFilters({ search: e.target.value });
          }}
          className="pl-10 h-12 text-base bg-background/50 border-border/50 focus:border-primary focus:bg-background"
        />
      </div>

      {/* Quick Filters Row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Select value={selectedCategory} onValueChange={(value) => {
          setSelectedCategory(value);
          applyFilters({ category: value });
        }}>
          <SelectTrigger className="w-[140px] bg-background/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {eventCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={(value) => {
          setSelectedType(value);
          applyFilters({ type: value });
        }}>
          <SelectTrigger className="w-[140px] bg-background/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="bg-background/50 border-border/50">
              <Calendar className="w-4 h-4 mr-2" />
              {dateFrom ? `${dateFrom.toLocaleDateString()}` : "Any Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={dateFrom}
              onSelect={(date) => {
                setDateFrom(date);
                applyFilters({ dateFrom: date });
              }}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-background/50 border-border/50"
        >
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>

        {hasActiveFilters && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </motion.div>
        )}
      </div>

      {/* Expanded Filters */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border pt-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Difficulty Level
                </label>
                <Select value={selectedDifficulty} onValueChange={(value) => {
                  setSelectedDifficulty(value);
                  applyFilters({ difficulty: value });
                }}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {difficultyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Enter city or 'Remote'"
                    value={selectedLocation}
                    onChange={(e) => {
                      setSelectedLocation(e.target.value);
                      applyFilters({ location: e.target.value });
                    }}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Date Range
                </label>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 justify-start bg-background/50">
                        {dateTo ? dateTo.toLocaleDateString() : "End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={dateTo}
                        onSelect={(date) => {
                          setDateTo(date);
                          applyFilters({ dateTo: date });
                        }}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">
                Popular Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <motion.div key={tag} whileTap={{ scale: 0.95 }}>
                    <Badge
                      variant={selectedTags.includes(tag) ? "default" : "secondary"}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground shadow-medium"
                          : "bg-background hover:bg-primary hover:text-primary-foreground"
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <X className="w-3 h-3 ml-1" />
                      )}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-blue-light rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-accent">
                    Selected Tags ({selectedTags.length})
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedTags([]);
                      applyFilters({ tags: [] });
                    }}
                    className="text-blue-accent hover:text-blue-accent hover:bg-blue-accent/10 h-auto p-1"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-blue-accent text-blue-accent-foreground"
                    >
                      {tag}
                      <X 
                        className="w-3 h-3 ml-1 cursor-pointer" 
                        onClick={() => handleTagToggle(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}