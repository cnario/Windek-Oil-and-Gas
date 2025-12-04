import React from 'react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-2 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-windek-dark mb-8 tracking-tight">
              Operational Excellence <br />
              <span className="text-gray-400 font-serif italic">in Energy</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-10">
              <p className="leading-relaxed">
                Windek Oil and Gas Limited stands at the forefront of Nigeria's energy sector. We are not just a service provider; we are strategic partners in national development.
              </p>
              <p className="leading-relaxed mt-4">
                Our integrated approach spans the entire value chain—from upstream exploration and drilling support to midstream infrastructure and downstream logistics. We leverage cutting-edge technology and indigenous expertise to deliver solutions that are safe, sustainable, and scalable.
              </p>
            </div>

            {/* Core Values Minimal List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              {CORE_VALUES.slice(0, 4).map((value, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <value.icon className="h-5 w-5 text-windek-blue" strokeWidth={1.5} />
                    <h4 className="font-bold text-windek-dark text-sm uppercase tracking-wide">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-slate-200">
              <img 
                src="https://www.coastalcrestenergyltd.com/images/bg/9.jpg" 
                alt="Oil and Gas Engineers" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-windek-dark/40 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded shadow-xl max-w-xs border-l-4 border-windek-blue hidden md:block">
              <p className="text-4xl font-bold text-windek-dark mb-1">100%</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Indigenous Compliance</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">Fully compliant with Nigerian Content Development standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;