import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    text: 'Professional service and amazing print quality. The team at Endymion completely transformed our brand identity.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Ndlovu',
    role: 'Event Organizer',
    text: 'The video coverage for our annual festival was spectacular. They captured every important moment perfectly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michelle Smith',
    role: 'Small Business Owner',
    text: 'Fast turnaround on our vehicle wraps and the design is eye-catching. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Carter',
    role: 'Bride & Groom',
    text: 'Our wedding photos are breathtaking. The editing is so natural and beautiful. Thank you for making our day unforgettable.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6"
          >
            Client Testimonials
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-200" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-8 italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
