import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { niches, mockContentIdeas, type Niche } from "@/data/contentIdeasData";

export default function ContentIdeas() {
  const [selectedNiche, setSelectedNiche] = useState<Niche | "">("");
  const [contentIdeas, setContentIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateContentIdeas = () => {
    if (!selectedNiche) {
      toast.error("Please select a niche first!");
      return;
    }

    setLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const ideas = mockContentIdeas[selectedNiche];
      setContentIdeas(ideas);
      setLoading(false);
      toast.success("Content ideas generated successfully!");
    }, 1500);
  };

  return (
    <section id="content-ideas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get AI-Generated Content Ideas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your niche and let our AI suggest trending content ideas that your audience will love.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Choose Your Niche</h3>
            <div className="flex flex-wrap gap-3">
              {niches.map((niche) => (
                <Button
                  key={niche}
                  variant={selectedNiche === niche ? "default" : "outline"}
                  className={selectedNiche === niche ? "bg-youtube-red hover:bg-red-700" : ""}
                  onClick={() => setSelectedNiche(niche)}
                >
                  {niche}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-youtube-red hover:bg-red-700" 
              onClick={generateContentIdeas}
              disabled={loading}
            >
              {loading ? "Generating Ideas..." : "Generate Content Ideas"}
            </Button>
          </div>

          {contentIdeas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Content Ideas for {selectedNiche}</h3>
              <div className="space-y-3">
                {contentIdeas.map((idea, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start bg-white p-4 rounded-lg shadow"
                  >
                    <div className="bg-youtube-red rounded-full p-1 mr-3 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-800">{idea}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">Use This Idea</Button>
                <Button variant="ghost" className="ml-3">Save for Later</Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
