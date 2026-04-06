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
		children: "Our game is suitable for all ages. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly.",
		security: "We take reasonable measures to protect your personal information, including using secure servers and encryption. However, no method of transmission over the Internet is completely secure.",
		usage: [
		  "To create and manage your account.",
		  "To provide personalized game features.",
		  "To communicate important updates or respond to your inquiries.",
		  "To comply with legal obligations.",
		]
	}
];
