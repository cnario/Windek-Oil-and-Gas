import React from 'react';
import { GROWTH_GOALS } from '../constants';
import { ShieldCheck, TrendingUp, Zap } from 'lucide-react';

const Growth: React.FC = () => {
  return (
    <section id="esg" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
           <h2 className="text-3xl md:text-4xl font-bold text-windek-dark mb-6 tracking-tight">Future Roadmap</h2>
           <p className="text-slate-600 text-lg font-light">
             We are building a legacy of sustainability. Our growth strategy balances aggressive expansion with strict environmental stewardship and social responsibility.
           </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {GROWTH_GOALS.map((goal, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 p-8 h-full border border-gray-100 transition-colors group-hover:bg-windek-dark group-hover:border-windek-dark">
                <div className="flex items-center justify-between mb-8">
                   <span className="text-5xl font-serif text-gray-200 group-hover:text-white/10 font-bold transition-colors">0{index + 1}</span>
                   <goal.icon className="h-8 w-8 text-windek-blue" strokeWidth={1.5} />
                </div>
                
                <p className="text-xs font-bold text-windek-blue uppercase tracking-widest mb-3">{goal.period}</p>
                <h3 className="text-xl font-bold text-windek-dark group-hover:text-white mb-4 transition-colors">{goal.title}</h3>
                <p className="text-slate-600 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ESG Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-windek-dark text-white">
           <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop" 
               alt="Black Engineer" 
               className="w-full h-full object-cover opacity-20 grayscale" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-windek-dark via-windek-dark/80 to-transparent"></div>
           </div>
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
             <div>
               <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-4 block">Sustainability</span>
               <h3 className="text-3xl md:text-4xl font-bold mb-6">Commitment to ESG</h3>
               <p className="text-gray-300 mb-8 font-light">
                 Our business model is intrinsically linked to the well-being of our host communities. We believe that true profitability is only achieved when it is shared.
               </p>
               <div className="flex gap-4">
                 <div className="px-6 py-3 bg-white/5 border border-white/10 rounded backdrop-blur-sm">
                   <p className="font-bold text-white">ISO 45001</p>
                   <p className="text-xs text-gray-500">Safety Standards</p>
                 </div>
                 <div className="px-6 py-3 bg-white/5 border border-white/10 rounded backdrop-blur-sm">
                   <p className="font-bold text-white">Zero Flaring</p>
                   <p className="text-xs text-gray-500">Target 2028</p>
                 </div>
               </div>
             </div>
             
             <div className="bg-white/5 p-8 border-l-2 border-windek-blue backdrop-blur-sm">
               <blockquote className="text-xl text-gray-200 italic font-serif mb-6">
                 "Our goal is to be the benchmark for indigenous excellence, proving that local content can deliver global standards of safety and efficiency."
               </blockquote>
               <cite className="not-italic text-sm font-bold text-white uppercase tracking-wide">Windek Management</cite>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Growth;