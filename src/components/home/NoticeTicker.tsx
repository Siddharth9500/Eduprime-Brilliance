import { Bell, AlertCircle } from "lucide-react";
import { announcements } from "@/data/siteData";

const NoticeTicker = () => {
  // Duplicate announcements for seamless loop
  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <section className="bg-navy py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          {/* Label */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gold rounded-lg shrink-0">
            <Bell className="h-4 w-4 text-navy-dark" />
            <span className="text-sm font-semibold text-navy-dark hidden sm:inline">Latest News</span>
          </div>

          {/* Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 animate-ticker">
              {duplicatedAnnouncements.map((announcement, index) => (
                <div key={`${announcement.id}-${index}`} className="flex items-center gap-3 shrink-0">
                  {announcement.urgent && (
                    <AlertCircle className="h-4 w-4 text-gold shrink-0" />
                  )}
                  <span className="text-primary-foreground whitespace-nowrap">
                    {announcement.title}
                  </span>
                  <span className="text-primary-foreground/50 text-sm whitespace-nowrap">
                    {announcement.date}
                  </span>
                  <span className="text-gold">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeTicker;
