
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Venice Beach Cleanup",
    date: "April 15, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Venice Beach, Los Angeles",
    participants: 28,
    maxParticipants: 50,
    description: "Join us for our monthly beach cleanup event. We'll be removing plastic waste and debris from the shoreline.",
  },
  {
    id: 2,
    title: "Ocean Education Workshop",
    date: "April 18, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, San Diego",
    participants: 15,
    maxParticipants: 30,
    description: "Learn about marine ecosystems and the impact of pollution on ocean health in this interactive workshop.",
  },
  {
    id: 3,
    title: "Harbor Cleanup Dive",
    date: "April 22, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Santa Monica Pier",
    participants: 12,
    maxParticipants: 20,
    description: "Certified divers needed to help remove underwater debris from the harbor area.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Cleanup Events</h2>
          <p className="mt-4 text-xl text-gray-600">Join our community in taking action against marine pollution</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-ocean" />
                  </div>
                  <div className="bg-ocean text-white text-sm px-3 py-1 rounded-full">
                    {event.participants}/{event.maxParticipants} joined
                  </div>
                </div>
                <CardTitle className="mt-4">{event.title}</CardTitle>
                <CardDescription className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {event.participants} people joined
                </div>
                <Button className="bg-coral hover:bg-coral-light">Join Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-ocean text-ocean hover:bg-blue-50">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
