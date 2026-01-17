import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Clock } from "lucide-react";
import { siteInfo } from "@/data/siteData";

// Data for easy admin panel integration
const businessHours = [
  { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const centerLocations = [
  { 
    name: "Main Campus", 
    address: "123 Academic Avenue, Education City, EC 12345",
    mapLink: "#"
  },
];

const socialLinks = [
  { icon: Facebook, href: siteInfo.socialLinks.facebook, color: "bg-blue-600" },
  { icon: Twitter, href: siteInfo.socialLinks.twitter, color: "bg-sky-500" },
  { icon: Instagram, href: siteInfo.socialLinks.instagram, color: "bg-pink-600" },
  { icon: Linkedin, href: siteInfo.socialLinks.linkedin, color: "bg-blue-700" },
  { icon: Youtube, href: siteInfo.socialLinks.youtube, color: "bg-red-600" },
];

const Footer = () => {
  return (
    <footer className="bg-olive relative">
      {/* Children Illustration Decoration */}
      <div className="bg-olive border-b border-cream/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3 sm:gap-6 lg:gap-8 py-3 sm:py-4 text-2xl sm:text-3xl lg:text-4xl opacity-80 flex-wrap">
            <span>👧</span>
            <span>👦</span>
            <span className="hidden sm:inline">🎒</span>
            <span>👧</span>
            <span>📚</span>
            <span className="hidden sm:inline">👦</span>
            <span>✏️</span>
            <span className="hidden md:inline">👧</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand & Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-mustard rounded-xl">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-olive" />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold text-cream">{siteInfo.name}</span>
                <p className="text-xs text-cream/60">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Nurturing young minds and building character since 2000. Join our community of learners and leaders.
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-mustard mb-4 sm:mb-6 flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              Business Hours
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {businessHours.map((item, index) => (
                <li key={index} className="flex justify-between text-xs sm:text-sm gap-2">
                  <span className="text-cream/70">{item.day}</span>
                  <span className="text-cream font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Locations */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-mustard mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              Our Location
            </h4>
            {centerLocations.map((location, index) => (
              <div key={index} className="mb-4">
                <p className="text-cream font-medium text-xs sm:text-sm">{location.name}</p>
                <p className="text-cream/70 text-xs sm:text-sm mt-1">{location.address}</p>
                <a href={location.mapLink} className="text-mustard text-xs sm:text-sm hover:underline inline-flex items-center gap-1 mt-2">
                  View on Map →
                </a>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-4 text-cream/70 text-xs sm:text-sm">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-mustard" />
              {siteInfo.phone}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Social Links */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-cream/50 text-center sm:text-left">
              © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} p-2 sm:p-2.5 rounded-full text-white hover:opacity-80 transition-opacity`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
