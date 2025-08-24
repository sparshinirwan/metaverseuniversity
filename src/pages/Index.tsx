import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CampusPreview from "@/components/CampusPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic">
      <Header />
      <Hero />
      <Features />
      <CampusPreview />
    </div>
  );
};

export default Index;
