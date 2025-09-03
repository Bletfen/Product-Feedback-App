## Product Feedback App

This is a minimalist and fully responsive feedback application that allows users to share, manage, and engage with product ideas. Built using React and TypeScript, it includes filtering, sorting, voting, commenting, and editing features for a smooth user experience.

## Features

- Responsive layout that adapts cleanly across mobile, tablet, and desktop views.

- Create, read, update, delete (CRUD) product feedback items.

- Filter feedback by categories such as Feature, UI, UX, Enhancement, and Bug.

- Sort feedback by most/least upvotes and most/least comments.

- Upvote requests to show support.

- Add comments and nested replies, supporting community discussion.

- Form validations ensure no empty submissions for titles or descriptions.

- Radial gradient header and visually styled with Tailwind CSS for a modern feel.

- Shared context for state management, capturing categories, status, upvotes, filtering, and more.

- Clean architecture with reusable components like Input, DropDownCategory, and RoadMapCards.

- "Create" and "Edit" modes share a unified form component for consistency and code reuse.

## Technologies Used

- React with TypeScript for strong typing and component structure.

- Context API for global state management of feedback data.

- react-hook-form for elegant form handling and validation.

- React Router for client-side routing.

- Tailwind CSS for utility-first styling and responsive design.

- Functional components and hooks to handle logic clearly and concisely.

## Folder Structure (overview)

```bash
src/
├── components/
│   ├── Input.tsx
│   ├── DropDownCategory.tsx
│   ├── RoadMapCards.tsx
│   ├── EditButtons.tsx
│   └── ...
├── context/
│   └── FeedBacksContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── RoadMapPage.tsx
│   └── ManipulateFeedBack.tsx
├── data/
│   └── data.json
└── App.tsx
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Bletfen/Product-Feedback-App.git
cd Product-Feedback-App
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser to explore the app.

## What I Learned

- Putting reusability at the forefront by sharing form logic across create and edit flows.

- Cleanly managing complex UI interactions—like nested replies and vote toggles—without prop drilling, thanks to Context API.

- Creating consistent UI states across mobile and desktop views using Tailwind's responsive utilities.

- Leveraging react-hook-form for seamless validation and form state.

## Live Demo

You can check out the live deployment here:  
[Product Feedback App Live](https://product-feedback-app-dusky.vercel.app/)
