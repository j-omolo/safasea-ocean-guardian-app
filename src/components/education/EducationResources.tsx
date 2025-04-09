
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "./ResourceCard";
import { Search } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "The Impact of Plastic Pollution on Marine Ecosystems",
    description:
      "An in-depth exploration of how plastic waste affects ocean health and marine life, with case studies from around the world.",
    imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Article",
    readTime: "10 min",
    url: "#",
    tags: ["plastic", "ecosystems", "marine-life"]
  },
  {
    id: 2,
    title: "Understanding Microplastics: The Invisible Threat",
    description:
      "Learn about microplastics, their sources, and their surprising prevalence in our oceans and even in the food chain.",
    imageUrl: "https://images.unsplash.com/photo-1621451535573-1f7f3d43aa80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Research",
    readTime: "15 min",
    url: "#",
    tags: ["microplastics", "research", "pollution"]
  },
  {
    id: 3,
    title: "Oil Spills: Immediate and Long-term Consequences",
    description:
      "A video documentary examining the devastating effects of major oil spills and the challenges of cleanup and recovery.",
    imageUrl: "https://images.unsplash.com/photo-1612031686385-427a5ccc35ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Video",
    readTime: "20 min",
    url: "#",
    tags: ["oil-spills", "chemical", "ecosystems"]
  },
  {
    id: 4,
    title: "Marine Debris: Types, Sources, and Solutions",
    description:
      "An infographic guide to the different types of debris found in our oceans, where they come from, and what we can do about them.",
    imageUrl: "https://images.unsplash.com/photo-1618886739950-d542d9f97517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Infographic",
    readTime: "5 min",
    url: "#",
    tags: ["debris", "solutions", "pollution"]
  },
  {
    id: 5,
    title: "The Great Pacific Garbage Patch Explained",
    description:
      "Everything you need to know about the world's largest collection of floating trash and ongoing efforts to clean it up.",
    imageUrl: "https://images.unsplash.com/photo-1519067100902-006b33f9a246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Article",
    readTime: "8 min",
    url: "#",
    tags: ["pacific", "plastic", "cleanup"]
  },
  {
    id: 6,
    title: "Fishing Gear: The Ocean's Silent Killer",
    description:
      "An examination of how abandoned fishing nets and gear contribute to marine pollution and wildlife entanglement.",
    imageUrl: "https://images.unsplash.com/photo-1583157048757-3e0fce9e557b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Video",
    readTime: "12 min",
    url: "#",
    tags: ["fishing-gear", "wildlife", "entanglement"]
  },
];

const EducationResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory =
      activeTab === "all" || 
      resource.category.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="infographic">Infographics</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {filteredResources.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    description={resource.description}
                    imageUrl={resource.imageUrl}
                    category={resource.category}
                    readTime={resource.readTime}
                    url={resource.url}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No resources found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationResources;
