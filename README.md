# RedDot IT Training Institute Website

A modern, responsive website for RedDot IT Training Institute built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Course Showcase**: Interactive course cards with detailed information
- **Placement Partners**: Auto-scrolling company logos
- **Success Stories**: Testimonial carousel with student achievements
- **Contact Form**: Firebase-integrated OTP verification
- **Performance Optimized**: Fast loading with optimized assets

## Firebase OTP Integration

This project includes Firebase Authentication for OTP verification:

### Setup Instructions

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication service
   - Enable Phone authentication provider

2. **Configure Firebase**:
   - Copy your Firebase config from Project Settings
   - Update `src/config/firebase.ts` with your credentials:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

3. **Domain Authorization**:
   - Add your domain to Firebase Auth authorized domains
   - For development: `localhost`
   - For production: your actual domain

### OTP Service Features

- **Real OTP Sending**: Sends actual SMS via Firebase
- **Phone Verification**: Verifies Indian phone numbers (+91)
- **reCAPTCHA Integration**: Invisible reCAPTCHA for security
- **Error Handling**: Comprehensive error messages
- **Loading States**: User-friendly loading indicators

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Firebase Auth
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## Getting Started

1. **Install Dependencies**:
```bash
npm install
```

2. **Configure Firebase**:
   - Update Firebase config in `src/config/firebase.ts`

3. **Start Development Server**:
```bash
npm run dev
```

4. **Build for Production**:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
├── config/             # Firebase configuration
├── services/           # OTP and other services
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── styles/             # Global styles
```

## Environment Variables

Create a `.env` file for sensitive Firebase config:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## Deployment

The project is ready for deployment on:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.