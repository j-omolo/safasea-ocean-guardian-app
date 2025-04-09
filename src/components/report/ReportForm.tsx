
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Upload, Trash2 } from "lucide-react";

const ReportForm = () => {
  const { toast } = useToast();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Mock function to simulate image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    // In a real app, you would upload these files to a server
    // Here we're just creating local URLs for preview
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      if (newImages.length >= 5) {
        toast({
          title: "Maximum 5 images allowed",
          description: "Please remove some images before adding more.",
          variant: "destructive",
        });
        break;
      }
      const file = files[i];
      const url = URL.createObjectURL(file);
      newImages.push(url);
    }
    setImages(newImages);
    
    // Reset the file input
    e.target.value = '';
  };
  
  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index]);
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Pollution report submitted",
        description: "Thank you for contributing to cleaner oceans!",
      });
      
      // Reset form (in real app would use form state)
      const form = e.target as HTMLFormElement;
      form.reset();
      setImages([]);
    }, 1500);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="bg-ocean text-white rounded-t-lg">
          <CardTitle className="text-2xl">Report Marine Pollution</CardTitle>
          <CardDescription className="text-blue-100">
            Help us track and address pollution affecting our oceans
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="title">Report Title</Label>
              <Input id="title" placeholder="Brief description of the pollution" required />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pollutionType">Pollution Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plastic">Plastic Waste</SelectItem>
                    <SelectItem value="chemical">Chemical/Oil Spill</SelectItem>
                    <SelectItem value="fishing">Fishing Gear</SelectItem>
                    <SelectItem value="sewage">Sewage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="severity">Severity</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <Input 
                    id="location" 
                    placeholder="Enter location" 
                    className="pl-9"
                    required
                  />
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date Observed</Label>
                <Input 
                  id="date" 
                  type="date" 
                  defaultValue={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe the pollution issue, approximate size, impact on wildlife, etc."
                rows={4}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Upload Images (Max 5)</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-gray-100 border">
                    <img 
                      src={image} 
                      alt={`Pollution evidence ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white"
                      onClick={() => removeImage(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                {images.length < 5 && (
                  <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Add Photos</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end space-x-4 bg-gray-50 rounded-b-lg border-t p-6">
            <Button type="button" variant="outline">Cancel</Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-coral hover:bg-coral-light"
            >
              {loading ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Submitting...
                </>
              ) : (
                <>Submit Report</>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ReportForm;
