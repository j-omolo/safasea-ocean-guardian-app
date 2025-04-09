
import { FileText, Map, Bell, BookOpen, Users } from "lucide-react";

const features = [
  {
    name: "Pollution Reporting",
    description:
      "Report marine pollution incidents with precise geotagging, photos, and videos. Help us identify and address pollution hotspots.",
    icon: <FileText className="h-10 w-10 text-ocean" />,
    color: "bg-blue-50",
  },
  {
    name: "Interactive Map",
    description:
      "Visualize reported pollution areas and cleanup efforts globally. Monitor the health of marine environments in real-time.",
    icon: <Map className="h-10 w-10 text-ocean" />,
    color: "bg-blue-50",
  },
  {
    name: "Alerts & Notifications",
    description:
      "Receive timely alerts about local pollution incidents and conservation events that affect your coastal areas.",
    icon: <Bell className="h-10 w-10 text-ocean" />,
    color: "bg-blue-50",
  },
  {
    name: "Education Resources",
    description:
      "Access comprehensive information about marine pollution and learn effective strategies to protect our seas.",
    icon: <BookOpen className="h-10 w-10 text-ocean" />,
    color: "bg-blue-50",
  },
  {
    name: "Community Cleanups",
    description:
      "Organize or join local beach and ocean cleanup initiatives. Connect with environmental enthusiasts in your area.",
    icon: <Users className="h-10 w-10 text-ocean" />,
    color: "bg-blue-50",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Making Waves in Ocean Conservation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Powerful tools to help you take action against marine pollution
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`${feature.color} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in`}
            >
              <div>{feature.icon}</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
