import React from 'react';
import { MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        
        {/* Visual Side */}
        <div className="relative h-96 lg:h-auto bg-gray-900 group overflow-hidden">
          <img 
            src="https://i0.wp.com/www.mctimothyassociates.com/wp-content/uploads/2023/12/Oil-and-Gas-Storage-terminal-large.jpg" 
            alt="Refinery Infrastructure at Sunset" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-windek-dark/60 group-hover:bg-windek-dark/40 transition-colors duration-500"></div>
          
          <div className="absolute bottom-0 left-0 p-8 lg:p-16">
             <span className="inline-block px-4 py-2 bg-windek-red text-white text-xs font-bold uppercase tracking-wider mb-4">Flagship Development</span>
             <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">LPG Terminal Facility</h3>
             <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm uppercase tracking-wide">Atabrikang, Akwa Ibom</span>
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center p-8 lg:p-24 bg-white">
          <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-4">Featured Project</span>
          <h2 className="text-4xl font-bold text-windek-dark mb-8 tracking-tight">20,000 MT Storage & Distribution Hub</h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
            A landmark infrastructure project designed to revolutionize LPG availability in Southern Nigeria. This facility represents our commitment to solving energy infrastructure deficits through strategic capital deployment and engineering excellence.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
               <p className="text-4xl font-bold text-windek-dark mb-1">$100M</p>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Valuation</p>
            </div>
            <div>
               <p className="text-4xl font-bold text-windek-dark mb-1">Q4 2025</p>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Target Completion</p>
            </div>
            <div className="col-span-2 pt-8 border-t border-gray-100">
               <p className="font-semibold text-windek-dark mb-2">Strategic Partners</p>
               <p className="text-slate-500 text-sm">Collaborating with Cakasa Nigeria Limited for world-class EPCI delivery.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;