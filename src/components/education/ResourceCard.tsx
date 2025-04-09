
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  readTime: string;
  url: string;
}

const ResourceCard = ({
  title,
  description,
  imageUrl,
  category,
  readTime,
  url,
}: ResourceCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "article":
        return "bg-blue-100 text-blue-800";
      case "video":
        return "bg-red-100 text-red-800";
      case "infographic":
        return "bg-green-100 text-green-800";
      case "research":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9 w-full h-48 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{readTime} read</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button 
            variant="ghost" 
            className="w-full justify-between text-ocean hover:text-ocean-dark hover:bg-blue-50"
          >
            Read More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
