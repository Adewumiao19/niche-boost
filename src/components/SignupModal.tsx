
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);

  const niches = [
    "Tech Reviews",
    "Gaming",
    "Cooking & Food",
    "Fitness & Health",
    "Travel",
    "Beauty & Fashion",
    "Finance",
    "Education",
    "DIY & Crafts",
    "Entertainment",
  ];

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!email || !password || !name) {
        toast.error("Please fill in all fields");
        return;
      }
      setStep(2);
      return;
    }
    
    if (step === 2 && !selectedNiche) {
      toast.error("Please select a niche");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Account created successfully!");
      setLoading(false);
      onClose();
      
      // Reset form
      setEmail("");
      setPassword("");
      setName("");
      setSelectedNiche(null);
      setStep(1);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl max-w-md w-full overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Select your primary niche</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {niches.map((niche) => (
                        <div
                          key={niche}
                          className={`p-3 border rounded-md cursor-pointer transition-colors ${
                            selectedNiche === niche
                              ? "border-youtube-red bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedNiche(niche)}
                        >
                          <p className="font-medium">{niche}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      This helps us customize your content recommendations
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between">
              {step === 2 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  disabled={loading}
                >
                  Back
                </Button>
              )}
              <Button 
                type="submit" 
                className={`bg-youtube-red hover:bg-red-700 ml-auto ${step === 1 ? 'w-full' : ''}`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : step === 1 ? "Continue" : "Create Account"}
              </Button>
            </div>
          </form>

          {step === 1 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" className="text-youtube-red hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
