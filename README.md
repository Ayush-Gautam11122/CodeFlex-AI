CodeFlex AI 🏋️‍♂️🤖

AI-powered fitness & diet coach that uses a voice conversation to generate personalized workout and nutrition plans.

CodeFlex AI is a full-stack web application built with Next.js that combines AI-generated fitness planning, voice interaction, authentication, and persistent user profiles. Users can speak with the CodeFlex AI fitness coach, provide their fitness information and goals, and receive personalized workout and diet plans that are stored in their profile.

✨ Features

🎙️ AI Voice Fitness Coach — Have a voice conversation with CodeFlex AI to provide fitness information and goals.

🤖 AI-Generated Workout Plans — Generates structured workout schedules and exercise routines based on user inputs.

🥗 Personalized Diet Plans — Generates daily calorie targets and meal recommendations while considering dietary restrictions.

👤 User Authentication — Secure sign-in and sign-up using Clerk.

💾 Persistent User Data — Stores users and generated fitness plans using Convex.

📋 Fitness Plan History — View previously generated plans from the profile section.

🔄 Active Plan Management — Automatically marks the newly generated plan as active for the user.

📊 Interactive Plan Dashboard — Workout and diet plans are presented through tabs, cards, accordions, and responsive UI components.

⚡ Real-Time Backend — Uses Convex queries and mutations for application data.

🎨 Modern Responsive UI — Built with Tailwind CSS, shadcn/ui-style components, and Lucide icons.

🔐 Protected Routes — /generate-program and /profile require authentication.

🧠 How It Works

User
  │
  ▼
Sign in / Sign up
  │
  ▼
AI Voice Conversation
  │
  ├── Fitness information
  ├── Fitness goal
  ├── Fitness level
  ├── Workout availability
  ├── Injuries / limitations
  └── Dietary restrictions
  │
  ▼
Vapi Voice API
  │
  ▼
Convex HTTP Endpoint
  │
  ├── Google Gemini → Workout Plan
  └── Google Gemini → Diet Plan
  │
  ▼
Validation & Schema Processing
  │
  ▼
Convex Database
  │
  ▼
Personalized Profile
  ├── Workout Plan
  └── Diet Plan

🛠️ Tech Stack

Frontend

Next.js 16

React 19

TypeScript

Tailwind CSS

shadcn/ui

Lucide React

AI & Voice

Google Generative AI / Gemini

Vapi AI Web SDK

Backend & Database

Convex

Convex Queries & Mutations

Convex HTTP Actions

Authentication

Clerk

Clerk Webhooks

Svix webhook verification

Development Tools

pnpm / npm

ESLint

TypeScript

📂 Project Structure

CODEFLEX/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── generate-program/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── ui/
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── tabs.tsx
│
├── convex/
│   ├── auth.config.ts
│   ├── http.ts
│   ├── plans.ts
│   ├── schema.ts
│   └── users.ts
│
├── lib/
│   ├── middleware.ts
│   ├── vapi.ts
│   └── src/
│       └── providers/
│
├── public/
│   ├── ai-avatar.png
│   ├── hero-ai.png
│   ├── hero-ai2.png
│   └── hero-ai3.png
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

⚙️ Getting Started

1. Clone the repository

git clone https://github.com/Ayush-Gautam11122/CodeFlex-AI.git
cd CodeFlex-AI/CODEFLEX

2. Install dependencies

Using pnpm:

pnpm install

Or using npm:

npm install

3. Configure environment variables

Create a .env.local file in the CODEFLEX directory.

The application expects the following environment variables based on the project configuration:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_VAPI_KEY=
NEXT_PUBLIC_VAPI_APP_ID=

GEMINI_API_KEY=
CLERK_WEBHOOK_SECRET=

Important: Never commit real API keys, webhook secrets, or other credentials to GitHub.

4. Configure Clerk

Create a Clerk application and add the required Clerk credentials to .env.local.

The application uses Clerk for:

User registration

User login

User identity

Protected routes

User profile information

Webhook-based user synchronization

The application protects:

/generate-program
/profile

5. Configure Convex

Set up a Convex project and configure:

NEXT_PUBLIC_CONVEX_URL=

The Convex backend contains:

users table

plans table

User synchronization mutations

Fitness plan creation

User plan queries

6. Configure Vapi

Add your Vapi credentials:

NEXT_PUBLIC_VAPI_KEY=
NEXT_PUBLIC_VAPI_APP_ID=

Vapi is used for the AI voice conversation that collects the information required to generate the fitness program.

7. Configure Gemini

Add your Google Generative AI key:

GEMINI_API_KEY=

The backend uses Gemini to generate:

Workout plans

Diet plans

The generated responses are validated before being stored in Convex.

8. Start the development server

pnpm dev

Or:

npm run dev

Open:

http://localhost:3000

📱 Application Flow

Home Page

The landing page introduces CodeFlex AI and provides an entry point to create a personalized fitness program.

Generate Program

The user starts an AI voice conversation with the CodeFlex fitness coach.

The application collects information such as:

Age

Height

Weight

Injuries or limitations

Fitness goal

Workout days

Fitness level

Dietary restrictions

The backend then generates a workout plan and diet plan.

Profile

The generated plans are displayed in the user's profile.

Users can switch between:

Workout Plan

Diet Plan

Workout plans display schedules, exercises, sets, reps, and descriptions where available.

Diet plans display daily calorie targets and meals with recommended foods.

🗄️ Data Model

Users

The users table stores:

name
email
image
clerkId

Plans

The plans table stores:

userId
name
workoutPlan
dietPlan
isActive

The workout plan contains a schedule and exercise routines.

The diet plan contains a daily calorie target and meals.

🔌 API / Backend Endpoints

Clerk Webhook

POST /clerk-webhook

Used to synchronize Clerk user creation and updates with Convex.

Generate Fitness Program

POST /vapi/generate-program

Receives fitness-related user information, generates workout and diet plans using Gemini, validates the AI response, and stores the resulting plan in Convex.

🔒 Security

The project includes several security-related mechanisms:

Clerk authentication

Protected application routes

Clerk webhook signature verification through Svix

Environment variables for secrets

Convex-backed user and plan data

Input/output validation for generated fitness plans

Do not expose your secret keys in source code or commit .env.local to the repository.

🚀 Production Build

Create a production build with:

pnpm build

Then start the production server:

pnpm start

☁️ Deployment

The project can be deployed using a Next.js-compatible hosting platform such as Vercel.

Before deployment, make sure all required environment variables are configured in the hosting platform and that Clerk, Convex, Vapi, Gemini, and webhook settings point to the production environment.

🔮 Future Improvements

Potential improvements for future versions include:

📈 Fitness progress tracking

📊 Workout and nutrition analytics

🔔 Workout and meal reminders

🏆 Achievement and streak system

📝 User feedback on generated plans

🔄 AI-powered plan adjustments based on progress

📱 Improved mobile experience

🧑‍⚕️ Professional review workflow for generated plans

🌍 More dietary and regional meal options

⚠️ Disclaimer

CodeFlex AI is a software project for generating personalized fitness and nutrition suggestions. AI-generated plans should not be treated as medical advice. Users with injuries, medical conditions, or specific health concerns should consult a qualified healthcare professional before following a new exercise or nutrition program.

👨‍💻 Author

Ayush Gautam

GitHub: Ayush-Gautam11122

Project: CodeFlex-AI

📄 License

This project does not currently specify a license in the repository. If you plan to make the project open source, add an appropriate LICENSE file and update this section accordingly.

⭐ If you find this project useful, consider giving the repository a star!
