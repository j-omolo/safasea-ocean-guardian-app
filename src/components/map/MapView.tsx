
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Map, MapPin, Filter, Calendar, X } from "lucide-react";
import { Link } from "react-router-dom";

const MapView = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  const dummyReports = [
    {
      id: 1,
      title: "Plastic Debris on North Beach",
      location: "San Francisco, CA",
      date: "Apr 5, 2025",
      category: "Plastic",
      severity: "High",
      lat: 37.8085,
      lng: -122.4094,
    },
    {
      id: 2,
      title: "Oil Spill Near Harbor",
      location: "Seattle, WA",
      date: "Apr 3, 2025",
      category: "Chemical",
      severity: "Critical",
      lat: 47.6062,
      lng: -122.3321,
    },
    {
      id: 3,
      title: "Fishing Nets on Coral Reef",
      location: "Key West, FL",
      date: "Apr 2, 2025",
      category: "Fishing Gear",
      severity: "Medium",
      lat: 24.5551,
      lng: -81.7800,
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

  return (
    <div className="relative h-[calc(100vh-64px)]">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-ocean-light bg-opacity-30">
        {/* This would be replaced with an actual map component */}
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-ocean-dark">
            <Map className="h-16 w-16 mx-auto" />
            <p className="mt-4 text-lg font-medium">Interactive map would be displayed here</p>
            <p className="mt-2">Showing pollution reports and cleanup efforts</p>
          </div>
        </div>

        {/* Simulated Report Pins */}
        {dummyReports.map((report, index) => (
          <div 
            key={report.id}
            className={`absolute cursor-pointer transition-all duration-300 ${
              selectedReport === report.id ? 'scale-125' : 'scale-100'
            }`}
            style={{ 
              top: `${20 + (index * 20)}%`, 
              left: `${20 + (index * 20)}%`, 
              transform: 'translate(-50%, -50%)' 
            }}
            onClick={() => setSelectedReport(report.id)}
          >
            <div 
              className={`
                h-6 w-6 rounded-full flex items-center justify-center text-white
                ${report.severity === 'Critical' 
                  ? 'bg-red-500' 
                  : report.severity === 'High' 
                  ? 'bg-orange-500' 
                  : 'bg-blue-500'
                }
              `}
            >
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Report Detail Card */}
      {selectedReport && (
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-full max-w-sm bg-white rounded-lg shadow-lg">
          <Card>
            <CardHeader className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-2 right-2 h-8 w-8 p-0"
                onClick={() => setSelectedReport(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2 mb-2">
                {(() => {
                  const report = dummyReports.find(r => r.id === selectedReport);
                  return report ? (
                    <>
                      <Badge variant="secondary" className={getCategoryColor(report.category)}>
                        {report.category}
                      </Badge>
                      <Badge variant="outline" className={getSeverityColor(report.severity)}>
                        {report.severity} Severity
                      </Badge>
                    </>
                  ) : null;
                })()}
              </div>
              <CardTitle>
                {dummyReports.find(r => r.id === selectedReport)?.title}
              </CardTitle>
              <CardDescription className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {dummyReports.find(r => r.id === selectedReport)?.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                Reported on {dummyReports.find(r => r.id === selectedReport)?.date}
              </div>
              <div className="flex justify-between">
                <Button size="sm" variant="outline" className="text-ocean border-ocean">
                  View Details
                </Button>
                <Button size="sm" className="bg-coral hover:bg-coral-light">
                  Join Cleanup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="bg-white"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Link to="/report">
                <Button className="bg-coral hover:bg-coral-light text-white">
                  Report Pollution
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        {showFilters && (
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Filter Reports</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Pollution Type</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Plastic</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Chemical</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Fishing Gear</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Other</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Severity</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Low</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Medium</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">High</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Critical</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Date Range</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Today</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">This Week</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">This Month</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">All Time</Badge>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2">Apply Filters</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MapView;
