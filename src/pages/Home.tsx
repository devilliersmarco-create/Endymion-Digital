import { Link } from 'react-router-dom';
import { Camera, Printer, PenTool, Video, PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      desc: "Professional photoshoots, events, and editing.",
      link: "/services#photography"
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Digital Printing",
      desc: "High-quality business cards, banners, and posters.",
      link: "/services#printing"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Branding",
      desc: "Logo design, brand identity, and vehicle wraps.",
      link: "/services#branding"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      desc: "Promotional videos, ads, and event coverage.",
      link: "/services#video"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Video Background Fallback/Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
          alt="Printing and Design" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* If you have a real video:
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        */}

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Creative Digital Printing <br className="hidden md:block" />
            <span className="text-accent">& Media Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
          >
            Photoshoots • Branding • Printing • Digital Marketing
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/portfolio" 
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              View Our Work <PlayCircle className="w-5 h-5" />
            </Link>
            <Link 
              to="/quote" 
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help businesses and individuals bring their ideas to life through high-quality design, print, and visual media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to={service.link} className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-400 mb-10">Use our instant quote tool to get an estimate for your printing, branding, or photography needs.</p>
          <Link 
            to="/quote" 
            className="inline-block bg-highlight text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            Calculate Instant Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
