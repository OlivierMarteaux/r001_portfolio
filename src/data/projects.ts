export interface PolicyItem {
  name: string; // The display name of the policy
  url: string;  // The link to the policy page or file
}

export interface EarlyAccessItem {
	googleGroupUrl: string;
	googlePlayUrl: string;
}

export interface Project {
  id: string; // unique identifier for route
  cardTitle: string;
  cardDescription: string;
  cardSkills: string;
  title: string;
  description: string;
  github?: string;
  demo?: string;
  features: string[];
  techStack: { [key: string]: string };
  gameUrl?: string;
  policy?: PolicyItem[]; // Optional array of policies
  earlyAccess?: EarlyAccessItem;
}


export const projects: Project[] = [

	{
		id: "a056_brickbreaker",
		cardTitle: "BrickBreaker - A brick breaking Android Game",
		cardSkills: "Kotlin • Jetpack Compose • Canvas • Firebase",
		cardDescription: "Developed a modern version of the classic Brick Breaker arcade game entirely in Jetpack Compose. Implemented dynamic brick grid generation, smooth paddle control, and ball physics with collision detection. Built custom visuals with gradients, shadows, and glow effects using the Compose Canvas API. Managed real-time game state and rendering efficiently with mutableStateOf and functional grid mapping. Focused on scalable, modular architecture separating game elements and logic. Applied Kotlin best practices for state-driven UI, functional programming, and clean code. Demonstrated ability to implement interactive gameplay, manual physics, and high-quality graphics in a production-like Android project.",
		demo: "/assets/A056_BrickBreaker.mp4",
		title: "📱 BrickBreaker - A brick breaking Android Game",
		description: "A modern Brick Breaker game built with Kotlin and Jetpack Compose. Destroy all the bricks, keep the ball in play, and beat your high score!"
		,
		features: [
		  "🕹️ Classic brick breaker gameplay",
		  "🎯 Persistent Score tracking hosted on Firebase Firestore",
		  "🧱 Brick collision detection",
		  "🏓 Paddle movement controls",
		  "💥 Ball physics & bounce logic",
		  "⚡ Built Kotlin and Jetpack Compose"
		],
		techStack: {
			"Language": "Kotlin",
			"UI": "Jetpack Compose, Material 3",
			"Architecture": "MVVM, ViewModel, State Management",
			"Navigation": "Jetpack Navigation Compose",
			"Authentication": "Firebase Authentication, Google Credential",
			"Backend": "Firebase Firestore",
			"Crash Analysis": "Firebase CrashLytics",
			"Background Work": "Kotlin Coroutines, Flows",
			"Dependency Injection": "Dagger/Hilt",
			"Build": "Gradle (KTS)",
			"Continuous Delivery": "Firebase App Distribution, GitHub Action"
		},
		policy: [
			{ name: "Privacy Policy", url: "/projects/${project.id}/privacy-policy" },
		],
		earlyAccess:{
			googleGroupUrl: "https://groups.google.com/g/brickbreaker-test",
			googlePlayUrl: "https://play.google.com/store/apps/details?id=com.oliviermarteaux.a056_bricksbreaker",
		}
	},

	{
		id: "brickbreaker",
		cardTitle: "Brick Breaker - A brick breaking web app game",
		cardSkills: "React • Vite • Tailwind CSS • Firebase",
		cardDescription: "Developed the BrickBreaker web game as a responsive single-page application with React and Vite. Implemented Firebase Authentication to allow players to create accounts or play as guests, and built a ranking system to store and display high scores persistently. Designed modular and interactive gameplay, including paddle and ball physics, brick collision detection, and real-time game timers. Focused on responsive UI for desktop and mobile, managing state through React hooks and context. Hosted the application using Firebase Hosting, ensuring fast load times and smooth user experience. Applied clean code practices, component reusability, and asynchronous state handling to create a production-ready web game.",
		github: "https://github.com/OlivierMarteaux/r002_first_brick_breaker.git",
		demo: "/assets/r002_first_brick_breaker.mp4",
		title: "📱 Brick Breaker - A brick breaking web app game",
		description: "A modern Brick Breaker game built with React + Vite. Destroy all the bricks, keep the ball in play, and beat your high score!"
		,
		features: [
		  "🕹️ Classic brick breaker gameplay",
		  "🎯 Persistent Score tracking hosted on Firebase Firestore",
		  "🧱 Brick collision detection",
		  "🏓 Paddle movement controls",
		  "💥 Ball physics & bounce logic",
		  "❤️ Lives system",
		  "🔁 Game reset functionality",
		  "⚡ Built with Vite for fast development"
		],
		techStack: {
		  "Frontend": "React / Vite / Tailwind CSS",
		  "Backend": "Firebase Firestore",
		  "Authentication": "Firebase Authentication",
		  "Hosting": "Firebase Hosting",
		},
		gameUrl: "https://brickbreaker.oliviermarteaux.dev"
	},

	{
		id: "tajmahal",
		cardTitle: "Taj Mahal – Restaurant Rating Android App",
		cardSkills: "Android • Java • MVVM • LiveData",
		cardDescription: "Developed a user rating feature for the Taj Mahal restaurant showcase app based on a provided starter project. Built a new screen to allow users to rate the restaurant with comments and star scores, storing reviews persistently. Enhanced the main screen by integrating a dynamic average rating view. Focused on modular UI with responsive design. Used Java, Android SDK, ViewModel, and LiveData for architecture and data persistence, managing dependency injection through Dagger/Hilt. Applied best practices in activity lifecycle, UI separation, and user input validation. Demonstrated autonomy and clean code practices in a production-like context.",
		github: "https://github.com/OlivierMarteaux/A039_TajMahal.git",
		demo: "/assets/A039_TajMahal.mp4",
		title: "📱 Taj Mahal – Restaurant Review Android App",
		description: "Taj Mahal is a modern Android application developed in Java, enabling users to explore restaurant details and post reviews. Built as part of a professional training program at OpenClassrooms, it demonstrates key Android concepts including MVVM architecture, custom UI components, simulated data API, and Jetpack ViewModel."
		,
		features: [
		  "🏛️ Display restaurant details (name, description, photo)",
		  "⭐ View and submit reviews with star ratings and comments",
		  "📶 Data retrieved via a fake API layer simulating network interaction",
		  "🔁 Uses MVVM architecture for separation of concerns",
		  "🧪 Includes instrumented tests for critical UI flows"
		],
		techStack: {
		  "Language": "Java",
		  "UI": "Fragments, RecyclerView, ViewModel",
		  "Architecture": "MVVM",
		  "API": "Simulated with RestaurantFakeApi",
		  "Dependency Injection": "Dagger/Hilt",
		  "Testing": "JUnit, Espresso",
		  "Build": "Gradle (KTS)"
		},
	},
  
	{
		id: "vitesse",
		cardTitle: "Vitesse - Candidate Management Android App",
		cardSkills: "Android • Kotlin • MVVM • Jetpack Compose • Room • Retrofit • Coil • RESTful API",
		cardDescription: "Developed an Android app to manage job applicants using Kotlin, Jetpack Compose, and MVVM architecture. The app supports adding, editing, deleting, and favoriting candidates, with real-time currency conversion via a REST API. Integrated system features like calls, SMS, and email using intents and permission handling. UI state is managed with sealed classes and Flows for reactive updates. Emphasized user feedback through Snackbars and alerts. Wrote unit tests for core logic using JUnit and Mockito. This project highlights my ability to deliver a full-featured mobile experience with clean code and modern Android practices.",
		github: "https://github.com/OlivierMarteaux/A047_Vitesse.git",
		demo: "/assets/A047_Vitesse.mp4",
		title: "📱 Vitesse – Candidate Management Android App",
		description: "Vitesse is a Kotlin/Jetpack Compose Android application designed to streamline candidate management for recruiters. It provides functionalities for viewing, filtering, adding, editing, and favoriting candidate profiles, with live salary conversion and offline persistence. Developed as part of a professional transition into mobile development, it showcases modern MVVM architecture, responsive Material 3 design, and clean code principles.",
		features: [
			"👥 View, add, edit, and delete candidate profiles",
			"📸 Attach photos from device gallery",
			"⭐ Favorite/unfavorite candidates",
			"🔍 Search bar with live filtering",
			"💱 Live salary conversion using API",
			"⚠️ Alert and confirmation dialogs",
			"💾 Persistent offline data handling",
			"🎨 Modern Material 3 UI",
			"✅ Full offline access to saved data"
		],
		techStack: {
			"Language": "Kotlin",
			"UI": "Jetpack Compose, Material 3",
			"Architecture": "MVVM, ViewModel, State Management",
			"Navigation": "Jetpack Navigation Compose",
			"Data Storage": "Room Database",
			"Background Work": "Kotlin Coroutines, Flows",
			"Image Handling": "URI-based storage in internal memory",
			"Permissions": "Runtime management (calls, storage)",
			"Logging": "Custom logger with debug mode",
			"Build": "Gradle (KTS)"
		},
	},
  
	{
		id: "joiefull",
		cardTitle: "Joiefull - Clothing Shop Android App",
		cardSkills: "Android • Kotlin • MVVM • Jetpack Compose • GooglePay • Stripe • Ktor • Coil • RESTful API • Jetpack Adaptive Layout • Talkback • Render",
		cardDescription: "Developed Joiefull, a clothing showcase Android application built with a modern MVVM architecture to ensure scalability and production readiness. Designed adaptive layouts optimized for phones, tablets, and foldables using responsive Jetpack Compose principles to deliver a seamless cross-device experience. Implemented an accessibility-first strategy with full TalkBack support, semantic descriptions, state announcements, and custom accessibility actions to guarantee inclusive usability. Connected the app to a custom RESTful Clothes API backend hosted on Render.com, enabling reliable catalog delivery, structured network handling, and an online-first reactive UI. Integrated secure item payments via Google Pay or credit card using Stripe. Built with Kotlin, Coroutines, and modern Android best practices, emphasizing clean architecture, separation of concerns, and high code quality.",
		github: "https://github.com/OlivierMarteaux/A049_Joiefull.git",
		demo: "/assets/A049_Joiefull_2.0.0.mp4",
		title: "📱 Joiefull – Clothing Shop Android App",
		description: "Joiefull is a Kotlin/Jetpack Compose Android application developed entirely from scratch. It showcases a modern clothing catalog experience with full support for adaptive layout, accessibility, and payment feature.",
		features: [
		  "📱 Adaptive Layouts optimized for phones, tablets, and foldables",
		  "♿ Accessibility-first approach with full TalkBack support, semantic descriptions, and custom actions",
		  "🌍 Internationalization: English & French",
		  "💳 Secure item payments via Google Pay or Credit Card using Stripe",
		  "🔌 Custom Shared Android Library on Render.com",
		  "☁️ Custom RESTful Clothes API backend on Render.com"
		],
		techStack: {
		  "Language": "Kotlin",
		  "UI": "Jetpack Compose, Material 3",
		  "Architecture": "MVVM, ViewModel, State Management",
		  "Navigation": "Jetpack Navigation Compose",
		  "Data Storage": "Custom RESTFul API deployed on Render",
		  "Data Access Service": "Ktor",
		  "Background Work": "Kotlin Coroutines, Flows",
		  "Payment Handling": "GPay and Stripe",
		  "Image Handling": "URI-based storage in internal memory using Coil",
		  "Accessibility-First": "Optimized for TalkBack users",
		  "Dependency Injection": "Koin",
		  "Build": "Gradle (KTS)"
		},
	},
  
	{
		id: "hexagonalgames",
		cardTitle: "HexagonalGames - Game Players Forum Android App",
		cardSkills: "Android • Kotlin • MVVM • Jetpack Compose • Jetpack Datastore • Hilt • Coil • Firebase",
		cardDescription: "Developed Hexagonal Games, a community-driven Android application built with Kotlin, Jetpack Compose, and MVVM architecture. The app enables gamers to authenticate via Firebase, publish posts with optional images, interact through real-time comments, and receive push notifications. Applied Hilt for dependency injection, Coroutines and Flows for reactive state management, and Navigation Compose for type-safe screen routing.",
		github: "https://github.com/OlivierMarteaux/A052_HexagonalGames.git",
		demo: "/assets/A052_HexagonalGames.mp4",
		title: "📱 HexagonalGames – Gamers Community Android App",
		description: "HexagonalGames is a Kotlin/Jetpack Compose Android app designed for gaming communities. Users can authenticate, share posts, comment in real-time, and receive push notifications. Built with MVVM architecture, Firebase integration, and a fully adaptive Material 3 UI, the project demonstrates scalable app design, modularity, and modern Android best practices.",
		features: [
			"👤 User Authentication via Firebase Auth",
			"🏠 Home feed displaying posts dynamically",
			"➕ Add and publish posts with optional images",
			"💬 Comment and interact in real-time",
			"⚙️ Settings & profile management",
			"🔔 Push notifications via Firebase Messaging",
			"🧭 Type-safe declarative navigation",
			"🌙 Adaptive Material 3 UI with animations"
		],
		techStack: {
			"Language": "Kotlin",
			"UI": "Jetpack Compose, Material 3",
			"Architecture": "MVVM, ViewModel, State Management",
			"Navigation": "Jetpack Navigation Compose",
			"Authentication": "Firebase Auth",
			"Backend Storage": "Firebase Firestore & Storage",
			"Push Notifications": "Firebase Cloud Messaging",
			"Crash Analysis": "Firebase CrashLytics",
			"Background Work": "Kotlin Coroutines, Flows",
			"Image Handling": "URI-based storage in internal memory using Coil",
			"Dependency Injection": "Dagger/Hilt",
			"Build": "Gradle (KTS)",
			"Testing": "JUnit4, MockK, Turbine"
		},
	},
  
	{
		id: "eventorias",
		cardTitle: "Eventorias - Special Events Management Android App",
		cardSkills: "Android • Kotlin • MVVM • Jetpack Compose • Jetpack Datastore • Hilt • Coil • Firebase • CameraX • GoogleMaps • SonarQube CI • Firebase App Distribution CD",
		cardDescription: "Developed Eventorias, a community-driven special events management Android application using Kotlin, Jetpack Compose, and MVVM. Integrated Firebase Authentication, Firestore, Cloud Messaging, and Storage to manage secure login, dynamic event feeds, media uploads, and push notifications. Implemented CameraX, Google Maps API, and adaptive Material 3 UI. Applied continuous integration with SonarQube and automated testing with JUnit4, MockK, Espresso, Cucumber, and Jacoco.",
		github: "https://github.com/OlivierMarteaux/A054_Eventorias.git",
		demo: "/assets/A054_Eventorias.mp4",
		title: "📱 Eventorias – Community Special Events Android App",
		description: "Eventorias is an Android app for managing and sharing special events. Users can authenticate, browse, and post events dynamically with media attachments, view maps, and receive notifications. Built with Kotlin, Jetpack Compose, Firebase services, and CameraX, the app demonstrates clean MVVM architecture, modularity, and production-ready Android best practices.",
		features: [
			"👤 User Authentication via Firebase Auth",
			"🏠 Special Events feed dynamically updated",
			"➕ Add and publish event posts",
			"⚙️ Settings & profile management",
			"🔔 Push notifications via Firebase Messaging",
			"🧭 Type-safe navigation with Jetpack Compose",
			"🌙 Adaptive Material 3 UI with animations",
			"📸 Image capture with CameraX",
			"🗺️ Static map display via GoogleMaps API"
		],
		techStack: {
			"Language": "Kotlin",
			"UI": "Jetpack Compose, Material 3",
			"Architecture": "MVVM, ViewModel, State Management",
			"Navigation": "Jetpack Navigation Compose",
			"Authentication": "Firebase Auth, Google Credential",
			"Backend Storage": "Firebase Firestore & Storage",
			"Push Notifications": "Firebase Cloud Messaging & Preferences DataStore",
			"Crash Analysis": "Firebase CrashLytics",
			"Background Work": "Kotlin Coroutines, Flows",
			"Image Handling": "URI-based storage in internal memory using Coil",
			"Image Capture": "CameraX",
			"Static Map Display": "GoogleMaps API",
			"Dependency Injection": "Dagger/Hilt",
			"Build": "Gradle (KTS)",
			"Testing": "JUnit4, MockK, Espresso, Cucumber, Jacoco",
			"Continuous Integration": "SonarQube, GitHub Action",
			"Continuous Delivery": "Firebase App Distribution, GitHub Action"
		},
	},
  
];
