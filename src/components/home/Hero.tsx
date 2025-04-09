
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="wave-container relative h-[600px] md:h-[700px] flex items-center">
      <div className="wave" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Protect Our Oceans,<br />
            <span className="text-coral">Save Our Future</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-10">
            Join the global community taking action against marine pollution.
            Report incidents, track cleanup efforts, and make a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button size="lg" className="bg-coral hover:bg-coral-light text-white px-8 py-6 shadow-lg">
                Report Pollution
              </Button>
            </Link>
            <Link to="/map">
              <Button size="lg" variant="outline" className="bg-white text-ocean hover:bg-gray-100 px-8 py-6">
                Explore Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
