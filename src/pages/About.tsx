import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Heart, Calendar } from "lucide-react";
import drMouryaImg from "@/assets/dr-mourya.jpg";
import hospitalImg from "@/assets/hospital-exterior.jpg";

const About = () => {
  const qualifications = [
    "MBBS - Bachelor of Medicine and Bachelor of Surgery",
    "MD (Medicine) - Doctor of Medicine",
    "DM (Gastroenterology) - Doctorate in Gastroenterology",
    "Fellowship in Advanced Endoscopy",
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Patients Treated",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "95%",
      label: "Patient Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl">
                Meet Dr. Mithilesh Mourya
              </h1>
              <p className="text-xl font-semibold text-primary">
                Consultant Gastroenterologist & Hepatologist
              </p>
              <p className="text-para">
                Dr. Mithilesh Mourya is a highly skilled and compassionate gastroenterologist 
                dedicated to providing exceptional care for patients with digestive and liver 
                disorders. With extensive training and years of clinical experience, he brings 
                expertise in managing complex gastrointestinal conditions.
              </p>
              <Link to="/contact">
                <Button className="btn-accent">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={drMouryaImg}
                alt="Dr. Mithilesh Mourya"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="heading-lg mb-4">Qualifications & Training</h2>
            <p className="text-para max-w-2xl mx-auto">
              Extensive medical education and specialized training in gastroenterology
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="card-medical">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg font-medium">{qual}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-medical text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="font-medium">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="card-medical bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
              <CardContent className="p-8 md:p-12">
                <h2 className="heading-md mb-6 text-center">Care Philosophy</h2>
                <div className="space-y-6 text-para">
                  <p>
                    "I believe that every patient deserves compassionate, personalized care. 
                    My approach combines the latest medical advances with a deep understanding 
                    of each patient's unique needs and concerns."
                  </p>
                  <p>
                    "पेट और लीवर की बीमारियों का सही समय पर निदान और उपचार बहुत महत्वपूर्ण है। 
                    मैं अपने हर मरीज को सम्पूर्ण और व्यक्तिगत देखभाल प्रदान करने के लिए प्रतिबद्ध हूं।"
                  </p>
                  <p>
                    Through clear communication, thorough evaluation, and evidence-based 
                    treatment, I aim to help patients achieve optimal digestive health and 
                    improve their quality of life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gomti Hospital Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg">Gomti Hospital, Jaunpur</h2>
              <p className="text-para">
                Dr. Mourya practices at Gomti Hospital, a modern healthcare facility 
                equipped with advanced diagnostic and treatment technologies. The hospital 
                provides a comfortable and professional environment for patient care.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Endoscopy Suite</h4>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art equipment for diagnostic and therapeutic procedures
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Lab Facilities</h4>
                    <p className="text-sm text-muted-foreground">
                      In-house laboratory for quick and accurate test results
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Patient-Centered Care</h4>
                    <p className="text-sm text-muted-foreground">
                      Comfortable consultation rooms and caring medical staff
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button className="btn-primary">
                  Visit Us
                </Button>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={hospitalImg}
                alt="Gomti Hospital"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">
            Experience Expert Gastroenterology Care
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your consultation with Dr. Mithilesh Mourya today
          </p>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
