import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { upcomingEvents, studentClubs } from "@/data/siteData";
import { Calendar, Users, Bot, MessageSquare, Leaf, Theater, Music, Camera } from "lucide-react";

const clubIconMap = {
  Bot,
  MessageSquare,
  Leaf,
  Theater,
  Music,
  Camera,
};

const CampusLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Beyond Academics</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Campus Life
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Where learning extends beyond the classroom through events, clubs, and community
            </p>
          </div>
        </section>

        {/* Events Calendar */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">What's Happening</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Upcoming Events
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Date Box */}
                  <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-xl flex flex-col items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <span className="text-gold group-hover:text-navy-dark font-bold text-2xl font-display transition-colors">
                      {event.date.split(' ')[1].replace(',', '')}
                    </span>
                    <span className="text-primary-foreground/70 group-hover:text-navy-dark/70 text-xs uppercase transition-colors">
                      {event.date.split(' ')[0]}
                    </span>
                  </div>

                  {/* Event Info */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-gold/10 text-gold rounded text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Get Involved</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Student Clubs
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {studentClubs.map((club, index) => {
                const Icon = clubIconMap[club.icon as keyof typeof clubIconMap];
                return (
                  <div
                    key={club.id}
                    className="group bg-card p-6 rounded-2xl border border-border hover:border-gold/30 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                        <Icon className="h-7 w-7 text-gold group-hover:text-navy-dark transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          {club.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {club.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gold">
                          <Users className="h-4 w-4" />
                          <span>{club.members} members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CampusLife;
