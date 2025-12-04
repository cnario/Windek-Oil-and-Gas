import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
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
          <a href="#contact" className="hidden md:inline-flex items-center text-sm font-bold text-white hover:text-windek-blue transition-colors pb-1 border-b border-white/20 hover:border-windek-blue">
            Discuss Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="group relative p-8 rounded-none border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-windek-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                <service.icon className="h-10 w-10 text-white" strokeWidth={1} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-windek-blue transition-colors">{service.title}</h3>
              
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-400 font-light flex items-start">
                    <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-windek-blue shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="h-6 w-6 text-windek-blue" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;