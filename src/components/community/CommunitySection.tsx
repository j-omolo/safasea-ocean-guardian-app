
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar } from "lucide-react";

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("members");

  const members = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Beach Cleanup Organizer",
      location: "San Francisco, CA",
      avatar: "AJ",
      joinedDate: "Jan 2025",
      cleanups: 12,
      reports: 8,
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Marine Biologist",
      location: "San Diego, CA",
      avatar: "MR",
      joinedDate: "Feb 2025",
      cleanups: 5,
      reports: 23,
    },
    {
      id: 3,
      name: "David Kim",
      role: "Environmental Activist",
      location: "Seattle, WA",
      avatar: "DK",
      joinedDate: "Mar 2025",
      cleanups: 8,
      reports: 15,
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Diving Instructor",
      location: "Key West, FL",
      avatar: "SC",
      joinedDate: "Jan 2025",
      cleanups: 19,
      reports: 7,
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Conservation Volunteer",
      location: "Portland, OR",
      avatar: "JW",
      joinedDate: "Feb 2025",
      cleanups: 7,
      reports: 4,
    },
    {
      id: 6,
      name: "Emma Davis",
      role: "Student",
      location: "Boston, MA",
      avatar: "ED",
      joinedDate: "Mar 2025",
      cleanups: 3,
      reports: 2,
    },
  ];

  const groups = [
    {
      id: 1,
      name: "Bay Area Ocean Guardians",
      location: "San Francisco, CA",
      members: 134,
      description: "Dedicated to protecting the San Francisco Bay and nearby ocean waters through regular cleanups and educational outreach.",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "SoCal Marine Protectors",
      location: "San Diego, CA",
      members: 98,
      description: "A community of divers, surfers, and ocean enthusiasts working together to keep Southern California's beaches and waters clean.",
      image: "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Puget Sound Cleanup Crew",
      location: "Seattle, WA",
      members: 76,
      description: "Focused on the unique ecosystems of the Puget Sound and the challenges they face from urban pollution and shipping traffic.",
      image: "https://images.unsplash.com/photo-1611017587367-d529d29d3520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const discussions = [
    {
      id: 1,
      title: "Microplastic Removal Techniques",
      author: "Maria Rodriguez",
      date: "Apr 7, 2025",
      replies: 23,
      views: 186,
      tags: ["microplastics", "cleanup", "technology"],
      preview: "I've been researching effective techniques for removing microplastics from beach sand. Has anyone tried using...",
    },
    {
      id: 2,
      title: "Upcoming International Beach Cleanup Day",
      author: "Alex Johnson",
      date: "Apr 6, 2025",
      replies: 18,
      views: 124,
      tags: ["events", "global", "volunteer"],
      preview: "International Beach Cleanup Day is coming up next month! Let's coordinate our efforts to make a bigger impact...",
    },
    {
      id: 3,
      title: "Best Practices for Documenting Pollution",
      author: "David Kim",
      date: "Apr 5, 2025",
      replies: 14,
      views: 97,
      tags: ["documentation", "reporting", "evidence"],
      preview: "When filing pollution reports, what information and photos have you found most helpful for authorities to take action?",
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Community</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with fellow ocean guardians and join the movement
          </p>
        </div>

        <Tabs defaultValue="members" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full mb-8">
            <TabsTrigger value="members" className="flex-1">Members</TabsTrigger>
            <TabsTrigger value="groups" className="flex-1">Groups</TabsTrigger>
            <TabsTrigger value="discussions" className="flex-1">Discussions</TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <Avatar className="h-12 w-12 border-2 border-ocean">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${member.id}`} />
                        <AvatarFallback className="bg-ocean text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="bg-blue-50">
                        {member.role}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2">{member.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Joined: {member.joinedDate}</span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {member.cleanups} Cleanups
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full text-ocean border-ocean hover:bg-blue-50">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groups" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group) => (
                <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 w-full h-40 relative">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{group.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {group.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {group.members} Members
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="outline">View Group</Button>
                    <Button className="bg-coral hover:bg-coral-light">Join</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="mt-0">
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {discussion.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{discussion.title}</CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>Started by {discussion.author}</span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {discussion.date}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{discussion.preview}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">{discussion.replies} Replies</span>
                      <span>{discussion.views} Views</span>
                    </div>
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunitySection;
