import React from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="glass p-10 rounded-3xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:charankubireddi@gmail.com"
              className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                 <Mail className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-300 font-medium">Email Me</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+916300344268"
              className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 hover:bg-green-600/20 border border-slate-700 hover:border-green-500 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                 <Phone className="text-green-400 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-300 font-medium">Call Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan-kumar-kubireddi-9a5b8b343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 hover:bg-blue-700/20 border border-slate-700 hover:border-blue-600 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                 <Linkedin className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="text-sm text-slate-300 font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer Text */}
      <div className="text-center mt-20 text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Charan Kumar. Built with React & Tailwind.</p>
      </div>
    </section>
  );
};

export default Contact;