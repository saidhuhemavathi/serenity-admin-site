import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const instructors = [
  {
    name: 'Sarah Chen',
    role: 'Lead Wellness Therapist',
    image: 'https://images.unsplash.com/photo-1594824919066-d029cf5c5384?w=400&h=400&fit=crop&crop=face',
    specialties: ['Therapeutic Massage', 'Aromatherapy', 'Energy Healing'],
    experience: '12 years',
    bio: 'Sarah brings over a decade of holistic wellness expertise, specializing in traditional Eastern healing techniques combined with modern therapeutic practices.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Spa Director & Therapist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    specialties: ['Deep Tissue', 'Sports Therapy', 'Wellness Coaching'],
    experience: '15 years',
    bio: 'Michael combines his background in sports medicine with spa therapy to create transformative wellness experiences for every client.'
  },
  {
    name: 'Emily Watson',
    role: 'Facial & Skincare Specialist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    specialties: ['Advanced Facials', 'Organic Skincare', 'Anti-aging'],
    experience: '8 years',
    bio: 'Emily is passionate about natural skincare and uses only the finest organic products to help clients achieve radiant, healthy skin.'
  },
  {
    name: 'David Kim',
    role: 'Meditation & Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    specialties: ['Mindfulness', 'Hatha Yoga', 'Stress Relief'],
    experience: '10 years',
    bio: 'David guides clients through transformative meditation and yoga practices, helping them find inner peace and physical balance.'
  }
];

export function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-zen max-w-3xl mx-auto leading-relaxed">
            Our certified wellness professionals are dedicated to guiding you 
            on your journey to optimal health and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <Card 
              key={instructor.name} 
              className="zen-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 zen-transition"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold mb-1 text-foreground">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {instructor.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {instructor.experience} experience
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {instructor.specialties.map((specialty) => (
                      <Badge 
                        key={specialty} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-zen text-center leading-relaxed">
                  {instructor.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}