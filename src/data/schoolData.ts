import {
  PageType,
  SchoolEvent,
  Notice,
  Teacher,
  SchoolClass,
  GalleryItem,
  Testimonial,
  StudentProfile,
  StudentCourse,
  TimetableEntry,
  StudentFeeStatus,
  StudentExam,
  StudentResult
} from '../types';

export const HEADER_CONTENT = {
  branding: {
    name: 'Maria',
    tagline: 'Academy of Excellence'
  },
  contact: {
    phone: '+1 (800) 555-0199',
    email: 'admissions@Maria.edu',
    phoneHref: 'tel:+18005550199',
    emailHref: 'mailto:admissions@Maria.edu'
  },
  socialLinks: [
    { label: 'Facebook', href: '#', icon: 'facebook', id: 'top-bar-social-fb' },
    { label: 'Twitter', href: '#', icon: 'twitter', id: 'top-bar-social-tw' },
    { label: 'Instagram', href: '#', icon: 'instagram', id: 'top-bar-social-ig' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin', id: 'top-bar-social-li' }
  ],
  navigation: [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Academics', value: 'academics' },
    { label: 'Admissions', value: 'admissions' },
    { label: 'Faculty', value: 'faculty' },
    { label: 'Classes', value: 'classes' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Events', value: 'events' },
    { label: 'Notice Board', value: 'notice-board' },
    { label: 'Student Life', value: 'student-life' },
    { label: 'Contact', value: 'contact' }
  ] as Array<{ label: string; value: PageType }>,
  auth: {
    dashboardLabel: 'Dashboard',
    logoutLabel: 'Sign Out',
    loginLabel: 'Portal Sign In',
    mobileDashboardLabel: 'Student Dashboard',
    mobileLogoutLabel: 'Sign Out of Portal'
  }
};

export const HOME_PAGE_CONTENT = {
  heroButtons: {
    primary: 'Apply Online',
    secondary: 'Our Curriculum'
  },
  noticeBar: {
    eyebrow: 'Latest Notice',
    actionLabel: 'Open Notice Board'
  },
  about: {
    eyebrow: 'WELCOME TO Maria',
    heading: 'Cultivating Character, Crafting Leaders, Achieving Academic Wonders',
    paragraphs: [
      'Founded with a vision to deliver world-class preparatory education, Maria Academy has been a cornerstone of academic brilliance, nurturing character, and global citizenship. Our comprehensive co-educational structure fosters active student agency, helping them explore unique disciplines through critical engagement.',
      'With a robust curriculum supporting rigorous Advanced Placement programs, competitive sports leagues, creative arts labs, and robotic automation, we prepare students for elite global universities and future administrative roles.'
    ],
    stats: [
      { value: '15:1', label: 'Student-Teacher Ratio' },
      { value: '98%', label: 'AP Exam Pass Rate' },
      { value: '25+', label: 'Extracurricular Clubs' }
    ]
  },
  principal: {
    name: 'Dr. Arthur Stewart',
    title: 'Principal, PhD Oxford',
    eyebrow: 'MESSAGE FROM THE PRINCIPAL',
    heading: '"We do not prepare students for examinations; we prepare them for life."',
    paragraphs: [
      'Welcome to Maria Academy. In a world undergoing rapid technological evolution, a core foundation of critical analysis, scientific logic, and unwavering ethical empathy is critical.',
      'Our educational philosophy centers on student agency. We push students to challenge boundaries, ask deep analytical questions, and embrace failures as crucial blocks of growth. Together, we foster a supportive sanctuary of thinkers, creators, and doers.'
    ],
    ctaLabel: 'Read School Philosophy'
  },
  programs: {
    eyebrow: 'WHAT WE OFFER',
    heading: 'Personalized Learning Across Every Age and Grade',
    description: 'Explore our core curriculum tiers designed to nurture intellectual curiosity, critical problem solving, and global values.',
    cards: [
      {
        badge: 'PK',
        title: 'Kindergarten',
        description: 'Active sensory discovery, creative play circles, physical motor development, and social foundations in an extremely caring ecosystem.',
        ctaLabel: 'Explore Pre-K',
        accent: 'orange'
      },
      {
        badge: 'PE',
        title: 'Elementary School',
        description: 'Solid literacy foundation, numerical puzzles, initial environmental sciences, arts exploration, and team values projects.',
        ctaLabel: 'Explore Elementary',
        accent: 'emerald'
      },
      {
        badge: 'MS',
        title: 'Middle School',
        description: 'Algebra modules, scientific labs, world geography debates, linguistic training, and active physical athletics programs.',
        ctaLabel: 'Explore Middle School',
        accent: 'purple'
      },
      {
        badge: 'HS',
        title: 'High School (AP)',
        description: 'Rigorous AP tracks, college counseling, advanced robotics hubs, championship leagues, and social leadership foundations.',
        ctaLabel: 'Explore High School',
        accent: 'blue'
      }
    ]
  },
  noticesEvents: {
    noticesTitle: 'Active Bulletin Notices',
    eventsTitle: 'Upcoming Events',
    noticeCta: 'View All Notice Board',
    eventCta: 'See School Calendar'
  },
  achievements: {
    eyebrow: 'OUR ACHIEVEMENTS',
    heading: 'Celebrating Outstanding Milestones',
    description: 'A brief glance at our standard credentials and school championships representing continuous student commitment.',
    cards: [
      {
        title: 'National Science Gold',
        description: 'Recipient of the 2025 Young Inventors Gold Shield for state robotics and biotechnology crop-growth projects.',
        icon: 'award'
      },
      {
        title: 'Over 92% Ivy Admissions',
        description: '92% of our advanced college placement graduates secured positions in top tier global tier-1 universities in the US/UK.',
        icon: 'users'
      },
      {
        title: 'District Athletic Shield',
        description: 'Champions of the regional inter-academy athletic tournament for soccer, cross-country track, and table-tennis.',
        icon: 'shield'
      }
    ]
  },
  galleryPreview: {
    eyebrow: 'CAMPUS SNAPSHOTS',
    heading: 'A Visual Tour of Maria Life',
    ctaLabel: 'Open Gallery Grid'
  },
  testimonials: {
    eyebrow: 'TESTIMONIALS',
    heading: 'What Our Community Says'
  },
  admissionCta: {
    heading: 'Ready to Embark on Your Journey at Maria Academy?',
    description: 'Admissions for Academic Year 2026-2027 are officially open. Contact our admission officers or submit your child’s application form online.',
    primaryCta: 'Start Admission Process',
    secondaryCta: 'Request a Campus Visit'
  }
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: './Modern-School-Building-Feature-Image.jpg',
    title: 'Inspiring Excellence, Nurturing Character',
    subtitle: 'Welcome to Maria Academy',
    description: 'At Maria, we empower students to achieve academic greatness, build lifelong leadership skills, and foster a compassionate global outlook.'
  },
  {
    id: 'slide-2',
    image: './b7a689d1-31f0-4591-938d-39fda5bafb77.jpg',
    title: 'Innovating Education For a Better Tomorrow',
    subtitle: 'Cutting-Edge Academic Programs',
    description: 'From advanced STEAM labs to competitive speech & debate teams, we offer holistic learning experiences that prepare students for future global challenges.'
  },
  {
    id: 'slide-3',
    image: './indian-creek-elementary-school-clarkston-ga-primaryphoto.jpg',
    title: 'A Vibrant Community of Creative Learners',
    subtitle: 'Extracurriculars & Dynamic Student Life',
    description: 'Discover your passion in music, fine arts, championship athletics, and diverse student-run service clubs.'
  }
];

export const SCHOOL_FACILITIES = [
  {
    id: 'fac-1',
    title: 'Modern Science & STEAM Labs',
    description: 'Fully equipped physics, chemistry, biology, and robotics laboratories with modern safety measures and state-of-the-art experiment tools.',
    image: 'https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fac-2',
    title: 'Central Library & Media Center',
    description: 'A quiet haven housing over 45,000 physical volumes, interactive learning media bays, and digital academic journal subscriptions.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fac-3',
    title: 'Olympic-Standard Sportsnpm run de Complex',
    description: 'Featuring a heated 8-lane swimming pool, professional indoor basketball courts, a multi-track stadium, and fully grassed football fields.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fac-4',
    title: 'Performing Arts Center',
    description: 'A 600-seat acoustic auditorium for theatrical dramas, orchestral concerts, dance performances, and public debate symposiums.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'Parent of Grade 10 Student',
    content: 'Sending our daughter to Maria Academy was the best decision we ever made. The teachers do not just teach—they mentor. Her self-confidence and grades have improved immensely.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Alumnus, Harvard Class of 2025',
    content: 'The rigorous AP curriculum and the science research club at Maria laid the perfect foundation for my higher studies. I learned time-management, leadership, and analytical thinking.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Parent of Grade 4 Student',
    content: 'We relocated from Europe, and the school went above and beyond to integrate our son. The campus environment is incredibly warm, supportive, and safe.',
    rating: 5
  }
];

export const EVENTS: SchoolEvent[] = [
  {
    id: 'ev-1',
    title: 'Annual Science & Tech Fair 2026',
    date: 'Oct 14, 2026',
    time: '09:00 AM - 04:00 PM',
    location: 'Main Science Pavilion',
    description: 'Our students showcase revolutionary prototypes, automated robots, and environmental solutions. Open to parents, industry judges, and local communities.',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ev-2',
    title: 'Maria Inter-School Track & Field Championship',
    date: 'Nov 02, 2026',
    time: '08:00 AM - 05:00 PM',
    location: 'Olympic Stadium Track',
    description: 'An exciting day of competitive athletic events featuring 12 regional academies. Come cheer on our Maria Panthers as they defend the golden trophy!',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ev-3',
    title: 'Winter Gala Concert',
    date: 'Dec 18, 2026',
    time: '06:30 PM - 09:30 PM',
    location: 'Acoustic Auditorium',
    description: 'A spectacular evening showcasing our Chamber Orchestra, Concert Bands, and student choirs performing festive, classical, and modern musical scores.',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ev-4',
    title: 'Spring Admissions Open House',
    date: 'Feb 15, 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'Administration Hall',
    description: 'A warm welcome to prospective families. Meet our admissions directors, take student-guided campus tours, and understand our personalized study curriculums.',
    category: 'admissions',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ev-5',
    title: 'Fine Arts Exhibition & Auction',
    date: 'Apr 05, 2026',
    time: '01:00 PM - 06:00 PM',
    location: 'West Campus Gallery',
    description: 'An impressive display of painting, digital artwork, clay modeling, and photography by our Senior arts cohorts. Proceeds support local youth shelter foundations.',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ev-6',
    title: 'Grade 12 Graduation Ceremony',
    date: 'Jun 12, 2026',
    time: '10:00 AM - 01:00 PM',
    location: 'Grand Lawn Amphitheater',
    description: 'Celebrating the momentous accomplishments of our graduating class. Join us for the commencement address, diploma distribution, and traditional cap tossing.',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'Urgent: Revision in School Timing due to Winter Conditions',
    date: 'Oct 28, 2026',
    content: 'Due to severe early winter fog and morning frost, school timings will be temporarily modified starting Monday, Nov 2nd. The new timings are 8:45 AM to 3:15 PM. School bus pickups will be delayed by exactly 45 minutes.',
    category: 'general',
    isUrgent: true,
    pdfUrl: '#'
  },
  {
    id: 'not-2',
    title: 'Mid-Term Progress Report Cards Distribution Schedule',
    date: 'Oct 22, 2026',
    content: 'The Mid-Term exam progress reports have been uploaded to the online parent-student portal. Parent-Teacher Consultations (PTC) will be held on Friday, Nov 6th between 1:00 PM and 5:00 PM. Parents must book slots via the scheduler.',
    category: 'academic',
    isUrgent: false,
    pdfUrl: '#'
  },
  {
    id: 'not-3',
    title: 'Pre-Board Examination Syllabus & Date Sheet Released',
    date: 'Oct 15, 2026',
    content: 'The date sheet and exact chapter syllabi for Pre-Board examinations (Grades 10 and 12) have been published. Examinations are scheduled to commence on Dec 1st. Attendance is strictly compulsory.',
    category: 'exam',
    isUrgent: true,
    pdfUrl: '#'
  },
  {
    id: 'not-4',
    title: 'Annual Sports Registration and Tryouts Open',
    date: 'Oct 10, 2026',
    content: 'Registration for winter athletic clubs (basketball, soccer, hockey, table tennis, swimming) is open on the portal. Field tryouts will begin next Tuesday after class hours. Please submit physical clearance certificates.',
    category: 'sports',
    isUrgent: false,
    pdfUrl: '#'
  },
  {
    id: 'not-5',
    title: 'Scholarship and Financial Aid Applications for Academic Year 2026-27',
    date: 'Sep 28, 2026',
    content: 'Maria Academy is inviting applications for merit-cum-means scholarships for the upcoming calendar academic year. Detailed forms, checklist folders, and income eligibility slabs can be downloaded here.',
    category: 'admission',
    isUrgent: false,
    pdfUrl: '#'
  },
  {
    id: 'not-6',
    title: 'Syllabus Modifications for Advanced Placement (AP) Sciences',
    date: 'Sep 15, 2026',
    content: 'Following the revised College Board guidelines, minor chapter pacing changes have been introduced for AP Biology and AP Chemistry. AP students are requested to consult their teachers and collect revised sheets.',
    category: 'academic',
    isUrgent: false,
    pdfUrl: '#'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't-dr-stewart',
    name: 'Dr. Arthur Stewart, PhD',
    designation: 'Principal & Senior Scholar',
    qualification: 'PhD in Educational Leadership (Oxford University), MSc in Applied Mathematics',
    subjects: ['Advanced Calculus', 'Global Leadership Ethics'],
    email: 'a.stewart@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'With over 25 years of educational administration globally, Dr. Stewart believes in bridging academic rigor with practical human empathy to develop students who lead with wisdom and service.'
  },
  {
    id: 't-clara-bell',
    name: 'Mrs. Clara Bell',
    designation: 'Vice-Principal & Head of Humanities',
    qualification: 'MA in English Literature (Columbia University), BEd in Language Teaching',
    subjects: ['English Literature', 'Creative Writing', 'AP Literature'],
    email: 'c.bell@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'Mrs. Bell is deeply passionate about creative expression. She champions student-led publications, the annual literary fest, and ensures humanities lessons foster sound critical reading skills.'
  },
  {
    id: 't-david-yang',
    name: 'Mr. David Yang',
    designation: 'Head of STEAM and Robotics Coordinator',
    qualification: 'MS in Robotics Engineering (MIT), BS in Computer Science',
    subjects: ['Computer Science', 'Robotics and AI', 'AP Physics'],
    email: 'd.yang@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1580894732444-8fecef2601da?q=80&w=400&auto=format&fit=crop',
    bio: 'Mr. Yang brings silicon-valley experience into the high-school classroom. Under his expert coaching, our robotics cohort placed 3rd in the national competition.'
  },
  {
    id: 't-sophia-martinez',
    name: 'Dr. Sophia Martinez',
    designation: 'Senior Faculty of Life Sciences',
    qualification: 'PhD in Molecular Biology (UC Berkeley)',
    subjects: ['AP Biology', 'Environmental Science', 'Organic Chemistry'],
    email: 's.martinez@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    bio: 'Dr. Martinez specializes in experimental biochemistry. She manages our biotechnology greenhouse and inspires high schoolers to conduct real lab-tested research.'
  },
  {
    id: 't-marcus-brooks',
    name: 'Mr. Marcus Brooks',
    designation: 'Director of Fine Arts and Orchestral Conductor',
    qualification: 'Master of Music (The Juilliard School)',
    subjects: ['Symphonic Orchestra', 'Music Theory', 'Visual Arts'],
    email: 'm.brooks@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    bio: 'Mr. Brooks believes music and art are the soul of academic development. He organizes seasonal symphony concerts and fosters student creativity across mediums.'
  },
  {
    id: 't-linda-taylor',
    name: 'Ms. Linda Taylor',
    designation: 'Head of Mathematics and Coding',
    qualification: 'MSc in Pure Mathematics (Stanford University)',
    subjects: ['Algebra II', 'Statistics and Probability', 'Discrete Math'],
    email: 'l.taylor@Maria.edu',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'Ms. Taylor teaches students to love the logical structure of mathematics. She hosts weekly coding bootcamps and trains our math olympiad squads.'
  }
];

export const SCHOOL_CLASSES: SchoolClass[] = [
  {
    id: 'c-kindergarten',
    name: 'Early Explorers Kindergarten',
    grade: 'Pre-K to Kindergarten',
    teacherName: 'Mrs. Abigail Carter',
    overview: 'Fostering innate curiosity through social play, motor skills building, phonics, and basic logical concept games in a loving, high-supervision setting.',
    facilities: ['Soft Indoor Playland', 'Interactive Touch Panels', 'Nap Zones', 'Sensory Clay Sandpits'],
    subjects: ['Phonics & Pre-Reading', 'Creative Arts', 'Basic Numeracy', 'Social-Emotional Skills'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c-primary',
    name: 'Primary Foundation Class',
    grade: 'Grades 1 to 5',
    teacherName: 'Mr. Thomas Alistair',
    overview: 'Building strong foundations in literacy, numerical logic, natural sciences, and social studies. Focuses on peer collaboration and structured learning habits.',
    facilities: ['Dedicated Childrens Library', 'Science Kit Closets', 'Creative Crafts Studio', 'Kids Athletics Field'],
    subjects: ['English Language Arts', 'Mathematics', 'Environmental Sciences', 'Music & Drawing'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c-middle',
    name: 'Middle Scholars Cohort',
    grade: 'Grades 6 to 8',
    teacherName: 'Mrs. Eleanor Vance',
    overview: 'Transitioning to advanced modular learning, critical inquiry, global history, and introductory laboratory investigations. Encourages personal projects and debating.',
    facilities: ['Middle STEAM Lab', 'Linguistic Media Centers', 'Indoor Basketball Arena', 'Art & Design Hub'],
    subjects: ['Algebra & Pre-Geometry', 'General Science & Lab', 'World History', 'Foreign Languages'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'c-high',
    name: 'High School AP & Scholars Program',
    grade: 'Grades 9 to 12',
    teacherName: 'Mr. David Yang',
    overview: 'Rigorous preparatory college curriculum offering 18 Advanced Placement (AP) courses, college counselling guidance, research journals, and leadership cohorts.',
    facilities: ['College Prep Lab', 'Robotics and AI Lab', 'Auditorium Arena', 'Advanced Bio-House'],
    subjects: ['Advanced Placement Sciences', 'Advanced Calculus', 'World Literature', 'Political Sciences'],
    image: 'https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    caption: 'Our historic Main Campus Building during a quiet autumn morning.',
    category: 'campus'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    caption: 'High school seniors celebrating graduation with standard cap toss.',
    category: 'events'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
    caption: 'Our modern Central Reading Room with advanced media resource desks.',
    category: 'campus'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=800&auto=format&fit=crop',
    caption: 'Senior biology students investigating plant cellular structures in the bio-lab.',
    category: 'academic'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    caption: 'Inter-school athletics championship: 100m sprint finals at the stadium.',
    category: 'sports'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop',
    caption: 'Students rehearsing for the winter gala concert in the performing auditorium.',
    category: 'arts'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1580894732444-8fecef2601da?q=80&w=800&auto=format&fit=crop',
    caption: 'Interactive mathematics session utilizing smart board interfaces.',
    category: 'academic'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    caption: 'Active portrait from the senior debating society seminar session.',
    category: 'events'
  },
  {
    id: 'gal-9',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    caption: 'Senior robotics club tinkering with their custom AI navigation robot.',
    category: 'academic'
  }
];

export const STUDENT_PROFILE: StudentProfile = {
  name: 'Ethan Hunt',
  rollNo: '2026-PAN-048',
  class: 'Grade 11',
  section: 'A (AP Cohort)',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  admissionNo: 'PAN-2023-1092',
  attendanceRate: 94.8,
  email: 'e.hunt26@Maria.edu'
};

export const STUDENT_COURSES: StudentCourse[] = [
  { id: 'sc-1', name: 'AP Calculus BC', code: 'MATH-401', teacher: 'Ms. Linda Taylor', progress: 85, grade: 'A' },
  { id: 'sc-2', name: 'AP Computer Science A', code: 'CS-402', teacher: 'Mr. David Yang', progress: 92, grade: 'A+' },
  { id: 'sc-3', name: 'AP Biology & Lab', code: 'BIO-405', teacher: 'Dr. Sophia Martinez', progress: 78, grade: 'B+' },
  { id: 'sc-4', name: 'AP English Literature', code: 'ENG-401', teacher: 'Mrs. Clara Bell', progress: 88, grade: 'A-' }
];

export const TIMETABLE: TimetableEntry[] = [
  {
    day: 'Monday',
    slots: [
      { time: '08:45 AM - 09:45 AM', subject: 'AP Calculus BC', teacher: 'Ms. Linda Taylor', room: 'Room 304' },
      { time: '09:45 AM - 10:45 AM', subject: 'AP Biology & Lab', teacher: 'Dr. Sophia Martinez', room: 'Science Lab 2' },
      { time: '11:00 AM - 12:00 PM', subject: 'AP Computer Science', teacher: 'Mr. David Yang', room: 'Robotics Lab' },
      { time: '12:45 PM - 01:45 PM', subject: 'AP English Literature', teacher: 'Mrs. Clara Bell', room: 'Room 102' }
    ]
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '08:45 AM - 09:45 AM', subject: 'AP Computer Science', teacher: 'Mr. David Yang', room: 'Robotics Lab' },
      { time: '09:45 AM - 10:45 AM', subject: 'AP English Literature', teacher: 'Mrs. Clara Bell', room: 'Room 102' },
      { time: '11:00 AM - 12:00 PM', subject: 'AP Calculus BC', teacher: 'Ms. Linda Taylor', room: 'Room 304' },
      { time: '12:45 PM - 01:45 PM', subject: 'Physical Athletics', teacher: 'Coach Roberts', room: 'Stadium Gym' }
    ]
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '08:45 AM - 09:45 AM', subject: 'AP Calculus BC', teacher: 'Ms. Linda Taylor', room: 'Room 304' },
      { time: '09:45 AM - 11:45 AM', subject: 'AP Biology & Lab', teacher: 'Dr. Sophia Martinez', room: 'Science Lab 2' },
      { time: '12:45 PM - 01:45 PM', subject: 'AP English Literature', teacher: 'Mrs. Clara Bell', room: 'Room 102' }
    ]
  },
  {
    day: 'Thursday',
    slots: [
      { time: '08:45 AM - 09:45 AM', subject: 'AP English Literature', teacher: 'Mrs. Clara Bell', room: 'Room 102' },
      { time: '09:45 AM - 10:45 AM', subject: 'AP Computer Science', teacher: 'Mr. David Yang', room: 'Robotics Lab' },
      { time: '11:00 AM - 12:00 PM', subject: 'AP Calculus BC', teacher: 'Ms. Linda Taylor', room: 'Room 304' },
      { time: '12:45 PM - 01:45 PM', subject: 'Symphonic Orchestra', teacher: 'Mr. Marcus Brooks', room: 'Auditorium' }
    ]
  },
  {
    day: 'Friday',
    slots: [
      { time: '08:45 AM - 09:45 AM', subject: 'AP Biology & Lab', teacher: 'Dr. Sophia Martinez', room: 'Science Lab 2' },
      { time: '09:45 AM - 10:45 AM', subject: 'AP Computer Science', teacher: 'Mr. David Yang', room: 'Robotics Lab' },
      { time: '11:00 AM - 12:00 PM', subject: 'Guidance & College Prep', teacher: 'Mrs. Clara Bell', room: 'Auditorium' },
      { time: '12:45 PM - 01:45 PM', subject: 'Weekly Coding Club', teacher: 'Mr. David Yang', room: 'Robotics Lab' }
    ]
  }
];

export const FEE_STATUS: StudentFeeStatus = {
  totalAmount: 12500,
  paidAmount: 9500,
  pendingAmount: 3000,
  dueDate: 'Nov 15, 2026',
  status: 'pending'
};

export const UPCOMING_EXAMS: StudentExam[] = [
  { id: 'ex-1', subject: 'AP Computer Science - Mid-Term Exam', date: 'Nov 18, 2026', time: '09:00 AM - 11:30 AM', room: 'Robotics Lab 1' },
  { id: 'ex-2', subject: 'AP Calculus BC - Weekly Quiz 4', date: 'Nov 20, 2026', time: '08:45 AM - 09:45 AM', room: 'Room 304' },
  { id: 'ex-3', subject: 'AP Biology - Anatomy Mock Lab Exam', date: 'Nov 24, 2026', time: '10:00 AM - 12:00 PM', room: 'Science Lab 2' }
];

export const STUDENT_RESULTS: StudentResult[] = [
  { id: 'res-1', subject: 'AP Calculus BC', examName: 'Term-1 Examinations', score: 92, maxScore: 100, grade: 'A', remarks: 'Excellent logical proofs. Consistent performer.' },
  { id: 'res-2', subject: 'AP Computer Science', examName: 'Term-1 Examinations', score: 98, maxScore: 100, grade: 'A+', remarks: 'Perfect code structures and fast algorithms.' },
  { id: 'res-3', subject: 'AP Biology & Lab', examName: 'Term-1 Examinations', score: 81, maxScore: 100, grade: 'B', remarks: 'Requires more detail in lab reports. Decent concepts.' },
  { id: 'res-4', subject: 'AP English Literature', examName: 'Term-1 Examinations', score: 89, maxScore: 100, grade: 'A-', remarks: 'Highly expressive and deeply analytical essays.' },
  { id: 'res-5', subject: 'World History Foundation', examName: 'Previous Term End', score: 95, maxScore: 100, grade: 'A', remarks: 'Outstanding research paper on global routes.' }
];
