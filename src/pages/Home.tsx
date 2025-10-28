import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Shield,
  CheckCircle,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import drMouryaImg from "@/assets/dr-mourya.jpg";
import consultationImg from "@/assets/consultation.jpg";
import gastroIcon from "@/assets/gastro-icon.jpg";
import liverIcon from "@/assets/liver-icon.jpg";

const Home = () => {
  const specialties = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Gastroenterology",
      description: "Expert care for digestive system disorders",
      conditions: ["एसिडिटी और गैस", "कब्ज़ और दस्त", "पेट दर्द"],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hepatology",
      description: "Specialized liver disease treatment",
      conditions: ["फैटी लीवर", "पीलिया", "हेपेटाइटिस"],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Endoscopy",
      description: "Advanced diagnostic procedures",
      conditions: ["कोलोनोस्कोपी", "गैस्ट्रोस्कोपी", "ERCP"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Care",
      description: "Comprehensive health screening",
      conditions: ["स्वास्थ्य जांच", "रोकथाम परामर्श", "आहार मार्गदर्शन"],
    },
  ];

  const features = [
    { icon: <CheckCircle />, text: "15+ Years Experience" },
    { icon: <CheckCircle />, text: "Advanced Diagnostic Equipment" },
    { icon: <CheckCircle />, text: "Personalized Treatment Plans" },
    { icon: <CheckCircle />, text: "Bilingual Consultation (Hindi/English)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Consultant Gastroenterologist
              </div>
              
              <h1 className="heading-xl">
                Dr. Mithilesh Mourya
              </h1>
              
              <p className="text-2xl md:text-3xl font-bold text-primary">
                छोटी सी गैस या पेट दर्द भी हो सकती है<br />
                बड़ी बीमारी का संकेत!
              </p>
              
              <p className="text-para">
                Expert care for all digestive and liver disorders at Gomti Hospital, Jaunpur. 
                Get personalized treatment from an experienced gastroenterologist.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="btn-accent text-lg px-10 py-6">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment Now
                  </Button>
                </Link>
                <a href="https://wa.me/919793502527" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-outline text-lg px-10 py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp: 097935 02527
                  </Button>
                </a>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={drMouryaImg}
                  alt="Dr. Mithilesh Mourya"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Gomti Hospital, Jaunpur
                  </p>
                  <p className="text-white/90 text-sm">
                    Advanced Gastroenterology & Liver Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Specialties</h2>
            <p className="text-para max-w-2xl mx-auto">
              Comprehensive care for all gastroenterology and liver conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="card-medical border-none h-full hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold">{specialty.title}</h3>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  <ul className="space-y-2">
                    {specialty.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm">
                        • {condition}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="btn-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={consultationImg}
                alt="Medical Consultation"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="heading-lg">
                Expert Gastroenterology Care in Jaunpur
              </h2>
              
              <p className="text-para">
                Dr. Mithilesh Mourya is a highly experienced Consultant Gastroenterologist 
                dedicated to providing world-class digestive and liver care to patients in 
                Jaunpur and surrounding areas.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Diagnosis</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced endoscopy and diagnostic procedures
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Treatment</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored care plans for each patient's unique needs
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Patient-Centered Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Compassionate care with clear communication
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button className="btn-primary">
                  Learn More About Dr. Mourya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">
            Ready to Take Control of Your Digestive Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your consultation with Dr. Mithilesh Mourya today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Button>
            </Link>
            <a href="tel:09793502527">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
