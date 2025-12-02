import { Card } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="page-title">
            About EDUTAX
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            We are dedicated to providing high-quality taxation education through innovative online courses. Our mission is to empower individuals and professionals with the knowledge and skills needed to excel in the complex world of taxation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-elevate">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To make professional tax education accessible to everyone through comprehensive online courses.
              </p>
            </Card>
            <Card className="p-8 text-center hover-elevate">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Our Achievement</h3>
              <p className="text-muted-foreground">
                Recognized as a leading platform for taxation certification programs with thousands of successful graduates.
              </p>
            </Card>
            <Card className="p-8 text-center hover-elevate">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Our Community</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of tax professionals, students, and experts all committed to continuous learning.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
