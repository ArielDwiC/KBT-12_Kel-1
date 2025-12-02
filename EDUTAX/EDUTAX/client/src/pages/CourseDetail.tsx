import { useRoute, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import taxIllustration from "@assets/Courses Page - Desktop_1764067025644.png";

export default function CourseDetail() {
  const [, params] = useRoute("/courses/:slug");
  const courseSlug = params?.slug;

  const { data: course, isLoading, error } = useQuery({
    queryKey: ["/api/courses", courseSlug],
    queryFn: () => fetch(`/api/courses/${courseSlug}`).then(res => {
      if (!res.ok) throw new Error("Failed to fetch course");
      return res.json();
    }),
    enabled: !!courseSlug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loading-spinner" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" data-testid="error-title">Course Not Found</h1>
          <Button asChild data-testid="button-back-to-courses">
            <Link href="/courses">
              <div>Back to Courses</div>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase" data-testid="course-title">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="course-description">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="secondary" data-testid="course-level">
                  {course.level}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1.5" data-testid="course-duration">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="text-sm text-muted-foreground" data-testid="course-instructor">
                  By {course.instructor}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={taxIllustration}
                alt={course.title}
                className="w-full h-auto rounded-lg"
                data-testid="course-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {course.modules?.map((module: any, moduleIndex: number) => (
              <div key={module.id}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent text-accent-foreground font-bold text-2xl" data-testid={`module-number-${moduleIndex}`}>
                    {String(module.moduleNumber).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground" data-testid={`module-title-${moduleIndex}`}>
                      {module.title}
                    </h2>
                    {module.description && (
                      <p className="text-muted-foreground mt-2" data-testid={`module-description-${moduleIndex}`}>
                        {module.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 ml-20">
                  {module.lessons?.map((lesson: any, lessonIndex: number) => (
                    <Card
                      key={lesson.id}
                      className="p-6 hover-elevate"
                      data-testid={`lesson-card-${moduleIndex}-${lessonIndex}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-2" data-testid={`lesson-title-${moduleIndex}-${lessonIndex}`}>
                            {lesson.title}
                          </h3>
                          {lesson.description && lesson.description !== `Lesson 0${lessonIndex + 1}` && (
                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed" data-testid={`lesson-description-${moduleIndex}-${lessonIndex}`}>
                              {lesson.description}
                            </p>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid={`lesson-duration-${moduleIndex}-${lessonIndex}`}>
                            <Clock className="w-4 h-4" />
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex-shrink-0" data-testid={`lesson-badge-${moduleIndex}-${lessonIndex}`}>
                          {String(module.moduleNumber).padStart(2, '0')}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enroll Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent text-accent-foreground font-semibold"
              asChild
              data-testid="button-enroll-course"
            >
              <a href="/api/login" className="flex items-center gap-2">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4" data-testid="enroll-message">
              Sign in to enroll in this course and start learning
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
