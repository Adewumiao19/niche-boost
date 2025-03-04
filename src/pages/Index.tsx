
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContentIdeas from "../components/ContentIdeas";
import TitleGenerator from "../components/TitleGenerator";
import SignupModal from "../components/SignupModal";

const Index = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSignupClick={() => setShowSignupModal(true)} />
      <main className="pt-16">
        <Hero onGetStartedClick={() => setShowSignupModal(true)} />
        <Features />
        <ContentIdeas />
        <TitleGenerator />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-youtube-red">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Grow Your YouTube Channel?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Join thousands of creators who are using NicheBoost to grow their audience and revenue.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setShowSignupModal(true)}
              className="bg-white text-youtube-red font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started for Free
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-8 h-8 text-youtube-red"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <span className="font-bold text-xl">NicheBoost</span>
              </div>
              <p className="text-gray-400 max-w-md">
                AI-powered tools to help you create better content, grow your YouTube channel, and monetize your audience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white">Content Ideas</a></li>
                  <li><a href="#title-generator" className="text-gray-400 hover:text-white">Title Generator</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Thumbnail Creator</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">YouTube Upload</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Licenses</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 NicheBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  );
};

export default Index;
