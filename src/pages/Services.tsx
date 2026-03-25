import { Camera, Video, PenTool, Printer, Shirt, Car } from 'lucide-react';
import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital media, printing, and branding solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Photography */}
      <section id="photography" className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-xl text-accent">
                  <Camera className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Photography Services</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Professional photoshoots & editing for all occasions. We capture moments that matter with high-end equipment and expert post-processing.
              </p>
              <ul className="space-y-4 mb-10">
                {['Matric photoshoots', 'Wedding photography', 'Catalogue photography', 'Professional editing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Book a Photoshoot
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-500">Interactive Editing Preview</h3>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop&blur=10"
                afterImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                beforeLabel="Raw"
                afterLabel="Edited"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Production */}
      <section id="video" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-xl text-highlight">
                  <Video className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Video Production</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                High-quality video capture & editing. From corporate promos to event coverage, we tell your story through compelling visuals.
              </p>
              <ul className="space-y-4 mb-10">
                {['Promotional videos', 'Event coverage', 'Business advertisements', 'Social media video content'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-highlight"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Request a Video Project
              </Link>
            </div>
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Video Production" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding */}
      <section id="branding" className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-xl text-purple-600">
                  <PenTool className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-primary">Advertising & Branding</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Build a strong, memorable brand identity. We design logos, marketing materials, and digital campaigns that stand out.
              </p>
              <ul className="space-y-4 mb-10">
                {['Brand identity', 'Logo design', 'Marketing campaigns', 'Digital advertising', 'Social media marketing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-500">See a Branding Transformation</h3>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop&grayscale=1"
                afterImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop"
                beforeLabel="Old Brand"
                afterLabel="New Brand"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Printing */}
      <section id="printing" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-blue-50 p-4 rounded-xl text-accent mb-6">
              <Printer className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Digital Printing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality print products for your business needs. Hover over items to preview.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Business Cards', img: 'https://images.unsplash.com/photo-1589041127535-40c2505e66c9?q=80&w=600&auto=format&fit=crop' },
              { name: 'Posters', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop' },
              { name: 'Banners', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop' },
              { name: 'Rollups', img: 'https://images.unsplash.com/photo-1531685250784-af5870cefa22?q=80&w=600&auto=format&fit=crop' },
              { name: 'Gazebos', img: 'https://images.unsplash.com/photo-1496337589254-4e19d0eec7a4?q=80&w=600&auto=format&fit=crop' },
              { name: 'Teardrop Banners', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop' }
            ].map((item, i) => (
              <div key={i} className="group relative h-64 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white group-hover:bg-black/40 transition-colors duration-500">
                  <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apparel & Vehicle */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Apparel */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-pink-50 p-4 rounded-xl text-pink-600">
                  <Shirt className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Apparel Printing</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Custom clothing branding using high-quality DTF (Direct to Film) printing methods.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {['T-shirt printing', 'Hoodies', 'Caps', 'Woolen hats'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="aspect-video rounded-xl overflow-hidden bg-black relative">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" 
                  alt="Apparel Printing" 
                  className="w-full h-full object-cover opacity-70"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">Watch Process</span>
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-xl text-green-600">
                  <Car className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Vehicle Branding</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Turn your vehicles into moving billboards with our premium vehicle wrap and branding services.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {['Trucks', 'Cars', 'Business stands', 'Fleet branding'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop&grayscale=1"
                afterImage="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop"
                beforeLabel="Plain"
                afterLabel="Branded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
