import { Clock, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const scheduleData = [
  {
    day: 'Monday',
    sessions: [
      { time: '9:00 AM', title: 'Morning Meditation', type: 'Group', location: 'Zen Garden', instructor: 'David Kim' },
      { time: '11:00 AM', title: 'Therapeutic Massage', type: 'Individual', location: 'Room 1-3', instructor: 'Sarah Chen' },
      { time: '2:00 PM', title: 'Couples Yoga', type: 'Couples', location: 'Studio A', instructor: 'Emily Watson' },
      { time: '4:00 PM', title: 'Aromatherapy Session', type: 'Individual', location: 'Room 4-6', instructor: 'Michael Rodriguez' }
    ]
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '8:30 AM', title: 'Sunrise Yoga', type: 'Group', location: 'Outdoor Deck', instructor: 'David Kim' },
      { time: '10:00 AM', title: 'Facial Treatments', type: 'Individual', location: 'Beauty Suite', instructor: 'Emily Watson' },
      { time: '1:00 PM', title: 'Deep Tissue Massage', type: 'Individual', location: 'Room 1-3', instructor: 'Michael Rodriguez' },
      { time: '3:30 PM', title: 'Wellness Consultation', type: 'Individual', location: 'Consultation Room', instructor: 'Sarah Chen' }
    ]
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '9:00 AM', title: 'Mindfulness Workshop', type: 'Group', location: 'Meditation Hall', instructor: 'David Kim' },
      { time: '11:30 AM', title: 'Prenatal Massage', type: 'Individual', location: 'Room 2', instructor: 'Sarah Chen' },
      { time: '2:00 PM', title: 'Anti-aging Facial', type: 'Individual', location: 'Beauty Suite', instructor: 'Emily Watson' },
      { time: '4:00 PM', title: 'Energy Healing', type: 'Individual', location: 'Healing Room', instructor: 'Michael Rodriguez' }
    ]
  }
];

export function Schedule() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Group': return 'bg-primary/10 text-primary border-primary/20';
      case 'Individual': return 'bg-accent/10 text-accent-foreground border-accent/20';
      case 'Couples': return 'bg-secondary text-secondary-foreground border-border';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Weekly <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-zen max-w-3xl mx-auto leading-relaxed">
            Plan your perfect wellness journey with our comprehensive schedule 
            of treatments and classes available throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <Card 
              key={day.day} 
              className="zen-card animate-fade-in-up"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-heading text-center text-gradient">
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div 
                    key={sessionIndex}
                    className="p-4 rounded-xl bg-card/50 border border-border/30 hover:bg-card/80 zen-transition group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{session.time}</span>
                      </div>
                      <Badge className={getTypeColor(session.type)}>
                        <Users className="w-3 h-3 mr-1" />
                        {session.type}
                      </Badge>
                    </div>
                    
                    <h4 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary zen-transition">
                      {session.title}
                    </h4>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{session.location}</span>
                      </div>
                      <div className="text-xs">
                        with <span className="font-medium text-primary">{session.instructor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All sessions are available by appointment. Walk-ins welcome based on availability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Users className="w-3 h-3 mr-1" />
              Group Sessions
            </Badge>
            <Badge className="bg-accent/10 text-accent-foreground border-accent/20">
              <Users className="w-3 h-3 mr-1" />
              Individual Sessions
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground border-border">
              <Users className="w-3 h-3 mr-1" />
              Couples Sessions
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}