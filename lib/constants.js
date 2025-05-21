import { Brain, Cpu, Code, GraduationCap, User, RefreshCcw } from 'lucide-react';

export const navItems = [
  {
    name: 'Courses',
    href: '/workspace/explore',
    dropdown: true,
    items: [
      {
        name: 'AI Fundamentals',
        description: 'Learn the basics of artificial intelligence and machine learning.',
        href: '#',
      },
      {
        name: 'Deep Learning',
        description: 'Master neural networks and deep learning techniques.',
        href: '#',
      },
      {
        name: 'Natural Language Processing',
        description: 'Build AI systems that understand and generate human language.',
        href: '#',
      },
      {
        name: 'Computer Vision',
        description: 'Create AI that can see and interpret visual information.',
        href: '#',
      },
    ],
  },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
];

export const features = [
  {
    name: 'Expert-Led Instruction',
    description: 'Learn from industry professionals with years of experience in AI and machine learning.',
    icon: <GraduationCap className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Hands-On Projects',
    description: 'Apply your knowledge through real-world projects that showcase your skills to potential employers.',
    icon: <Code className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Cutting-Edge Curriculum',
    description: `Stay ahead with content that's regularly updated to reflect the latest AI developments and tools.`,
    icon: <Cpu className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'AI Career Paths',
    description: 'Structured learning paths to help you achieve your specific career goals in AI and data science.',
    icon: <User className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Learning Community',
    description: 'Connect with fellow learners, participate in discussions, and collaborate on projects.',
    icon: <Brain className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Lifetime Access',
    description: 'Revisit course materials at any time to refresh your knowledge as the field evolves.',
    icon: <RefreshCcw className="h-6 w-6 text-white" />,
    imageUrl: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Machine Learning Engineer at Google',
    quote: 'The AI Specialization program completely transformed my career. I went from a junior data analyst to a machine learning engineer at Google in just 8 months.',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Michael Chen',
    title: 'AI Researcher',
    quote: 'The depth and quality of content is unmatched. I especially appreciated the hands-on projects that helped me build a compelling portfolio.',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Jessica Martinez',
    title: 'Data Science Team Lead',
    quote: 'As someone transitioning from traditional software engineering, AILearn provided the perfect structured path to quickly gain expertise in AI and machine learning.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'David Wilson',
    title: 'Startup Founder',
    quote: 'The skills I gained helped me launch my AI startup. The instructors went above and beyond to provide guidance even after I completed the program.',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Emma Taylor',
    title: 'NLP Specialist',
    quote: 'The Natural Language Processing course was exactly what I needed to specialize in my field. The projects were challenging and incredibly rewarding.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Robert García',
    title: 'Computer Vision Engineer',
    quote: `I've taken multiple online courses, but AILearn's production quality and teaching approach are on another level. Worth every penny.`,
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export const pricing = [
  {
    name: 'Free',
    description: 'Get started with our free introductory courses.',
    monthlyPrice: 0,
    annualPrice: 0,
    featured: false,
    buttonText: 'Get Started',
    features: [
      'Access to 1 foundational course',
      'Basic project templates',
      'Community forum access',
      'Email support',
      'Course completion certificates',
    ],
  },
  {
    name: 'Starter',
    description: 'Perfect for beginners looking to explore AI.',
    monthlyPrice: 19.99,
    annualPrice: 160,
    featured: false,
    buttonText: 'Get Started',
    features: [
      'Access to 10 foundational courses',
      'Basic AI project templates',
      'Community forum access',
      'Email support',
      'Course completion certificates',
    ],
  },
  {
    name: 'Premium',
    description: 'For teams looking to upskill collectively.',
    monthlyPrice: 39.99,
    annualPrice: 300,
    featured: false,
    buttonText: 'Get Started',
    features: [
      'Everything in Professional plan',
      'Custom learning paths for teams',
      'Dedicated account manager',
      'Corporate dashboard & analytics',
      'Private team discussion forums',
      'Custom project workshops',
      'On-demand expert consultations',
    ],
  },
];

export const faqItems = [
  {
    id: 'faq-1',
    question: 'Do I need prior programming experience?',
    answer: 'For beginner courses, no prior experience is required. We start with the fundamentals. For intermediate and advanced courses, basic programming knowledge (particularly Python) is recommended.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take to complete a course?',
    answer: 'Most courses are designed to be completed in 4-8 weeks, with 5-10 hours of study per week. However, you have lifetime access to the materials and can learn at your own pace.',
  },
  {
    id: 'faq-3',
    question: 'Are there any deadlines or schedules?',
    answer: 'No, all our courses are self-paced. Once you enroll, you can start learning immediately and progress through the material on your own schedule.',
  },
  {
    id: 'faq-4',
    question: 'Will I receive a certificate upon completion?',
    answer: 'Yes, all plans include certificates of completion for each course. These certificates can be added to your LinkedIn profile and shared with potential employers.',
  },
  {
    id: 'faq-5',
    question: `What if I'm not satisfied with a course?`,
    answer: `We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, we'll provide a full refund within the first 30 days.`,
  },
  {
    id: 'faq-6',
    question: 'How does the job placement assistance work?',
    answer: 'For Professional and Enterprise plan members, we provide resume reviews, interview preparation, and connections to our hiring partner network. While we cannot guarantee job placement, many of our graduates have successfully secured positions in the AI field.',
  },
];

export const footerLinks = [
  {
    title: 'Courses',
    links: [
      { name: 'AI Fundamentals', href: '#' },
      { name: 'Machine Learning', href: '#' },
      { name: 'Deep Learning', href: '#' },
      { name: 'Natural Language Processing', href: '#' },
      { name: 'Computer Vision', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partnerships', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Community', href: '#' },
      { name: 'Learning Paths', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'AI Research', href: '#' },
    ],
  },
];