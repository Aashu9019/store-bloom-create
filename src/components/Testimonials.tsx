import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      rating: 5,
      comment: "Amazing quality products at unbeatable prices. The wireless earbuds I ordered exceeded my expectations!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      rating: 5,
      comment: "Fast shipping and excellent customer service. I've ordered multiple items and they're all top quality.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      rating: 5,
      comment: "I was skeptical at first, but the smartwatch I received is perfect. Exactly as described and arrived quickly.",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;