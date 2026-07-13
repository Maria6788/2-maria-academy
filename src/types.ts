export type PageType =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'faculty'
  | 'classes'
  | 'gallery'
  | 'events'
  | 'notice-board'
  | 'student-life'
  | 'contact'
  | 'login'
  | 'dashboard';

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'academic' | 'sports' | 'cultural' | 'admissions' | 'other';
  image: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'general' | 'academic' | 'exam' | 'sports' | 'admission';
  isUrgent: boolean;
  pdfUrl?: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  subjects: string[];
  email: string;
  photo: string;
  bio: string;
}

export interface SchoolClass {
  id: string;
  name: string;
  grade: string;
  teacherName: string;
  overview: string;
  facilities: string[];
  subjects: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'campus' | 'sports' | 'academic' | 'arts' | 'events';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface StudentProfile {
  name: string;
  rollNo: string;
  class: string;
  section: string;
  avatar: string;
  admissionNo: string;
  attendanceRate: number;
  email: string;
}

export interface StudentCourse {
  id: string;
  name: string;
  code: string;
  teacher: string;
  progress: number;
  grade: string;
}

export interface TimetableEntry {
  day: string;
  slots: {
    time: string;
    subject: string;
    teacher: string;
    room: string;
  }[];
}

export interface StudentFeeStatus {
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface StudentExam {
  id: string;
  subject: string;
  date: string;
  time: string;
  room: string;
}

export interface StudentResult {
  id: string;
  subject: string;
  examName: string;
  score: number;
  maxScore: number;
  grade: string;
  remarks: string;
}
