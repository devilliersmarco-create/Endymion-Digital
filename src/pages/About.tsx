import { MapPin, Mail, Phone, Users, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
            alt="Studio" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Endymion Digital Design is a Cape Town based creative studio offering professional photography, video production, branding, printing, and digital marketing solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-primary">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We help businesses and individuals bring their ideas to life through high-quality design, print, and visual media. Our team of dedicated professionals ensures every project is handled with creativity and precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-accent">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Mission</h4>
                    <p className="text-sm text-gray-500">To deliver outstanding creative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-lg text-highlight">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Quality First</h4>
                    <p className="text-sm text-gray-500">Premium materials and professional editing.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                alt="Team working" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" 
                alt="Printing process" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Our Studio</h2>
            <p className="text-lg text-gray-600">We'd love to discuss your next project in person.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    19 Stonehedge Road<br />
                    Hanover Park<br />
                    Cape Town<br />
                    7780
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <a href="mailto:endymiondigital@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                    endymiondigital@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <a href="tel:+27676735227" className="text-gray-600 hover:text-accent transition-colors">
                    +27 67 673 5227
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.232742915857!2d18.5284833152136!3d-33.9865559806236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc435c24e8e811%3A0x8f7f7b2c2a3b2b2!2s19%20Stonehedge%20Rd%2C%20Hanover%20Park%2C%20Cape%20Town%2C%207780%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
