// THE TESTIMONIAL DATA IN THE HOME PAGE
export const testimonials: Testimonials[] = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "I've been a member of this gym for over a year now, and I can honestly say it's been a game-changer for my fitness journey. The facilities are top-notch, and the staff is always friendly and supportive. I've lost over 20 pounds and gained so much confidence. Thank you!",
    occupation: "Student",
    avatar: "/img/avatar1.jpg",
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "As a busy professional, I was struggling to find time to work out. But this gym's flexible hours and convenient location made it easy for me to fit in a workout on my lunch break. The personal training sessions have also been incredibly helpful in helping me reach my goals. Highly recommend!",
    occupation: "Software Egineer",
    avatar: "/img/avatar2.jpg",
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "I was hesitant to join a gym because I'm not exactly a 'gym person.' But from the moment I walked in, I felt welcome and supported. The group fitness classes are so much fun, and the instructors are all super knowledgeable and encouraging. I've never felt more motivated to take care of my body. Thanks for creating such a positive and inclusive environment!",
    occupation: "University Lecturer",
    avatar: "/img/avatar3.jpg",
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "I've tried several gyms in the past, but this one is hands-down the best. The equipment is always clean and well-maintained, and the staff is always happy to help with any questions or concerns. Plus, the views from the treadmills are amazing! I feel like I'm getting a great workout and enjoying the scenery at the same time. Win-win!",
    occupation: "Talking Parrot",
    avatar: "/img/avatar4.jpg",
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "As someone who's struggled with chronic pain, I was skeptical about joining a gym. But the trainers here have been amazing in helping me modify exercises to accommodate my limitations. The small group training sessions have also been really helpful in keeping me motivated and accountable. I've already seen a significant reduction in my pain levels, and I'm so grateful to have found this gym!",
    occupation: "Pharmacist",
    avatar: "/img/avatar5.jpg",
  },
];

// IMAGES FOR THE GALLERY PAGE
export const GalleryImages: GalleryImages[] = [
  { id: 1, image: "/img/gallery1.jpg", width: 500, height: 756 },
  { id: 2, image: "/img/gallery2.jpg", width: 504, height: 756 },
  { id: 3, image: "/img/gallery3.jpg", width: 504, height: 756 },
  { id: 4, image: "/img/gallery4.jpg", width: 504, height: 756 },
  { id: 5, image: "/img/gallery5.jpg", width: 504, height: 756 },
  { id: 6, image: "/img/gallery6.jpg", width: 504, height: 756 },
  { id: 7, image: "/img/gallery7.jpg", width: 756, height: 504 },
  { id: 8, image: "/img/gallery8.jpg", width: 756, height: 504 },
  { id: 9, image: "/img/gallery9.jpg", width: 756, height: 476 },
  { id: 10, image: "/img/gallery10.jpg", width: 756, height: 504 },
  { id: 11, image: "/img/gallery11.jpg", width: 756, height: 504 },
  { id: 12, image: "/img/gallery12.jpg", width: 756, height: 504 },
  { id: 13, image: "/img/gallery13.jpg", width: 756, height: 504 },
  { id: 14, image: "/img/gallery14.jpg", width: 756, height: 504 },
  { id: 15, image: "/img/gallery15.jpg", width: 756, height: 504 },
];

// THE TRAINING PLANS DATA IN THE PLANS PAGE
export const plans: Plans[] = [
  {
    id: 1,
    name: "Monthly Plan",
    description1: "Discounted one time joining fee- N18,896.",
    description2: "Total Fee For New Member - N57,881",
    price: "N38,985",
    features: [
      { id: 1, feature: " 5% off when you pay online.", available: true },
      { id: 2, feature: "All Day Access", available: true },
      { id: 3, feature: "40+ Free Group Classes", available: true },
      { id: 4, feature: "40+ Free Group Classes", available: false },
      {
        id: 5,
        feature:
          "Minimum of 5 days and maximum of 20 days Freeze Subscription Request.",
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: "Quarterly Plan",
    description1: "Discounted one time joining fee - N18,896.",
    description2: "Total Fee For New Member - N117,851",
    price: "N98,955",
    features: [
      { id: 1, feature: " 5% off when you pay online.", available: true },
      { id: 2, feature: "All Day Access", available: true },
      { id: 3, feature: "40+ Free Group Classes", available: true },
      { id: 4, feature: "40+ Free Group Classes", available: true },
      {
        id: 5,
        feature:
          "Minimum of 5 days and maximum of 20 days Freeze Subscription Request.",
        available: true,
      },
    ],
  },
  {
    id: 3,
    name: "Yearly Plan",
    description1: "Discounted one time joining fee - N18,896.",
    description2: "Total Fee For New Member - N396,716.",
    price: "N377,820",
    features: [
      { id: 1, feature: " 5% off when you pay online.", available: true },
      { id: 2, feature: "All Day Access", available: true },
      { id: 3, feature: "40+ Free Group Classes", available: true },
      { id: 4, feature: "40+ Free Group Classes", available: true },
      {
        id: 5,
        feature:
          "Minimum of 5 days and maximum of 20 days Freeze Subscription Request.",
        available: true,
      },
    ],
  },
];

// DATA OF FITNESS TRAINERS
export const trainers: Trainers[] = [
  {
    id: 1,
    image: "/img/trainer1.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: "/img/trainer2.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "Daniel Craige",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: "/img/trainer3.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "Micheal L. Whyte",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: "/img/trainer4.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "Bobby L. Lashley",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: "/img/trainer5.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: "/img/trainer6.jpg",
    imageWidth: 900,
    ImageHeight: 900,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
