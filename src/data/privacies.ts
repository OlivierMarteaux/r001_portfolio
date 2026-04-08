export interface Privacy {
  id: string; // unique identifier for route
  title: string;
  date: string;
  description: string;
  personal: string;
  device: string;
  services: string;
  children: string;
  usage: string[];
  security: string;
  deletion: string;
}


export const privacies: Privacy[] = [

	{
		id: "a056_brickbreaker",
		title: "BrickBreaker",
		date: "April 6, 2026",
		description: "This Privacy Policy explains how we collect, use, and share information when you use our application available on Google Play.",
		personal: "We collect your name and email address when you create an account or log in to the game for authentication purposes.",
		device: "We may collect device type, OS version, unique device identifiers, and usage statistics to improve the game experience.",
		services: "We use third-party services, such as Firebase Authentication, to securely manage your account information. These services may store or process your personal information on our behalf, but we do not sell your data to third parties.",
		children: "Our application is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.",
		security: "We take reasonable measures to protect your personal information, including using secure servers. However, no method of transmission over the Internet is completely secure.",
		deletion: "You have the right to request the deletion of your account and associated personal data at any time. Upon receiving your request, we will delete your personal information (such as your name and email address) from our systems within a reasonable timeframe, unless retention is required by law.",
		usage: [
		  "To create and manage your account.",
		  "To provide personalized game features.",
		  "To communicate important updates or respond to your inquiries.",
		  "To comply with legal obligations.",
		]
	}
];
