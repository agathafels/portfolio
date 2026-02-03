import { Phone, MapPin, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#020617] text-white">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-teal-300 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-md">
              I&apos;d love to connect and explore new opportunities and
              collaborations.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <a
              href="mailto:agatha.felisitas@gmail.com"
              className="group backdrop-blur-lg bg-purple-500/10 p-4 rounded-2xl shadow-xl hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 border border-purple-500/20 flex items-center justify-center"
              aria-label="Send email to Agatha"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-500/20 p-2.5 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Mail
                    className="w-5 h-5 text-purple-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Email</h3>
                  <p className="text-gray-400 text-xs break-all">
                    agatha.felisitas
                    <br />
                    @gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+15106104556"
              className="group backdrop-blur-lg bg-blue-500/10 p-4 rounded-2xl shadow-xl hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 border border-blue-500/20 flex items-center justify-center"
              aria-label="Call Agatha"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-blue-500/20 p-2.5 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Phone</h3>
                  <p className="text-gray-400 text-xs">+1 (510) 610-4556</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/agathasantoso/"
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-lg bg-cyan-500/10 p-4 rounded-2xl shadow-xl hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 border border-cyan-500/20 flex items-center justify-center"
              aria-label="Visit Agatha's LinkedIn profile"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-cyan-500/20 p-2.5 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Linkedin
                    className="w-5 h-5 text-cyan-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">LinkedIn</h3>
                  <p className="text-gray-400 text-xs">Agatha Santoso</p>
                </div>
              </div>
            </a>

            <div className="backdrop-blur-lg bg-pink-500/10 p-4 rounded-2xl shadow-xl border border-pink-500/20 flex items-center justify-center">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-pink-500/20 p-2.5 rounded-lg">
                  <MapPin
                    className="w-5 h-5 text-pink-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Location</h3>
                  <p className="text-gray-400 text-xs">Berkeley, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
