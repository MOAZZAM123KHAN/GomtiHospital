import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import gastroIcon from "@/assets/gastro-icon.jpg";
import liverIcon from "@/assets/liver-icon.jpg";

const Services = () => {
  const gastroServices = [
    { name: "एसिडिटी और गैस", english: "Acidity & Gas" },
    { name: "कब्ज़ और दस्त", english: "Constipation & Diarrhea" },
    { name: "इरिटेबल बावल सिंड्रोम (IBS)", english: "Irritable Bowel Syndrome" },
    { name: "पेट दर्द", english: "Abdominal Pain" },
    { name: "पेट का अल्सर", english: "Stomach Ulcers" },
    { name: "पाचन समस्याएं", english: "Digestive Disorders" },
    { name: "पित्त की पथरी", english: "Gallstones" },
    { name: "अग्न्याशय में सूजन (पैंक्रियाटाइटिस)", english: "Pancreatitis" },
    { name: "पेट का कैंसर", english: "Stomach Cancer" },
    { name: "कोलाइटिस", english: "Colitis" },
  ];

  const liverServices = [
    { name: "फैटी लीवर", english: "Fatty Liver Disease" },
    { name: "पीलिया (जॉन्डिस)", english: "Jaundice" },
    { name: "हेपेटाइटिस A, B, C", english: "Hepatitis A, B, C" },
    { name: "सिरोसिस", english: "Cirrhosis" },
    { name: "लीवर फाइब्रोसिस", english: "Liver Fibrosis" },
    { name: "लीवर कैंसर", english: "Liver Cancer" },
    { name: "ऑटोइम्यून लीवर रोग", english: "Autoimmune Liver Disease" },
    { name: "अल्कोहलिक लीवर रोग", english: "Alcoholic Liver Disease" },
  ];

  const procedures = [
    {
      title: "Endoscopy (गैस्ट्रोस्कोपी)",
      description: "Upper GI endoscopy for diagnosis of esophageal, stomach, and duodenal conditions",
    },
    {
      title: "Colonoscopy (कोलोनोस्कोपी)",
      description: "Complete examination of the colon for polyps, cancer screening, and inflammatory conditions",
    },
    {
      title: "ERCP",
      description: "Endoscopic Retrograde Cholangiopancreatography for bile duct and pancreatic disorders",
    },
    {
      title: "Polypectomy",
      description: "Removal of polyps during endoscopy to prevent cancer",
    },
    {
      title: "Banding & Sclerotherapy",
      description: "Treatment for esophageal varices in liver disease patients",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Our Services & Specialties
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive gastroenterology and hepatology services for all digestive and liver conditions
          </p>
        </div>
      </section>

      {/* Gastroenterology Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticky top-24">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                  <img src={gastroIcon} alt="Gastroenterology" className="w-24 h-24 object-cover rounded-xl" />
                </div>
                <h2 className="heading-lg mb-4">Gastroenterology Services</h2>
                <p className="text-para mb-6">
                  Expert diagnosis and treatment of conditions affecting the digestive system, 
                  from the esophagus to the colon. We use advanced diagnostic techniques and 
                  evidence-based treatments.
                </p>
                <p className="text-para font-semibold text-primary">
                  पाचन तंत्र संबंधी सभी समस्याओं का विशेषज्ञ उपचार
                </p>
              </div>
            </div>

            <div>
              <Card className="card-medical">
                <CardHeader>
                  <CardTitle className="text-2xl">Conditions We Treat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {gastroServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.english}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hepatology Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Card className="card-medical">
                <CardHeader>
                  <CardTitle className="text-2xl">Liver Conditions We Treat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {liverServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.english}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <div className="inline-block p-4 bg-secondary/10 rounded-2xl mb-6">
                  <img src={liverIcon} alt="Hepatology" className="w-24 h-24 object-cover rounded-xl" />
                </div>
                <h2 className="heading-lg mb-4">Hepatology (Liver Care)</h2>
                <p className="text-para mb-6">
                  Specialized care for all liver diseases, from fatty liver to cirrhosis. 
                  We provide comprehensive management including lifestyle counseling, 
                  medical treatment, and monitoring.
                </p>
                <p className="text-para font-semibold text-secondary">
                  लीवर संबंधी सभी बीमारियों का विशेषज्ञ इलाज
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Diagnostic & Therapeutic Procedures</h2>
            <p className="text-para max-w-2xl mx-auto">
              Advanced endoscopic procedures performed with state-of-the-art equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {procedures.map((procedure, index) => (
              <Card key={index} className="card-medical">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{procedure.title}</h3>
                  <p className="text-sm text-muted-foreground">{procedure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">
            Need Expert Consultation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't ignore digestive or liver symptoms. Early diagnosis and treatment can make all the difference.
          </p>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
