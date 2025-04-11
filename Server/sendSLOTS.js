const mongoose = require("mongoose");
const Doctor = require("./models/Doctormodel"); // Ensure this path is correct
const connectDB = require("./config/db"); // Your DB connection file
const doctorsData = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    password: "hashedpassword",
    role: "doctor",
    gender: "male",
    dob: new Date("1980-05-15"),
    language: ["English", "French"],
    expertise: ["Psychotherapy", "Anxiety Treatment"],
    qualification: ["MBBS", "MD Psychiatry"],
    specialization: ["Mental Health", "Counseling"],
    price: 800,
    jobTitle: "Psychiatrist",
    img: "profile1.jpg",
    about: "Experienced psychiatrist with 15+ years in mental health care.",
    jobExperience: ["Senior Psychiatrist at ABC Hospital"],
    sessionAvailability: ["Online", "Offline"],
    experience: 15,
    address: {
      building: "Block A",
      clinicName: "MindCare Clinic",
      clinicLocation: "Downtown Street",
      area: "Central",
      city: "New York",
      state: "NY",
      pincode: 10001,
    },
    faq: [
      {
        question: "How do I book a session?",
        answer: "You can book a session via our website or call the clinic.",
      },
    ],
  },
  {
    firstname: "Sarah",
    lastname: "Smith",
    email: "sarah.smith@example.com",
    phone: "8765432109",
    password: "hashedpassword",
    role: "doctor",
    gender: "female",
    dob: new Date("1975-08-20"),
    language: ["English", "Spanish"],
    expertise: ["Family Counseling", "Depression Treatment"],
    qualification: ["MBBS", "PhD in Psychology"],
    specialization: ["Family Therapy", "Depression Management"],
    price: 700,
    jobTitle: "Counselor",
    img: "profile2.jpg",
    about: "Helping families navigate mental health challenges.",
    jobExperience: ["Head Counselor at Family Wellness Center"],
    sessionAvailability: ["Online"],
    experience: 20,
    address: {
      building: "Tower 5",
      clinicName: "Hope Counseling",
      clinicLocation: "Sunset Avenue",
      area: "West Side",
      city: "Los Angeles",
      state: "CA",
      pincode: 90001,
    },
    faq: [
      {
        question: "What is your consultation fee?",
        answer: "The consultation fee is $700 per session.",
      },
    ],
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    email: "michael.brown@example.com",
    phone: "7654321098",
    password: "hashedpassword",
    role: "doctor",
    gender: "male",
    dob: new Date("1985-02-12"),
    language: ["English", "German"],
    expertise: ["Addiction Therapy", "Cognitive Behavioral Therapy"],
    qualification: ["MBBS", "MD in Psychiatry"],
    specialization: ["Addiction Recovery", "Cognitive Therapy"],
    price: 850,
    jobTitle: "Addiction Therapist",
    img: "profile3.jpg",
    about: "Specializing in addiction recovery and cognitive therapy.",
    jobExperience: ["Addiction Specialist at Recovery Clinic"],
    sessionAvailability: ["Offline"],
    experience: 12,
    address: {
      building: "Suite 2B",
      clinicName: "Recovery & Wellness",
      clinicLocation: "Maple Road",
      area: "North District",
      city: "Chicago",
      state: "IL",
      pincode: 60601,
    },
    faq: [
      {
        question: "Do you offer group therapy?",
        answer: "Yes, we offer both individual and group therapy sessions.",
      },
    ],
  },
  {
    firstname: "Emma",
    lastname: "Wilson",
    email: "emma.wilson@example.com",
    phone: "6543210987",
    password: "hashedpassword",
    role: "doctor",
    gender: "female",
    dob: new Date("1990-09-10"),
    language: ["English"],
    expertise: ["Stress Management", "Workplace Counseling"],
    qualification: ["MS in Psychology"],
    specialization: ["Occupational Therapy", "Stress Management"],
    price: 600,
    jobTitle: "Therapist",
    img: "profile4.jpg",
    about: "Guiding professionals in stress management and mental well-being.",
    jobExperience: ["Corporate Mental Health Consultant"],
    sessionAvailability: ["Online", "Offline"],
    experience: 8,
    address: {
      building: "Suite 7A",
      clinicName: "Calm Mind Therapy",
      clinicLocation: "Greenwood Street",
      area: "Uptown",
      city: "San Francisco",
      state: "CA",
      pincode: 94101,
    },
    faq: [
      {
        question: "How can I manage work stress?",
        answer: "We offer specialized workplace counseling for stress management.",
      },
    ],
  },
  {
    firstname: "Daniel",
    lastname: "Garcia",
    email: "daniel.garcia@example.com",
    phone: "5432109876",
    password: "hashedpassword",
    role: "doctor",
    gender: "male",
    dob: new Date("1983-04-22"),
    language: ["English", "Portuguese"],
    expertise: ["Trauma Therapy", "PTSD Recovery"],
    qualification: ["MBBS", "MSc in Trauma Studies"],
    specialization: ["Trauma Recovery", "Post-Traumatic Stress Disorder"],
    price: 750,
    jobTitle: "Trauma Specialist",
    img: "profile5.jpg",
    about: "Helping individuals overcome trauma and PTSD.",
    jobExperience: ["Lead Trauma Therapist at Healing Center"],
    sessionAvailability: ["Online", "Offline"],
    experience: 14,
    address: {
      building: "Building 10",
      clinicName: "Healing & Recovery",
      clinicLocation: "Elm Street",
      area: "South City",
      city: "Houston",
      state: "TX",
      pincode: 77001,
    },
    faq: [
      {
        question: "Do you offer emergency counseling?",
        answer: "Yes, we provide emergency trauma support and crisis counseling.",
      },
    ],
  },
  {
    firstname: "Olivia",
    lastname: "Martinez",
    email: "olivia.martinez@example.com",
    phone: "4321098765",
    password: "hashedpassword",
    role: "doctor",
    gender: "female",
    dob: new Date("1992-06-18"),
    language: ["English", "French"],
    expertise: ["Child Psychology", "Parenting Guidance"],
    qualification: ["MSc in Child Psychology"],
    specialization: ["Child Development", "Parental Counseling"],
    price: 550,
    jobTitle: "Child Psychologist",
    img: "profile6.jpg",
    about: "Passionate about helping children and families thrive.",
    jobExperience: ["Pediatric Counselor at KidsWell Clinic"],
    sessionAvailability: ["Online"],
    experience: 6,
    address: {
      building: "Block 8",
      clinicName: "Happy Minds Center",
      clinicLocation: "Main Boulevard",
      area: "City Center",
      city: "Miami",
      state: "FL",
      pincode: 33101,
    },
    faq: [
      {
        question: "Do you offer therapy for children with anxiety?",
        answer: "Yes, I specialize in anxiety management for children.",
      },
    ],
  }
];

module.exports = doctorsData;

async function seedDoctors() {
  try {
    await connectDB(); // Connect to MongoDB
    
    await Doctor.deleteMany({});
    console.log("🗑️ Deleted all existing doctor records");
    // Check if doctors already exist
    const existingDoctors = await Doctor.countDocuments();
    if (existingDoctors > 0) {
      console.log("⚠️ Doctors already exist in the database. Skipping seeding.");
      return;
    }

    await Doctor.insertMany(doctorsData);
    console.log("✅ Successfully added doctors to the database!");
  } catch (error) {
    console.error("❌ Error seeding doctors:", error);
  } finally {
    mongoose.connection.close();
  }
}

// Run the function
seedDoctors();
