import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Send, Clock, Users, CheckCircle, Upload } from "lucide-react";

const recentRFQs = [
  {
    id: 1,
    title: "Custom Bluetooth Speakers - 1000 units",
    category: "Electronics",
    status: "Active",
    responses: 12,
    timeLeft: "3 days",
    budget: "$10,000 - $15,000"
  },
  {
    id: 2,
    title: "Organic Cotton T-Shirts - 500 units",
    category: "Fashion",
    status: "Completed",
    responses: 8,
    timeLeft: "Closed",
    budget: "$2,500 - $4,000"
  },
  {
    id: 3,
    title: "Smart Home Devices - 250 units",
    category: "Electronics",
    status: "Active",
    responses: 15,
    timeLeft: "5 days",
    budget: "$15,000 - $25,000"
  }
];

export default function RFQ() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    quantity: "",
    budget: "",
    timeline: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RFQ submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-secondary to-primary/50">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request for Quotation (RFQ)
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get competitive quotes from verified suppliers for your specific product needs
            </p>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* RFQ Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Create New RFQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Product Title *</Label>
                        <Input
                          id="title"
                          placeholder="e.g., Custom Wireless Earbuds"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                            <SelectItem value="home">Home & Garden</SelectItem>
                            <SelectItem value="beauty">Beauty</SelectItem>
                            <SelectItem value="sports">Sports</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Product Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your product requirements in detail..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity Required *</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 1000 units"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange("quantity", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Input
                          id="budget"
                          placeholder="e.g., $5,000 - $10,000"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        placeholder="e.g., 2-3 weeks"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Special Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Any special requirements, certifications, or customizations needed..."
                        rows={3}
                        value={formData.requirements}
                        onChange={(e) => handleInputChange("requirements", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Attachments (Optional)</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drop files here or click to upload images, specifications, or drawings
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit RFQ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* How it Works */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">How RFQ Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Submit Your Request</h4>
                      <p className="text-sm text-muted-foreground">Describe your product requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Receive Quotes</h4>
                      <p className="text-sm text-muted-foreground">Verified suppliers send competitive quotes</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Choose & Order</h4>
                      <p className="text-sm text-muted-foreground">Select the best offer and place your order</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent RFQs */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Recent RFQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentRFQs.map((rfq) => (
                    <div key={rfq.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{rfq.title}</h4>
                        <Badge variant={rfq.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {rfq.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          {rfq.responses} responses
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {rfq.timeLeft}
                        </div>
                        <div className="font-medium text-foreground">{rfq.budget}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}