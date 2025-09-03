import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, Users, Calendar, Code, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Code,
    label: "Public Repositories",
    value: 24,
    suffix: "+",
    description: "Open source projects",
    color: "text-blue-400"
  },
  {
    icon: Star,
    label: "GitHub Stars",
    value: 25,
    suffix: "+",
    description: "Community appreciation",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    label: "Followers",
    value: 15,
    suffix: "",
    description: "Developer network",
    color: "text-green-400"
  },
  {
    icon: Calendar,
    label: "Years Experience",
    value: 3,
    suffix: "+",
    description: "In development",
    color: "text-purple-400"
  },
  {
    icon: Trophy,
    label: "Competitions",
    value: 5,
    suffix: "+",
    description: "Participated",
    color: "text-orange-400"
  },
  {
    icon: GitFork,
    label: "Projects Deployed",
    value: 12,
    suffix: "+",
    description: "Live applications",
    color: "text-pink-400"
  }
];

const achievements = [
  "ICPC Asia Jakarta Participant",
  "ICP Hacker House Bali 2024",
  "West Java Language Ambassador Finalist",
  "Outstanding Student Award",
  "SAP Analytics Cloud Certified"
];

export const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0;
            const increment = stat.value / 30; // 30 frames for smooth animation
            const timer = setInterval(() => {
              start += increment;
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.min(Math.floor(start), stat.value);
                return newCounters;
              });
              
              if (start >= stat.value) {
                clearInterval(timer);
              }
            }, 50);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 px-6 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="glass-effect hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-muted/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold">Notable Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                🏆 {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};