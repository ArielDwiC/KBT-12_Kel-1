import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Course } from "@shared/schema";
import taxIllustration from "@assets/Courses Page - Desktop_1764067025644.png";

export default function Courses() {
  const { data: courses, isLoading, error } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Courses</h2>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No Courses Available</h2>
          <p className="text-muted-foreground">Check back soon for new courses!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="page-title">
            Online Courses on EDUTAX
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="page-description">
              Welcome to our online course page, where you can enhance your tax skills with interactive online courses. Learn every aspect of taxation in depth and practically - anytime, anyplace, at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover-elevate"
                data-testid={`course-detail-${course.slug}`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4" data-testid={`course-title-${course.slug}`}>
                      {course.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`course-description-${course.slug}`}>
                      {course.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge variant="secondary" className="text-sm" data-testid={`course-level-${course.slug}`}>
                        {course.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        By {course.instructor}
                      </span>
                    </div>
                    <Button
                      className="bg-accent hover:bg-accent text-accent-foreground"
                      asChild
                      data-testid={`button-view-course-${course.slug}`}
                    >
                      <Link href={`/courses/${course.slug}`} className="flex items-center gap-2">
                        View Course
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={taxIllustration}
                      alt={course.title}
                      className="w-full h-auto rounded-lg"
                      data-testid={`course-image-${course.slug}`}
                    />
                  </div>
                </div>

                {/* Curriculum Preview */}
                <div className="px-8 pb-8">
                  <h3 className="text-xl font-semibold mb-6">Curriculum</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {course.slug === "brevet-a" ? (
                      <>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">01</span>
                          <h4 className="font-medium text-sm mb-1">Introduction to the Indonesian Tax System</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">02</span>
                          <h4 className="font-medium text-sm mb-1">Individual Income Tax (PPh 21)</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">03</span>
                          <h4 className="font-medium text-sm mb-1">Final and Non-Final Taxes</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">04</span>
                          <h4 className="font-medium text-sm mb-1">Basic Value Added Tax (VAT & Luxury Tax)</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">05</span>
                          <h4 className="font-medium text-sm mb-1">Tax Administration and e-Filing</h4>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">01</span>
                          <h4 className="font-medium text-sm mb-1">Corporate Income Tax (PPh 25/29)</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">02</span>
                          <h4 className="font-medium text-sm mb-1">Withholding Taxes (PPh 23, 26, 4/2)</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">03</span>
                          <h4 className="font-medium text-sm mb-1">Value Added Tax (VAT & Luxury Tax)</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">04</span>
                          <h4 className="font-medium text-sm mb-1">International Taxation</h4>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <span className="text-2xl font-bold text-accent block mb-2">05</span>
                          <h4 className="font-medium text-sm mb-1">Tax Administration Procedures</h4>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
