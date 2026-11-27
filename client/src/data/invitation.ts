export const invitationData = {
  celebrant: {
    name: "Zozo",

    shortMessage: "Come celebrate another magical year with me!",
    photo: "/images/hero-pic.jpg", // placeholder child photo
  },
  event: {
    title: "Lorenzo's Birthday Ceremony",
    date: "2027-02-20",
    day: "Saturday",
    time: "1:30 PM",
    venue: "Le Parc",
    address: "Metropolitan Park along EDSA Extension, at the corner of Macapagal Boulevard, in Pasay City, Metro Manila",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Le+Parc+Pasay+City+Metro+Manila",
    fullDateDisplay: "February 20, 2027, Saturday",
  },
  program: [
    { time: "2:45 PM", activity: "Guest Arrival", icon: "users" },
    { time: "3:00 PM", activity: "Welcome & Opening", icon: "sparkles" },
    { time: "3:45 PM", activity: "Food & Snacks", icon: "utensils" },
    { time: "4:15 PM", activity: "Cake Ceremony", icon: "cake" },
    { time: "4:45 PM", activity: "Photo Session", icon: "camera" },
    { time: "5:00 PM", activity: "Party & Fun", icon: "party-popper" },
  ],
  gallery: [
  "/images/zozo1.jpg",
  "/images/zozo2.jpg",
  "/images/zozo3.jpg",
  "/images/zozo4.jpg",
  "/images/zozo5.jpg",
  "/images/zozo6.jpg",
],
  message: "However, if you wish to share a little something for our little one, monetary gifts or baby essentials would be greatly appreciated.",
  rsvpEmail: "rsvp@example.com", // placeholder
};

export type InvitationData = typeof invitationData;
