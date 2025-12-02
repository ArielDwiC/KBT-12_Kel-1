import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Brevet A Course",
      price: "299,000",
      currency: "IDR",
      period: "one-time",
      description: "Perfect for beginners starting their taxation journey",
      features: [
        "4 weeks of comprehensive content",
        "Access to all Brevet A modules",
        "Video lessons and materials",
        "Practice assignments",
        "Certificate of completion",
        "Lifetime access to course materials",
      ],
      cta: "Enroll in Brevet A",
      highlighted: false,
    },
    {
      name: "Brevet B Course",
      price: "499,000",
      currency: "IDR",
      period: "one-time",
      description: "Advanced taxation knowledge for professionals",
      features: [
        "6 weeks of advanced content",
        "Access to all Brevet B modules",
        "Expert video instruction",
        "Real-world case studies",
        "Certificate of completion",
        "Lifetime access to course materials",
        "Priority instructor support",
      ],
      cta: "Enroll in Brevet B",
      highlighted: true,
    },
    {
      name: "Complete Package",
      price: "699,000",
      currency: "IDR",
      period: "one-time",
      description: "Full certification path from beginner to advanced",
      features: [
        "Both Brevet A & B courses",
        "10+ weeks of content",
        "All course materials included",
        "Complete certification path",
        "Dual certificates",
        "Lifetime access to all materials",
        "Priority instructor support",
        "Exclusive community access",
      ],
      cta: "Get Complete Package",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="page-title">
            Pricing Plans
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your taxation education journey. All plans include lifetime access to course materials.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 flex flex-col relative ${
                  plan.highlighted ? "border-2 border-primary shadow-lg" : ""
                }`}
                data-testid={`pricing-card-${index}`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" data-testid={`plan-name-${index}`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">{plan.currency}</span>
                      <span className="text-4xl font-bold" data-testid={`plan-price-${index}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3" data-testid={`plan-feature-${index}-${featureIndex}`}>
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-accent hover:bg-accent text-accent-foreground"
                      : "w-full"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                  data-testid={`button-enroll-${index}`}
                >
                  <a href="/api/login">{plan.cta}</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
