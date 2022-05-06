export interface EducationType {
  school: string;
  url?: string;
  location: string;
  degree?: string;
  course?: string;
  grade: number;
  type: "CGPA" | "Percentage" | "GPA (out of 4.0)" | "GPA (out of 5.0)";
  rank?: number;
  startDate: string;
  logoUrl: string;
  endDate: string;
  description?: string;
  disabled?: boolean;
}

const education: EducationType[] = [
  {
    school: "International Institute of Information Technology",
    url: "https://www.iiitnr.ac.in/",
    location: "Naya Raipur, Chhattisgarh",
    degree: "Bachelor of Technology",
    course: "Computer Science Engineering",
    grade: 9.43,
    type: "CGPA",
    logoUrl: "/assets/iiitnr.webp",
    startDate: "2020",
    endDate: "2024",
  },
  {
    school: "Vivekanand School",
    url: "https://vivekanandschool.in/website/index.html",
    location: "Anand Vihar, New Delhi",
    degree: "Intermediate/ +2",
    course: "Physics, Chemistry, Mathematics",
    grade: 89.6,
    type: "Percentage",
    startDate: "2017",
    endDate: "2019",
    logoUrl: "/assets/vivekanand.jpg",
  },
  {
    school: "Vivekanand School",
    url: "https://vivekanandschool.in/website/index.html",
    location: "Anand Vihar, New Delhi",
    degree: "Matriculation",
    course: "Science",
    grade: 9.4,
    type: "CGPA",
    startDate: "2016",
    endDate: "2017",
    logoUrl: "/assets/vivekanand.jpg",
  },
];

export default education;
