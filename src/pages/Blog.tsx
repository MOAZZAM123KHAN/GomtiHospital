import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "फैटी लीवर: लक्षण और रोकथाम",
      titleEnglish: "Fatty Liver: Symptoms and Prevention",
      excerpt: "फैटी लीवर एक आम समस्या है जो सही समय पर ध्यान न देने से गंभीर हो सकती है। जानिए इसके लक्षण और बचाव के उपाय।",
      date: "December 20, 2024",
      category: "Liver Health",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "एसिडिटी से राहत के घरेलू उपाय",
      titleEnglish: "Home Remedies for Acidity Relief",
      excerpt: "पेट में जलन और एसिडिटी की समस्या से परेशान हैं? जानिए कुछ सरल और प्रभावी घरेलू उपाय जो तुरंत राहत दे सकते हैं।",
      date: "December 15, 2024",
      category: "Digestive Health",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "IBS को समझें: कारण, लक्षण और उपचार",
      titleEnglish: "Understanding IBS: Causes, Symptoms & Treatment",
      excerpt: "इरिटेबल बावल सिंड्रोम (IBS) एक पुरानी स्थिति है जो पाचन तंत्र को प्रभावित करती है। जानिए इसके बारे में विस्तार से।",
      date: "December 10, 2024",
      category: "Digestive Health",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Hepatitis: Types, Prevention, and Treatment",
      titleEnglish: "हेपेटाइटिस: प्रकार, रोकथाम और उपचार",
      excerpt: "Learn about different types of hepatitis, their causes, how to prevent them, and available treatment options.",
      date: "December 5, 2024",
      category: "Liver Health",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "पाचन तंत्र को स्वस्थ रखने के 10 टिप्स",
      titleEnglish: "10 Tips for a Healthy Digestive System",
      excerpt: "अपने पाचन तंत्र को स्वस्थ रखना आसान है। जानिए 10 सरल उपाय जो आपकी पाचन स्वास्थ्य को बेहतर बना सकते हैं।",
      date: "November 30, 2024",
      category: "Wellness",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "When to See a Gastroenterologist",
      titleEnglish: "गैस्ट्रोएंटेरोलॉजिस्ट से कब मिलें",
      excerpt: "Understanding the warning signs that indicate you should consult a gastroenterology specialist.",
      date: "November 25, 2024",
      category: "Patient Education",
      readTime: "4 min read",
    },
  ];

  const categories = ["All", "Liver Health", "Digestive Health", "Wellness", "Patient Education"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Health Blog & Resources
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights on digestive health, liver care, and wellness from Dr. Mithilesh Mourya
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-light-bg border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-medical hover:scale-105 transition-transform h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 w-fit">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground italic">
                    {post.titleEnglish}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="btn-outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">
            Have Questions About Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with Dr. Mithilesh Mourya for personalized medical advice
          </p>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
