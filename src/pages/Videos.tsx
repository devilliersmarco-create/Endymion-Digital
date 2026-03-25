import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

const videos = [
  { id: 1, title: 'Corporate Promo', category: 'Promotional', thumb: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Summer Festival', category: 'Event Highlights', thumb: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Product Launch', category: 'Ads', thumb: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Studio Tour', category: 'Behind-the-scenes', thumb: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop' },
];

export function Videos() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6"
          >
            Video Gallery
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our video production work, from promotional content to event highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative aspect-video bg-black cursor-pointer">
                <img 
                  src={video.thumb} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                    <PlayCircle className="w-8 h-8 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {video.category}
                  </span>
                  <span className="bg-black/60 text-white px-2 py-1 rounded text-xs font-mono backdrop-blur-sm">
                    02:45
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{video.title}</h3>
                <p className="text-gray-500 text-sm">Endymion Digital Design</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
