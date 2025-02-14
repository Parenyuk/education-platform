import { Database, Tables } from '@/database.types';
import { FeatureType } from '@/lib/types/components/modules/OurPricing';

export type ResourceT = keyof Database['public']['Tables'];

export type BenefitT = Tables<'benefits'>;

export type CourseT = Tables<'courses'>;

export type CourseModulesT = Tables<'course_modules'>;

export type CourseLessonsT = Tables<'course_lessons'>;

export type FAQT = Tables<'faq'>;

export type TestimonialsT = Tables<'testimonials'>;

export type AchievementT = Tables<'achievements'>;

export type OurGoalsT = Tables<'our_goals'>;

export interface PricingI extends Tables<'pricing'> {
  available_features: FeatureType[] | null;
}

export interface CourseAndModulesI extends Tables<'courses'> {
  course_modules: CourseModulesT[];
}

export interface SingleCourseI extends Tables<'courses'> {
  course_modules: (Tables<'course_modules'> & {
    course_lessons: Tables<'course_lessons'>[];
  })[];
}
