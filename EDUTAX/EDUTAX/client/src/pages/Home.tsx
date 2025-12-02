import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";
import taxIllustration from "@assets/Courses Page - Desktop_1764067025644.png";

export default function Home() {
  const benefits = [
    {
      number: "01",
      icon: Calendar,
      title: "Flexible Learning Schedule",
      description: "Fit your professional growth and learning into your busy schedule with self-paced courses.",
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "Expert Instruction",
      description: "Learn from experienced tax professionals who bring real-world insights to every lesson.",
    },
    {
      number: "03",
      icon: Award,
      title: "Focus Course Offering",
      description: "Deep dive into specific tax topics with our curated selection of high-quality courses.",
    },
    {
      number: "04",
      icon: BookOpen,
      title: "Updated Curriculum",
      description: "Access the latest content reflecting the latest standards and current practices.",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Practical Projects and Assignments",
      description: "Apply your learning through hands-on projects and real-world assignments.",
    },
    {
      number: "06",
      icon: Users,
      title: "Interactive Learning Environment",
      description: "Engage with peers and instructors through discussions, live feedback for answers and assistance.",
    },
  ];

  const courses = [
    {
      id: "brevet-a",
      slug: "brevet-a",
      title: "Brevet A",
      description: "Master the fundamentals of taxation in Indonesia, including basic tax concepts, types of taxes, and essential administrative procedures.",
      level: "Beginner",
      duration: "4 Weeks",
      instructor: "John Smith",
      thumbnailUrl: taxIllustration,
    },
    {
      id: "brevet-b",
      slug: "brevet-b",
      title: "Brevet B",
      description: "Deepen your knowledge in taxation through comprehensive courses covering corporate and international tax regulations.",
      level: "Intermediate",
      duration: "6 Weeks",
      instructor: "Emily Johnson",
      thumbnailUrl: taxIllustration,
    },
  ];

  const faqs = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer: "Yes, you can enroll in multiple courses simultaneously and learn at your own pace.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer: "Our instructors provide comprehensive support through discussion forums, live Q&A sessions, and direct messaging for any course-related questions.",
    },
    {
      question: "Are the courses self-paced or do they have specific deadlines?",
      answer: "Courses are primarily self-paced, allowing you to complete them according to your schedule. However, some assignments may have suggested deadlines to keep you on track.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Brevet A is designed for beginners with no prior tax knowledge, while Brevet B requires completion of Brevet A or equivalent knowledge.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer: "Yes, most course materials including PDFs and supplementary resources can be downloaded for offline study.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium text-accent-foreground">Know Your Tax, Know Your Future</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
                with Online Taxation Courses EDUTAX.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
                Learn every aspect of taxation and thrive with our knowledge.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent text-accent-foreground font-semibold"
                asChild
                data-testid="button-explore-courses"
              >
                <Link href="/courses" className="flex items-center gap-2">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative" data-testid="hero-illustration">
              <img
                src={taxIllustration}
                alt="Tax Education Illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="benefits-heading">
              Benefits
            </h2>
            <Link href="/benefits" className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 hover-elevate rounded-md px-3 py-2" data-testid="link-view-all-benefits">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`benefit-card-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground font-bold text-xl">
                        {benefit.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="courses-heading">
              Our Courses
            </h2>
            <Link href="/courses" className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 hover-elevate rounded-md px-3 py-2" data-testid="link-view-all-courses">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover-elevate" data-testid={`course-card-${course.slug}`}>
                <div className="aspect-video w-full overflow-hidden bg-blue-500/10">
                  <img
                    src={course.thumbnailUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      By {course.instructor}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3" data-testid={`course-title-${course.slug}`}>
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`course-description-${course.slug}`}>
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary" data-testid={`course-level-${course.slug}`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                    data-testid={`button-get-more-${course.slug}`}
                  >
                    <Link href={`/courses/${course.slug}`}>
                      Get More
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Still you have any questions? Contact our Team via{" "}
            <a href="mailto:support@edutax.com" className="text-primary hover:underline">
              support@edutax.com
            </a>
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
