import React, { useState, useRef } from 'react';
import { CONTACT_INFO } from '../constants';
import { CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We do NOT preventDefault here. We want the form to actually submit to the iframe.
    setStatus('submitting');
    console.log("--- Form Submission Started (Method: Hidden Iframe) ---");
  };

  const handleIframeLoad = () => {
    // This function runs when the iframe finishes loading the response from FormSubmit
    if (status === 'submitting') {
      console.log("--- Iframe Loaded: Submission Likely Successful ---");
      setStatus('success');
      // Optional: Reset form after success
      if (formRef.current) formRef.current.reset();
    }
  };

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

          <div className="bg-white rounded-sm p-8 lg:p-12 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
             
             {/* Hidden Iframe for Submission Target */}
             <iframe 
                name="hidden_iframe" 
                id="hidden_iframe" 
                ref={iframeRef}
                onLoad={handleIframeLoad}
                style={{ display: 'none' }} 
             ></iframe>

             {/* Success View */}
             <div className={`absolute inset-0 z-10 bg-white flex flex-col items-center justify-center p-8 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out_1]">
                    <CheckCircle className="h-10 w-10 text-green-500" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-bold text-windek-dark mb-4">Message Received</h3>
                <p className="text-slate-500 mb-8 leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting Windek Oil and Gas. Your inquiry has been successfully transmitted to our team. We will respond shortly.
                </p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center text-xs font-bold text-windek-blue uppercase tracking-widest hover:text-windek-dark transition-colors"
                >
                    Send Another Message
                </button>
             </div>

            {/* Form View */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${status === 'success' ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                <h3 className="text-windek-dark text-2xl font-bold mb-6">Send a Message</h3>
                
                <form 
                    ref={formRef}
                    action={`https://formsubmit.co/${CONTACT_INFO.email}`} 
                    method="POST" 
                    target="hidden_iframe"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                >
                    {/* Hidden Configuration Fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Website Inquiry" />
                    <input type="hidden" name="_template" value="table" />
                    {/* Honeypot for Anti-Spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                            <input required name="firstName" type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                            <input required name="lastName" type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                        <input required name="email" type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Inquiry</label>
                        <textarea required name="message" rows={3} className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-windek-dark focus:border-windek-blue focus:outline-none transition-colors"></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-windek-dark text-white font-bold uppercase tracking-widest py-4 hover:bg-windek-blue transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="animate-spin h-5 w-5" /> Sending...
                            </>
                        ) : (
                            "Submit Message"
                        )}
                    </button>
                </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Windek Oil and Gas Limited. RC 1493721.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;