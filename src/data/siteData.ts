// =============================================
// SITE DATA - Easy to replace with API calls
// =============================================

export const siteInfo = {
  name: "EduPrime Academy",
  tagline: "Excellence in Education Since 1952",
  phone: "+1 (555) 123-4567",
  email: "admissions@eduprime.edu",
  address: "123 Academic Avenue, Education City, EC 12345",
  socialLinks: {
    facebook: "https://facebook.com/eduprime",
    twitter: "https://twitter.com/eduprime",
    instagram: "https://instagram.com/eduprime",
    linkedin: "https://linkedin.com/company/eduprime",
    youtube: "https://youtube.com/eduprime",
  },
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Faculty", path: "/faculty" },
  { name: "Campus Life", path: "/campus-life" },
  { name: "Get in Touch", path: "/contact" },
];

export const heroData = {
  title: "Welcome to Excellence",
  subtitle: "Empowering Minds, Shaping Futures",
  description: "Where tradition meets innovation to create tomorrow's leaders. Join our legacy of academic excellence spanning over seven decades.",
  ctaButtons: [
    { text: "Apply Now", path: "/admissions", variant: "primary" as const },
    { text: "Virtual Tour", path: "/facilities", variant: "secondary" as const },
  ],
};

export const announcements = [
  { id: 1, title: "📚 Final Exams Schedule Released", date: "Jan 15, 2026", urgent: true },
  { id: 2, title: "🎉 Annual Sports Day - February 20th", date: "Jan 14, 2026", urgent: false },
  { id: 3, title: "📝 Admissions Open for 2026-27 Session", date: "Jan 12, 2026", urgent: true },
  { id: 4, title: "🏆 Congratulations to Science Olympiad Winners!", date: "Jan 10, 2026", urgent: false },
  { id: 5, title: "🎭 Drama Club Auditions - January 25th", date: "Jan 8, 2026", urgent: false },
];

export const quickStats = [
  { label: "Students Enrolled", value: 2500, suffix: "+", icon: "Users" },
  { label: "Qualified Teachers", value: 150, suffix: "+", icon: "GraduationCap" },
  { label: "Years of Excellence", value: 72, suffix: "", icon: "Award" },
  { label: "Awards Won", value: 200, suffix: "+", icon: "Trophy" },
];

export const principalMessage = {
  name: "Dr. Margaret Richardson",
  title: "Principal & Chief Academic Officer",
  image: "/placeholder.svg",
  quote: "At EduPrime Academy, we believe that every child possesses unique potential waiting to be unlocked. Our mission is to provide not just education, but an environment where curiosity thrives, character develops, and dreams take flight.",
  signature: "Dr. Margaret Richardson",
};

export const aboutTabs = {
  history: {
    title: "Our Legacy",
    content: "Founded in 1952 by visionary educators, EduPrime Academy began as a small institution with just 50 students and 5 teachers. Over seven decades, we have grown into one of the most prestigious educational institutions in the region, while maintaining our core values of excellence, integrity, and innovation.",
    milestones: [
      { year: "1952", event: "EduPrime Academy founded" },
      { year: "1975", event: "First computer lab established" },
      { year: "1990", event: "International exchange program launched" },
      { year: "2005", event: "State-of-the-art science complex opened" },
      { year: "2020", event: "Digital learning initiative launched" },
    ],
  },
  mission: {
    title: "Mission & Vision",
    mission: "To nurture intellectual curiosity, foster critical thinking, and develop well-rounded individuals who will contribute positively to society.",
    vision: "To be the beacon of educational excellence, recognized globally for producing ethical leaders, innovative thinkers, and compassionate citizens.",
    values: ["Excellence", "Integrity", "Innovation", "Inclusivity", "Community"],
  },
  leadership: [
    { name: "Dr. Margaret Richardson", role: "Principal", qualification: "Ph.D. in Educational Leadership" },
    { name: "Prof. James Chen", role: "Vice Principal (Academics)", qualification: "M.Ed, Cambridge University" },
    { name: "Dr. Sarah Williams", role: "Dean of Students", qualification: "Ed.D in Student Affairs" },
    { name: "Mr. Robert Kumar", role: "Director of Administration", qualification: "MBA, Stanford University" },
  ],
};

export const academicStreams = [
  {
    id: "science",
    title: "Science Stream",
    icon: "FlaskConical",
    description: "Explore the wonders of Physics, Chemistry, Biology, and Mathematics with cutting-edge laboratories and research opportunities.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    highlights: ["State-of-the-art labs", "Research projects", "Science olympiad prep"],
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    icon: "TrendingUp",
    description: "Build a strong foundation in business, economics, and finance for future entrepreneurs and business leaders.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Entrepreneurship"],
    highlights: ["Industry internships", "Business simulations", "Financial literacy programs"],
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    icon: "Palette",
    description: "Develop critical thinking and creativity through literature, history, psychology, and fine arts.",
    subjects: ["Literature", "History", "Psychology", "Political Science", "Fine Arts"],
    highlights: ["Creative writing workshops", "Cultural exchanges", "Art exhibitions"],
  },
];

export const admissionProcess = [
  { step: 1, title: "Submit Application", description: "Complete the online application form with all required documents." },
  { step: 2, title: "Entrance Assessment", description: "Students appear for our comprehensive aptitude assessment." },
  { step: 3, title: "Personal Interview", description: "A conversation with our academic counselors and faculty." },
  { step: 4, title: "Document Verification", description: "Verification of academic records and certificates." },
  { step: 5, title: "Admission Offer", description: "Successful candidates receive their admission letters." },
  { step: 6, title: "Enrollment", description: "Complete fee payment and officially join the EduPrime family." },
];

export const feeStructure = [
  { level: "Primary (Grade 1-5)", tuition: "$4,500", admission: "$500", total: "$5,000" },
  { level: "Middle (Grade 6-8)", tuition: "$5,500", admission: "$600", total: "$6,100" },
  { level: "Secondary (Grade 9-10)", tuition: "$6,500", admission: "$700", total: "$7,200" },
  { level: "Higher Secondary (Grade 11-12)", tuition: "$7,500", admission: "$800", total: "$8,300" },
];

export const facilities = [
  { id: 1, title: "Modern Library", description: "50,000+ books, digital resources, and quiet study zones", icon: "BookOpen" },
  { id: 2, title: "Science Laboratories", description: "State-of-the-art Physics, Chemistry, and Biology labs", icon: "FlaskConical" },
  { id: 3, title: "Computer Labs", description: "300+ latest computers with high-speed internet", icon: "Monitor" },
  { id: 4, title: "Sports Complex", description: "Olympic-sized pool, indoor courts, and athletics track", icon: "Trophy" },
  { id: 5, title: "Auditorium", description: "1000-seat capacity with professional audio-visual setup", icon: "Theater" },
  { id: 6, title: "Cafeteria", description: "Nutritious meals prepared by certified chefs", icon: "UtensilsCrossed" },
  { id: 7, title: "Medical Center", description: "24/7 healthcare with qualified medical staff", icon: "Heart" },
  { id: 8, title: "Art Studio", description: "Creative spaces for painting, sculpture, and design", icon: "Palette" },
];

export const facultyMembers = [
  { id: 1, name: "Dr. Emily Watson", designation: "Head of Science", qualification: "Ph.D. Physics, MIT", department: "Science" },
  { id: 2, name: "Prof. Michael Brown", designation: "Senior Mathematics Teacher", qualification: "M.Sc Mathematics, Oxford", department: "Mathematics" },
  { id: 3, name: "Ms. Jennifer Lee", designation: "Head of English", qualification: "M.A. English Literature", department: "Languages" },
  { id: 4, name: "Mr. David Chen", designation: "Computer Science Faculty", qualification: "M.Tech, IIT", department: "Technology" },
  { id: 5, name: "Dr. Sarah Miller", designation: "Biology Department Head", qualification: "Ph.D. Molecular Biology", department: "Science" },
  { id: 6, name: "Prof. Robert Wilson", designation: "History & Civics", qualification: "M.A. History, Cambridge", department: "Humanities" },
  { id: 7, name: "Ms. Amanda Garcia", designation: "Art & Design Teacher", qualification: "MFA, Rhode Island School of Design", department: "Arts" },
  { id: 8, name: "Mr. Thomas Anderson", designation: "Physical Education", qualification: "B.P.Ed, National Sports University", department: "Sports" },
];

export const upcomingEvents = [
  { id: 1, title: "Annual Science Fair", date: "February 15, 2026", time: "9:00 AM - 4:00 PM", category: "Academic" },
  { id: 2, title: "Sports Day", date: "February 20, 2026", time: "8:00 AM - 6:00 PM", category: "Sports" },
  { id: 3, title: "Parent-Teacher Meeting", date: "February 25, 2026", time: "10:00 AM - 2:00 PM", category: "Academic" },
  { id: 4, title: "Cultural Festival", date: "March 5, 2026", time: "5:00 PM - 9:00 PM", category: "Cultural" },
  { id: 5, title: "Career Counseling Workshop", date: "March 10, 2026", time: "2:00 PM - 5:00 PM", category: "Workshop" },
];

export const studentClubs = [
  { id: 1, name: "Robotics Club", members: 45, icon: "Bot", description: "Build and program robots for national competitions" },
  { id: 2, name: "Debate Society", members: 60, icon: "MessageSquare", description: "Develop public speaking and argumentation skills" },
  { id: 3, name: "Eco Warriors", members: 80, icon: "Leaf", description: "Environmental initiatives and sustainability projects" },
  { id: 4, name: "Drama Club", members: 50, icon: "Theater", description: "Theater productions and performing arts" },
  { id: 5, name: "Music Ensemble", members: 40, icon: "Music", description: "Choir, orchestra, and contemporary music" },
  { id: 6, name: "Photography Club", members: 35, icon: "Camera", description: "Capture campus life and learn professional techniques" },
];

export const footerLinks = {
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Campus Life", path: "/campus-life" },
  ],
  resources: [
    { name: "Student Portal", path: "#" },
    { name: "Parent Portal", path: "#" },
    { name: "Career Opportunities", path: "#" },
    { name: "Alumni Network", path: "#" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
  ],
};
