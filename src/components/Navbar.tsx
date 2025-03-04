
import { Button } from "./ui/button";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

type NavbarProps = {
  onSignupClick: () => void;
};

export default function Navbar({ onSignupClick }: NavbarProps) {
  const { isSignedIn, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-youtube-red"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className="font-bold text-xl">NicheBoost</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#content-ideas" className="text-gray-600 hover:text-gray-900">Content Ideas</a>
            <a href="#title-generator" className="text-gray-600 hover:text-gray-900">Title Generator</a>
            
            <SignedIn>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <Button variant="ghost" onClick={onSignupClick}>Sign in</Button>
              <Button className="bg-youtube-red hover:bg-red-700" onClick={onSignupClick}>Get Started</Button>
            </SignedOut>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <SignedIn>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 mr-4">Dashboard</a>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <Button className="bg-youtube-red hover:bg-red-700" onClick={onSignupClick}>
                Sign In
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
