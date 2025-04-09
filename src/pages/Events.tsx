
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Venice Beach Cleanup",
      date: "April 15, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Venice Beach, Los Angeles",
      participants: 28,
      maxParticipants: 50,
      description: "Join us for our monthly beach cleanup event. We'll be removing plastic waste and debris from the shoreline.",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
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
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
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
      image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      title: "World Ocean Day Celebration",
      date: "June 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Central Park, Seattle",
      participants: 45,
      maxParticipants: 150,
      description: "A festival-style event with educational booths, art installations, and beach cleanups to celebrate World Ocean Day.",
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Coastal Cleanup Campaign",
      date: "March 22, 2025",
      location: "Malibu Beach, CA",
      participants: 42,
      wasteCollected: "215 kg",
      description: "We collected over 200kg of waste in our successful cleanup operation, including plastic bottles, fishing gear, and microplastics.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 102,
      title: "Underwater Reef Cleanup",
      date: "March 10, 2025",
      location: "Key Largo, FL",
      participants: 18,
      wasteCollected: "64 kg",
      description: "A team of certified divers removed abandoned fishing nets and other debris from a threatened coral reef ecosystem.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 103,
      title: "Kids Ocean Education Day",
      date: "February 18, 2025",
      location: "Monterey Bay Aquarium, CA",
      participants: 75,
      description: "Local schoolchildren participated in interactive workshops to learn about marine ecosystems and pollution prevention.",
      image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <Layout>
      <div className="bg-ocean bg-opacity-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Community Events</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Join local cleanup efforts, educational workshops, and community gatherings
              focused on protecting our oceans.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <Button className="bg-coral hover:bg-coral-light">Create New Event</Button>
          </div>

          <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="upcoming" className="flex-1">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="flex-1">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-700">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Clock className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Users className="h-4 w-4 mr-2" />
                              {event.participants}/{event.maxParticipants} participants
                            </div>
                          </div>
                          <p className="text-gray-600 line-clamp-2">{event.description}</p>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button className="w-full bg-ocean hover:bg-ocean-dark">
                            Join Event
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-700">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Users className="h-4 w-4 mr-2" />
                              {event.participants} participants
                            </div>
                            {event.wasteCollected && (
                              <div className="flex items-center text-sm text-gray-700">
                                <span className="font-medium mr-2">Waste Collected:</span>
                                {event.wasteCollected}
                              </div>
                            )}
                          </div>
                          <p className="text-gray-600 line-clamp-2">{event.description}</p>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button variant="outline" className="w-full">
                            View Event Summary
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
