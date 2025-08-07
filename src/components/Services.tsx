import { Waves, Heart, Sparkles, Flower2, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Waves,
    title: 'Therapeutic Massage',
    description: 'Relax and rejuvenate with our signature therapeutic massages designed to melt away stress and tension.',
    duration: '60-90 min',
    price: 'From $120'
  },
  {
    icon: Heart,
    title: 'Couples Retreat',
    description: 'Reconnect with your partner through synchronized wellness treatments in our private couples suite.',
    duration: '120 min',
    price: 'From $350'
  },
  {
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    description: 'Advanced facial treatments using premium organic products to restore your natural glow.',
    duration: '75 min',
    price: 'From $95'
  },
  {
    icon: Flower2,
    title: 'Aromatherapy',
    description: 'Immerse yourself in carefully curated essential oil treatments for mind and body harmony.',
    duration: '45-60 min',
    price: 'From $85'
  },
  {
    icon: Zap,
    title: 'Energy Healing',
    description: 'Restore balance through ancient healing techniques combined with modern wellness practices.',
    duration: '60 min',
    price: 'From $110'
  },
  {
    icon: Shield,
    title: 'Wellness Coaching',
    description: 'Personalized wellness plans to help you achieve lasting health and vitality.',
    duration: '45 min',
    price: 'From $75'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-zen max-w-3xl mx-auto leading-relaxed">
            Experience our carefully curated wellness treatments designed to restore, 
            rejuvenate, and reconnect you with your inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="service-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 zen-transition">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-zen leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                  <div className="text-sm text-muted-foreground">
                    {service.duration}
                  </div>
                  <div className="font-semibold text-primary">
                    {service.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}