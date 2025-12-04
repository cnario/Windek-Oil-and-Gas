import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-windek-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Let's build the future <br/> <span className="text-windek-blue">together.</span></h2>
            
            <div className="space-y-8 mt-12">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Visit Us</p>
                <p className="text-xl text-white font-light">{CONTACT_INFO.address}</p>
              </div>
              
              <div className="flex gap-12">
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                   <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-white hover:text-windek-blue transition-colors">{CONTACT_INFO.email}</a>
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Call</p>
                   <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg text-white hover:text-windek-blue transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-8 lg:p-12">
            <h3 className="text-windek-dark text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Inquiry</label>
                <textarea rows={3} className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-windek-dark text-white font-bold uppercase tracking-widest py-4 hover:bg-windek-blue transition-colors duration-300">
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Windek Oil and Gas Limited. RC 1493721.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;