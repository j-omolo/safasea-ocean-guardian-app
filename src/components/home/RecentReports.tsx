
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const reports = [
  {
    id: 1,
    title: "Plastic Debris on North Beach",
    location: "San Francisco, CA",
    date: "Apr 5, 2025",
    category: "Plastic",
    severity: "High",
    description: "Large quantities of plastic bottles and packaging washed ashore after recent storms.",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "Oil Spill Near Harbor",
    location: "Seattle, WA",
    date: "Apr 3, 2025",
    category: "Chemical",
    severity: "Critical",
    description: "Small oil spill detected near the marina affecting local wildlife.",
    image: "https://images.unsplash.com/photo-1612031686385-427a5ccc35ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "Fishing Nets on Coral Reef",
    location: "Key West, FL",
    date: "Apr 2, 2025",
    category: "Fishing Gear",
    severity: "Medium",
    description: "Abandoned fishing nets entangled in coral reef structures damaging marine habitat.",
    image: "https://images.unsplash.com/photo-1583157048757-3e0fce9e557b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Low":
      return "bg-yellow-100 text-yellow-800";
    case "Medium":
      return "bg-orange-100 text-orange-800";
    case "High":
      return "bg-red-100 text-red-800";
    case "Critical":
      return "bg-red-100 text-red-800 border border-red-500";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Plastic":
      return "bg-blue-100 text-blue-800";
    case "Chemical":
      return "bg-purple-100 text-purple-800";
    case "Fishing Gear":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const RecentReports = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recent Pollution Reports</h2>
          <Link 
            to="/map" 
            className="text-ocean hover:text-ocean-dark flex items-center font-medium"
          >
            View All Reports
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <Card key={report.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 w-full h-48 relative">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex space-x-2 mb-2">
                  <Badge variant="secondary" className={getCategoryColor(report.category)}>
                    {report.category}
                  </Badge>
                  <Badge variant="outline" className={getSeverityColor(report.severity)}>
                    {report.severity} Severity
                  </Badge>
                </div>
                <CardTitle>{report.title}</CardTitle>
                <CardDescription className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {report.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{report.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Reported on {report.date}
                </div>
                <Link 
                  to={`/report/${report.id}`}
                  className="text-sm text-ocean hover:text-ocean-dark font-medium"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReports;
