
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export default function TitleGenerator() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const generateTitles = () => {
    if (!topic) {
      toast.error("Please enter a topic first!");
      return;
    }

    setLoading(true);

    // Mock titles based on input (in a real app, this would call an API)
    setTimeout(() => {
      const mockTitles = [
        `The Ultimate Guide to ${topic}: What You Need to Know in 2024`,
        `10 ${topic} Secrets That Experts Don't Want You to Know`,
        `How I Mastered ${topic} in Just 30 Days (And How You Can Too)`,
        `${topic} 101: Beginner's Guide to Success`,
        `The Truth About ${topic} That No One Is Talking About`,
      ];
      
      setTitles(mockTitles);
      setLoading(false);
      toast.success("Titles generated successfully!");
    }, 1500);
  };

  return (
    <section id="title-generator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Title Generator & Tester
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create high-converting video titles with our AI system that analyzes what works for your niche.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Video Topic
            </label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your video topic (e.g., 'Smartphone camera comparison')"
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
              Target Keywords (optional)
            </label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="best smartphone camera, low light photography, etc."
              className="w-full"
            />
          </div>

          <div className="flex justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-youtube-red hover:bg-red-700" 
              onClick={generateTitles}
              disabled={loading}
            >
              {loading ? "Generating Titles..." : "Generate Title Ideas"}
            </Button>
          </div>

          {titles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">AI-Generated Title Ideas</h3>
              <div className="space-y-3">
                {titles.map((title, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedTitle === title ? "border-youtube-red bg-red-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedTitle(title)}
                  >
                    <div className="mr-3 mt-1">
                      {selectedTitle === title ? (
                        <div className="bg-youtube-red rounded-full p-1 text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{title}</p>
                      <div className="flex mt-2 text-sm">
                        <span className="text-green-600 flex items-center mr-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          CTR: 8.2%
                        </span>
                        <span className="text-blue-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          View Potential: High
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {selectedTitle && (
                <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-bold mb-3">Selected Title</h4>
                  <p className="text-lg font-medium mb-4">{selectedTitle}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-youtube-red hover:bg-red-700">
                      Use This Title
                    </Button>
                    <Button variant="outline">
                      Edit Title
                    </Button>
                    <Button variant="outline">
                      Run A/B Test
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
