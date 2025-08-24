import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-neon bg-card/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-aurora rounded-full animate-pulse-glow"></div>
          <h1 className="text-xl font-bold text-neon-primary">Metaverse University</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-neon-primary transition-colors">
            Features
          </a>
          <a href="#programs" className="text-foreground hover:text-neon-primary transition-colors">
            Programs
          </a>
          <a href="#campus" className="text-foreground hover:text-neon-primary transition-colors">
            Virtual Campus
          </a>
          <a href="#about" className="text-foreground hover:text-neon-primary transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-neon text-neon-primary hover:glow-primary">
            Sign In
          </Button>
          <Button className="bg-primary text-primary-foreground glow-primary hover:glow-secondary">
            Join the Future
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;