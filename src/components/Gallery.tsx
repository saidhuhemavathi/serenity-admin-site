import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
    alt: 'Relaxing massage therapy room',
    category: 'Treatment Rooms'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    alt: 'Serene yoga studio',
    category: 'Yoga & Meditation'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop',
    alt: 'Luxury facial treatment',
    category: 'Facial Treatments'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1596178060671-7c9a8baa2d4c?w=600&h=400&fit=crop',
    alt: 'Peaceful meditation garden',
    category: 'Outdoor Spaces'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1559516503-e52b0c3f4ac0?w=600&h=400&fit=crop',
    alt: 'Hot stone therapy session',
    category: 'Treatment Rooms'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1591343395902-0bdf5fb2cd19?w=600&h=400&fit=crop',
    alt: 'Couples treatment suite',
    category: 'Couples Treatments'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=600&h=400&fit=crop',
    alt: 'Aromatherapy essential oils',
    category: 'Aromatherapy'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    alt: 'Tranquil water feature',
    category: 'Outdoor Spaces'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Experience Our <span className="text-gradient">Sanctuary</span>
          </h2>
          <p className="text-xl text-zen max-w-3xl mx-auto leading-relaxed">
            Step into our world of tranquility and discover the beautiful spaces 
            designed to nurture your mind, body, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up hover:scale-105 zen-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 zen-transition"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 zen-transition">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{image.category}</p>
                  <p className="text-white/80 text-xs">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background zen-transition"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-white font-heading font-semibold text-lg mb-1">
                    {selectedImage.category}
                  </h3>
                  <p className="text-white/80">{selectedImage.alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}