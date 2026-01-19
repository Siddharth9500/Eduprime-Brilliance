import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail } from "lucide-react";
import { databases } from "@/lib/appwrite"; // Ensure you have installed appwrite: npm install appwrite

// 🟢 YOUR ACTUAL IDS (Pre-filled)
const PROJECT_ID = '696cc73500312d213cc4'; 
const DB_ID = '696cc77f003a45278198'; 
const COLLECTION_ID = 'faculty'; 
const BUCKET_ID = '696d15640025ce6316c0'; 

const Faculty = () => {
  // 1. State to hold REAL data
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch Data from Cloud
  useEffect(() => {
    const getFaculty = async () => {
      try {
        const response = await databases.listDocuments(DB_ID, COLLECTION_ID);
        setFacultyList(response.documents);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };
    getFaculty();
  }, []);

  // 3. Helper to generate Image Link
  const getImageUrl = (fileId: string) => 
    `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Meet Our Faculty
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Dedicated educators committed to nurturing the next generation of leaders
            </p>
          </div>
        </section>

        {/* Real Data Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {loading ? (
                <div className="col-span-4 text-center text-gray-500 py-10">Loading faculty members...</div>
              ) : facultyList.length === 0 ? (
                <div className="col-span-4 text-center text-gray-500 py-10">No faculty members found. Add them in the Admin Panel.</div>
              ) : (
                facultyList.map((faculty, index) => (
                  <div
                    key={faculty.$id} // Use Appwrite ID
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Photo Logic */}
                    <div className="aspect-square bg-gradient-to-br from-navy to-navy-dark relative overflow-hidden">
                      {faculty.photoId ? (
                        <img 
                          src={getImageUrl(faculty.photoId)} 
                          alt={faculty.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-28 h-28 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl font-display text-gold font-bold">
                              {faculty.name ? faculty.name.split(' ').map((n: string) => n[0]).join('') : '?'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {faculty.name}
                      </h3>
                      <p className="text-gold text-sm font-medium mt-1">{faculty.subject}</p>
                      <p className="text-muted-foreground text-sm mt-2">{faculty.experience}</p>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                          {faculty.subject}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Teaching Family
            </h2>
            <a
              href="mailto:careers@eduprime.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-navy-dark transition-colors"
            >
              <Mail className="h-5 w-5" />
              careers@eduprime.edu
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;