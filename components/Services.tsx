import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-32 bg-windek-dark text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2e3646_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-3 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Integrated Solutions <br/>
              <span className="text-gray-500">Across the Value Chain</span>
            </h2>
          </div>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="hidden md:inline-flex items-center text-sm font-bold text-white hover:text-windek-blue transition-colors pb-1 border-b border-white/20 hover:border-windek-blue"
          >
            Discuss Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="group relative rounded-sm overflow-hidden border border-white/10 bg-windek-dark/50 hover:border-windek-blue/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
              
              {/* Image Header */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-windek-dark via-transparent to-transparent opacity-90"></div>
                
                {/* Icon positioned over the image/card boundary */}
                <div className="absolute bottom-4 left-6 bg-windek-blue p-3 rounded shadow-lg shadow-black/20 z-10">
                  <service.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 pt-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-windek-blue transition-colors">{service.title}</h3>
                
                <ul className="space-y-4 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 font-light flex items-start group-hover:text-gray-300 transition-colors">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-windek-blue shrink-0 opacity-50 group-hover:opacity-100"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;