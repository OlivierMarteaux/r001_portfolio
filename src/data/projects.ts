import { ReactNode } from "react";

export interface Project {
  id: string; // unique identifier for route
  cardTitle: string;
  cardDescription: string;
  cardSkills: string;
  title: string;
  description: ReactNode;
  github?: string;
  demo?: string;
  features: string[];
  techStack: { [key: string]: string };
}


export const projects: Project[] = [
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
		cardTitle: "Joiefull - Clothing Catalog Android App",
		cardSkills: "Android • Kotlin • MVVM • Jetpack Compose • Ktor • Coil • RESTful API • Jetpack Adaptive Layout • Talkback • Render",
		cardDescription: "Developed Joiefull, a clothing showcase Android application built with a modern MVVM architecture to ensure scalability and production readiness. Designed adaptive layouts optimized for phones, tablets, and foldables using responsive Jetpack Compose principles to deliver a seamless cross-device experience. Implemented an accessibility-first strategy with full TalkBack support, semantic descriptions, state announcements, and custom accessibility actions to guarantee inclusive usability. Connected the app to a custom RESTful Clothes API backend hosted on Render.com, enabling reliable catalog delivery, structured network handling, and an online-first reactive UI. Built with Kotlin, Coroutines, and modern Android best practices, emphasizing clean architecture, separation of concerns, and high code quality.",
		github: "https://github.com/OlivierMarteaux/A049_Joiefull.git",
		demo: "/assets/A049_Joiefull.mp4",
		title: "📱 Joiefull – Clothing Catalog Android App",
		description: "Joiefull is a Kotlin/Jetpack Compose Android application developed entirely from scratch. It showcases a modern clothing catalog experience with full support for adaptive layout, accessibility, and multilingual use.",
		features: [
		  "📱 Adaptive Layouts optimized for phones, tablets, and foldables",
		  "♿ Accessibility-first approach with full TalkBack support, semantic descriptions, and custom actions",
		  "🌍 Internationalization: English & French",
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
