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
          <div className="flex justify-center gap-8 py-4 text-4xl opacity-80">
            <span>👧</span>
            <span>👦</span>
            <span>🎒</span>
            <span>👧</span>
            <span>📚</span>
            <span>👦</span>
            <span>✏️</span>
            <span>👧</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & Logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-mustard rounded-xl">
                <GraduationCap className="h-8 w-8 text-olive" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-cream">{siteInfo.name}</span>
                <p className="text-xs text-cream/60">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Nurturing young minds and building character since 2000. Join our community of learners and leaders.
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-mustard mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Business Hours
            </h4>
            <ul className="space-y-3">
              {businessHours.map((item, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span className="text-cream/70">{item.day}</span>
                  <span className="text-cream font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Locations */}
          <div>
            <h4 className="font-serif text-lg font-bold text-mustard mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Our Location
            </h4>
            {centerLocations.map((location, index) => (
              <div key={index} className="mb-4">
                <p className="text-cream font-medium text-sm">{location.name}</p>
                <p className="text-cream/70 text-sm mt-1">{location.address}</p>
                <a href={location.mapLink} className="text-mustard text-sm hover:underline inline-flex items-center gap-1 mt-2">
                  View on Map →
                </a>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-4 text-cream/70 text-sm">
              <Phone className="h-4 w-4 text-mustard" />
              {siteInfo.phone}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Social Links */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/50">
              © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} p-2.5 rounded-full text-white hover:opacity-80 transition-opacity`}
                  >
                    <Icon className="h-4 w-4" />
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
