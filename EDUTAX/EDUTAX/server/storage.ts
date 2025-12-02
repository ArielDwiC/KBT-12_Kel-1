import {
  users,
  courses,
  modules,
  lessons,
  enrollments,
  type User,
  type UpsertUser,
  type Course,
  type Module,
  type Lesson,
  type Enrollment,
  type InsertCourse,
  type InsertModule,
  type InsertLesson,
  type InsertEnrollment,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Course operations
  getAllCourses(): Promise<Course[]>;
  getCourseBySlug(slug: string): Promise<Course | undefined>;
  getCourseWithModules(courseId: string): Promise<any>;
  
  // Module operations
  getModulesByCourseId(courseId: string): Promise<Module[]>;
  
  // Lesson operations
  getLessonsByModuleId(moduleId: string): Promise<Lesson[]>;
  getLesson(lessonId: string): Promise<Lesson | undefined>;
  
  // Enrollment operations
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getUserEnrollments(userId: string): Promise<Enrollment[]>;
  isUserEnrolled(userId: string, courseId: string): Promise<boolean>;
  
  // Seed data
  seedCourses(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Course operations
  async getAllCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async getCourseBySlug(slug: string): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.slug, slug));
    return course;
  }

  async getCourseWithModules(courseId: string): Promise<any> {
    const course = await db.query.courses.findFirst({
      where: eq(courses.id, courseId),
      with: {
        modules: {
          with: {
            lessons: true,
          },
        },
      },
    });
    return course;
  }

  // Module operations
  async getModulesByCourseId(courseId: string): Promise<Module[]> {
    return await db.select().from(modules).where(eq(modules.courseId, courseId));
  }

  // Lesson operations
  async getLessonsByModuleId(moduleId: string): Promise<Lesson[]> {
    return await db.select().from(lessons).where(eq(lessons.moduleId, moduleId));
  }

  async getLesson(lessonId: string): Promise<Lesson | undefined> {
    const [lesson] = await db.select().from(lessons).where(eq(lessons.id, lessonId));
    return lesson;
  }

  // Enrollment operations
  async createEnrollment(enrollmentData: InsertEnrollment): Promise<Enrollment> {
    const [enrollment] = await db
      .insert(enrollments)
      .values(enrollmentData)
      .returning();
    return enrollment;
  }

  async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    return await db.select().from(enrollments).where(eq(enrollments.userId, userId));
  }

  async isUserEnrolled(userId: string, courseId: string): Promise<boolean> {
    const [enrollment] = await db
      .select()
      .from(enrollments)
      .where(and(eq(enrollments.userId, userId), eq(enrollments.courseId, courseId)));
    return !!enrollment;
  }

  // Seed data
  async seedCourses(): Promise<void> {
    // Check if courses already exist
    const existingCourses = await this.getAllCourses();
    if (existingCourses.length > 0) {
      return;
    }

    // Create Brevet A course
    const [brevetA] = await db
      .insert(courses)
      .values({
        slug: "brevet-a",
        title: "Brevet A",
        description: "Master the fundamentals of taxation in Indonesia, including basic tax concepts, types of taxes, and essential administrative procedures.",
        level: "Beginner",
        duration: "4 Weeks",
        instructor: "John Smith",
        thumbnailUrl: "/placeholder-tax.jpg",
      })
      .returning();

    // Create modules for Brevet A
    const brevetAModules = await db
      .insert(modules)
      .values([
        {
          courseId: brevetA.id,
          moduleNumber: 1,
          title: "Introduction to the Indonesian Tax System",
          description: "Understand the structure and function of the national tax system",
        },
        {
          courseId: brevetA.id,
          moduleNumber: 2,
          title: "Individual Income Tax (PPh 21)",
          description: "Study income tax principles for employees and self-employed individuals",
        },
        {
          courseId: brevetA.id,
          moduleNumber: 3,
          title: "Final and Non-Final Taxes",
          description: "Learn about types of income subject to final and non-final tax",
        },
        {
          courseId: brevetA.id,
          moduleNumber: 4,
          title: "Basic Value Added Tax (VAT & Luxury Tax)",
          description: "Understand VAT principles and taxable transactions",
        },
        {
          courseId: brevetA.id,
          moduleNumber: 5,
          title: "Tax Administration and e-Filing",
          description: "Master the process of taxpayer registration and tax reporting",
        },
      ])
      .returning();

    // Create lessons for each module
    for (const module of brevetAModules) {
      const lessonData = module.moduleNumber === 1
        ? [
            {
              moduleId: module.id,
              lessonNumber: 1,
              title: "Understand the structure and function of the national tax system",
              description: "This part introduces the core principles behind taxation, including the definition of tax, its functions (budgetary, regulatory, and redistributive), and the key distinctions between different types of taxes.",
              duration: "45 Minutes",
              content: "Detailed lesson content about the Indonesian tax system structure and functions.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 2,
              title: "Learn about the obligations for individuals and businesses",
              description: "Lesson content",
              duration: "30 Minutes",
              content: "Detailed lesson content about tax obligations.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 3,
              title: "Explain key tax laws and the roles of tax authorities",
              description: "Lesson content",
              duration: "45 Minutes",
              content: "Detailed lesson content about tax laws.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
          ]
        : module.moduleNumber === 2
        ? [
            {
              moduleId: module.id,
              lessonNumber: 1,
              title: "Study income tax principles for employees and self-employed individuals",
              description: "Lesson content",
              duration: "1 Hour",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 2,
              title: "Learn to calculate tax withholding and deductions for taxpayers",
              description: "Lesson content",
              duration: "45 Minutes",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 3,
              title: "Understand annual amount for reporting for individual taxpayers",
              description: "Lesson content",
              duration: "45 Minutes",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
          ]
        : [
            {
              moduleId: module.id,
              lessonNumber: 1,
              title: "Module lesson 1",
              description: "Lesson content",
              duration: "1 Hour",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 2,
              title: "Module lesson 2",
              description: "Lesson content",
              duration: "45 Minutes",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
            {
              moduleId: module.id,
              lessonNumber: 3,
              title: "Module lesson 3",
              description: "Lesson content",
              duration: "45 Minutes",
              content: "Detailed lesson content.",
              driveUrl: "https://drive.google.com",
              zoomUrl: "https://zoom.us",
            },
          ];

      await db.insert(lessons).values(lessonData);
    }

    // Create Brevet B course
    const [brevetB] = await db
      .insert(courses)
      .values({
        slug: "brevet-b",
        title: "Brevet B",
        description: "Deepen your knowledge in taxation through comprehensive courses covering corporate and international tax regulations.",
        level: "Intermediate",
        duration: "6 Weeks",
        instructor: "Emily Johnson",
        thumbnailUrl: "/placeholder-tax.jpg",
      })
      .returning();

    // Create modules for Brevet B
    const brevetBModules = await db
      .insert(modules)
      .values([
        {
          courseId: brevetB.id,
          moduleNumber: 1,
          title: "Corporate Income Tax (PPh 25/29)",
          description: "Study income tax principles for corporate and business entities",
        },
        {
          courseId: brevetB.id,
          moduleNumber: 2,
          title: "Withholding Taxes (PPh 23, 26, 4/2)",
          description: "Explore withholding tax on services and dividends",
        },
        {
          courseId: brevetB.id,
          moduleNumber: 3,
          title: "Value Added Tax (VAT & Luxury Tax)",
          description: "Deep dive into VAT mechanisms and compliance",
        },
        {
          courseId: brevetB.id,
          moduleNumber: 4,
          title: "International Taxation",
          description: "Study tax treaties and their impact on cross-border transactions",
        },
        {
          courseId: brevetB.id,
          moduleNumber: 5,
          title: "Tax Administration Procedures",
          description: "Master advanced tax reporting and compliance procedures",
        },
      ])
      .returning();

    // Create lessons for Brevet B modules
    for (const module of brevetBModules) {
      await db.insert(lessons).values([
        {
          moduleId: module.id,
          lessonNumber: 1,
          title: "Module lesson 1",
          description: "Lesson content",
          duration: "1 Hour",
          content: "Detailed lesson content.",
          driveUrl: "https://drive.google.com",
          zoomUrl: "https://zoom.us",
        },
        {
          moduleId: module.id,
          lessonNumber: 2,
          title: "Module lesson 2",
          description: "Lesson content",
          duration: "1 Hour",
          content: "Detailed lesson content.",
          driveUrl: "https://drive.google.com",
          zoomUrl: "https://zoom.us",
        },
        {
          moduleId: module.id,
          lessonNumber: 3,
          title: "Module lesson 3",
          description: "Lesson content",
          duration: "45 Minutes",
          content: "Detailed lesson content.",
          driveUrl: "https://drive.google.com",
          zoomUrl: "https://zoom.us",
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
