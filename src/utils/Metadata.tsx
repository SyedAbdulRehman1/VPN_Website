import { Metadata } from "next"

const metadata: Array<{
    id: string,
    title: string,
    description: string
}> = [
    {
        id: "dashboard",
        title : "Dashboard",
        description : "Dashboard"
    },
    {
        id: "devices",
        title : "devices",
        description : "devices"
    },
    {
        id: "billing",
        title : "Billing",
        description : "devices"
    },
    {
        id: "home",
        title : "The best online VPN service for speed",
        description : "Take control of your digital privacy and protect your personal data with a VPN for PC. Download the VPN app for Windows 11, 10, 8 or 7."
    },
    {
        id: "features",
        title : "VirgoVPN features – more than a VPN",
        description : "Protect your digital life with VirgoVPN. Get more than just a VPN with advanced cybersecurity features that are easy to use for everyone, on every device."
    },
    {
        id: "android",
        title : "Download a risk-free VPN APK for Android",
        description : "A VPN app for your smartphone or tablet will give you a private internet connection. Encrypt your traffic and hide your IP with our risk-free VPN for Android."
    },
    {
        id: "ios",
        title : "Download the best VPN for iOS (iPhone and iPad)",
        description : "Get the fastest VPN for iPhone or iPad in a few taps. Protect your internet connection with strong encryption and stay private online, wherever you go."
    },
    {
        id: "windows",
        title : "Download a VPN for Windows PC or Laptop",
        description : "Take control of your digital privacy and protect your personal data with a VPN for PC. Download the VPN app for Windows 11, 10, 8 or 7."
    },
    {
        id: "macOS",
        title : "Download the best VPN for Mac",
        description : "VPN for Mac allows you to use the service with ease. Just download the app, run it and choose from which country you want to appear."
    },
    {
        id: "helpdesk",
        title : "Live Chat, VPN Setup, Troubleshooting",
        description : "Help Desk Virgo VPN"
    },
    {
        id: "pricing",
        title : "VPN costs: buy a VPN with card, PayPal",
        description : "Buy a VPN in just 60 seconds — it’s that easy. Find out how much VirgoVPN costs, what features you’ll get, and which plan offers the best VPN price for you."
    }
]
export function getPageMetadata(page: string): Metadata {
    const currentMeta = metadata.filter((value) => value.id == page)[0];
    return  {
        title: `${currentMeta.title} - Virgo VPN`,
        description: currentMeta.description
    } as Metadata;
}