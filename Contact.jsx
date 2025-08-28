import react from "react";
import { Mail, Phone, Linkedin } from "lucide-react";  //icons


const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-12"
    >
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <a
              href="mailto:charankubireddi@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              charankubireddi@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
            <a
              href="tel:+916300344268"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              +91 63003 44268
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-500" />
            <a
              href="https://www.linkedin.com/in/charan-kumar-kubireddi-9a5b8b343"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 dark:hover:text-blue-500"
            >
              linkedin.com/in/your-charankubireddi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;