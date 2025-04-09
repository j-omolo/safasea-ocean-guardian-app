
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-sand to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Join the Movement
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Be part of the solution to save our oceans. Whether you're reporting pollution, participating in cleanups, or spreading awareness, every action counts.
                </p>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <Link to="/report">
                    <Button size="lg" className="bg-coral hover:bg-coral-light text-white">
                      Report Now
                    </Button>
                  </Link>
                  <Link to="/community">
                    <Button size="lg" variant="outline" className="border-ocean text-ocean hover:bg-blue-50">
                      Join Our Community
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-ocean">
              <div className="absolute inset-0 bg-gradient-to-r from-ocean to-ocean-dark opacity-90"></div>
              <div className="relative h-full flex items-center justify-center p-8 md:p-12">
                <blockquote className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-ocean-dark text-opacity-20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-xl font-medium text-white">
                    The ocean is the heart of our planet. We must protect it as if our lives depend on it, because they do.
                  </p>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-blue-200">
                      - Sylvia Earle, Marine Biologist
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
