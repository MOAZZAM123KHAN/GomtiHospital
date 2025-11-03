// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calendar } from "lucide-react";
// import gastroIcon from "@/assets/gastro-icon.jpg";
// import liverIcon from "@/assets/liver-icon.jpg";

// const Services = () => {
//   const gastroServices = [
//     { name: "एसिडिटी और गैस", english: "Acidity & Gas" },
//     { name: "कब्ज़ और दस्त", english: "Constipation & Diarrhea" },
//     { name: "इरिटेबल बावल सिंड्रोम (IBS)", english: "Irritable Bowel Syndrome" },
//     { name: "पेट दर्द", english: "Abdominal Pain" },
//     { name: "पेट का अल्सर", english: "Stomach Ulcers" },
//     { name: "पाचन समस्याएं", english: "Digestive Disorders" },
//     { name: "पित्त की पथरी", english: "Gallstones" },
//     { name: "अग्न्याशय में सूजन (पैंक्रियाटाइटिस)", english: "Pancreatitis" },
//     { name: "पेट का कैंसर", english: "Stomach Cancer" },
//     { name: "कोलाइटिस", english: "Colitis" },
//   ];

//   const liverServices = [
//     { name: "फैटी लीवर", english: "Fatty Liver Disease" },
//     { name: "पीलिया (जॉन्डिस)", english: "Jaundice" },
//     { name: "हेपेटाइटिस A, B, C", english: "Hepatitis A, B, C" },
//     { name: "सिरोसिस", english: "Cirrhosis" },
//     { name: "लीवर फाइब्रोसिस", english: "Liver Fibrosis" },
//     { name: "लीवर कैंसर", english: "Liver Cancer" },
//     { name: "ऑटोइम्यून लीवर रोग", english: "Autoimmune Liver Disease" },
//     { name: "अल्कोहलिक लीवर रोग", english: "Alcoholic Liver Disease" },
//   ];

//   const procedures = [
//     {
//       title: "Endoscopy (गैस्ट्रोस्कोपी)",
//       description: "Upper GI endoscopy for diagnosis of esophageal, stomach, and duodenal conditions",
//     },
//     {
//       title: "Colonoscopy (कोलोनोस्कोपी)",
//       description: "Complete examination of the colon for polyps, cancer screening, and inflammatory conditions",
//     },
//     {
//       title: "ERCP",
//       description: "Endoscopic Retrograde Cholangiopancreatography for bile duct and pancreatic disorders",
//     },
//     {
//       title: "Polypectomy",
//       description: "Removal of polyps during endoscopy to prevent cancer",
//     },
//     {
//       title: "Banding & Sclerotherapy",
//       description: "Treatment for esophageal varices in liver disease patients",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
//         <div className="container-custom text-center">
//           <h1 className="heading-xl mb-6">
//             Our Services & Specialties
//           </h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Comprehensive gastroenterology and hepatology services for all digestive and liver conditions
//           </p>
//         </div>
//       </section>

//       {/* Gastroenterology Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div>
//               <div className="sticky top-24">
//                 <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
//                   <img src={gastroIcon} alt="Gastroenterology" className="w-24 h-24 object-cover rounded-xl" />
//                 </div>
//                 <h2 className="heading-lg mb-4">Gastroenterology Services</h2>
//                 <p className="text-para mb-6">
//                   Expert diagnosis and treatment of conditions affecting the digestive system, 
//                   from the esophagus to the colon. We use advanced diagnostic techniques and 
//                   evidence-based treatments.
//                 </p>
//                 <p className="text-para font-semibold text-primary">
//                   पाचन तंत्र संबंधी सभी समस्याओं का विशेषज्ञ उपचार
//                 </p>
//               </div>
//             </div>

//             <div>
//               <Card className="card-medical">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Conditions We Treat</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     {gastroServices.map((service, index) => (
//                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
//                         <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                         <div>
//                           <p className="font-semibold text-sm">{service.name}</p>
//                           <p className="text-xs text-muted-foreground">{service.english}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Hepatology Section */}
//       <section className="section-padding bg-light-bg">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="order-2 lg:order-1">
//               <Card className="card-medical">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Liver Conditions We Treat</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     {liverServices.map((service, index) => (
//                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
//                         <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
//                         <div>
//                           <p className="font-semibold text-sm">{service.name}</p>
//                           <p className="text-xs text-muted-foreground">{service.english}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="order-1 lg:order-2">
//               <div className="lg:sticky lg:top-24">
//                 <div className="inline-block p-4 bg-secondary/10 rounded-2xl mb-6">
//                   <img src={liverIcon} alt="Hepatology" className="w-24 h-24 object-cover rounded-xl" />
//                 </div>
//                 <h2 className="heading-lg mb-4">Hepatology (Liver Care)</h2>
//                 <p className="text-para mb-6">
//                   Specialized care for all liver diseases, from fatty liver to cirrhosis. 
//                   We provide comprehensive management including lifestyle counseling, 
//                   medical treatment, and monitoring.
//                 </p>
//                 <p className="text-para font-semibold text-secondary">
//                   लीवर संबंधी सभी बीमारियों का विशेषज्ञ इलाज
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Procedures Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="heading-lg mb-4">Diagnostic & Therapeutic Procedures</h2>
//             <p className="text-para max-w-2xl mx-auto">
//               Advanced endoscopic procedures performed with state-of-the-art equipment
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {procedures.map((procedure, index) => (
//               <Card key={index} className="card-medical">
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-3">{procedure.title}</h3>
//                   <p className="text-sm text-muted-foreground">{procedure.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
//         <div className="container-custom text-center">
//           <h2 className="heading-lg mb-4">
//             Need Expert Consultation?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Don't ignore digestive or liver symptoms. Early diagnosis and treatment can make all the difference.
//           </p>
//           <Link to="/contact">
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
//               <Calendar className="w-5 h-5 mr-2" />
//               Schedule Your Appointment
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;



// // import { Link } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Calendar, Stethoscope, Heart, Shield, Activity } from "lucide-react";

// // // Note: Using Lucide icons for broader categories instead of the specific gastro/liver images
// // // import gastroIcon from "@/assets/gastro-icon.jpg"; 
// // // import liverIcon from "@/assets/liver-icon.jpg";

// // const Services = () => {
// //   // NEW General & Infectious Diseases List
// //   const generalInfectiousServices = [
// //     { name: "टायफाइड", english: "Typhoid" },
// //     { name: "मलेरिया", english: "Malaria" },
// //     { name: "डेंगू", english: "Dengue" },
// //     { name: "मेनिनजाइटिस (दिमागी बुखार)", english: "Meningitis" },
// //     { name: "श्वसन संक्रमण", english: "Respiratory Infections" },
// //     { name: "सामान्य बुखार और फ्लू", english: "Fever & Flu" },
// //     { name: "थायराइड रोग", english: "Thyroid Disorders" }, // From your list
// //   ];

// //   // NEW Chronic & Metabolic Conditions List
// //   const chronicMetabolicServices = [
// //     { name: "डायबिटीज (मधुमेह)", english: "Diabetes" },
// //     { name: "उच्च रक्तचाप (B.P.)", english: "Blood Pressure / Hypertension" },
// //     { name: "हृदय एवं छाती की समस्या", english: "Heart & Chest Conditions" },
// //     { name: "अल्सर", english: "Ulcers" },
// //     { name: "अस्थमा", english: "Asthma" },
// //     { name: "पैरालिसिस (पक्षाघात)", english: "Paralysis" }, // Specialist in Paralysis
// //     { name: "क्रोनिक बीमारियाँ", english: "Management of Chronic Illness" },
// //   ];

// //   // NEW Organ-Specific & GI Care List (Combining remaining conditions from your list)
// //   const organSpecificServices = [
// //     { name: "एसिडिटी और गैस", english: "Acidity & Gas" },
// //     { name: "कब्ज़ और दस्त", english: "Constipation & Diarrhea" },
// //     { name: "कोलाइटिस", english: "Colitis" },
// //     { name: "पीलिया (जॉन्डिस) & लीवर", english: "Jaundice & Liver Issues" },
// //     { name: "किडनी रोग प्रबंधन", english: "Kidney Disease Management" },
// //     { name: "पेट दर्द", english: "Abdominal Pain" },
// //   ];

// //   // Updated Procedures for Internal Medicine (Non-Surgical Focus)
// //   const procedures = [
// //     {
// //       title: "Diagnostic Consultations",
// //       description: "Expert diagnosis for complex and puzzling medical problems.",
// //     },
// //     {
// //       title: "Chronic Disease Monitoring",
// //       description: "Long-term management plans for conditions like Diabetes and Hypertension.",
// //     },
// //     {
// //       title: "Infectious Disease Testing",
// //       description: "Rapid and comprehensive testing for infections like Typhoid, Malaria, and Dengue.",
// //     },
// //     {
// //       title: "ECG & Basic Cardiac Screening",
// //       description: "In-house facility for ECG and basic screening of heart conditions.",
// //     },
// //     {
// //       title: "Wellness & Preventive Health",
// //       description: "Personalized advice on diet, lifestyle, and disease prevention.",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
// //         <div className="container-custom text-center">
// //           <h1 className="heading-xl mb-6">
// //             Our General Medicine & Internal Care Services
// //           </h1>
// //           <p className="text-xl max-w-3xl mx-auto">
// //             Comprehensive **Internal Medicine** care for a wide spectrum of acute and chronic health conditions.
// //           </p>
// //         </div>
// //       </section>

// //       {/* General & Infectious Diseases Section (Stethoscope) */}
// //       <section className="section-padding">
// //         <div className="container-custom">
// //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// //             <div>
// //               <div className="sticky top-24">
// //                 <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
// //                   <Stethoscope className="w-16 h-16 text-primary" />
// //                 </div>
// //                 <h2 className="heading-lg mb-4">General & Infectious Diseases</h2>
// //                 <p className="text-para mb-6">
// //                   Expert diagnosis and treatment for all common ailments, infections, and fevers, including seasonal outbreaks and acute illnesses.
// //                 </p>
// //                 <p className="text-para font-semibold text-primary">
// //                   टायफाइड, मलेरिया, डेंगू और अन्य संक्रामक रोगों का विशेषज्ञ उपचार
// //                 </p>
// //               </div>
// //             </div>

// //             <div>
// //               <Card className="card-medical">
// //                 <CardHeader>
// //                   <CardTitle className="text-2xl">Conditions We Treat</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="grid sm:grid-cols-2 gap-4">
// //                     {generalInfectiousServices.map((service, index) => (
// //                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
// //                         <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
// //                         <div>
// //                           <p className="font-semibold text-sm">{service.name}</p>
// //                           <p className="text-xs text-muted-foreground">{service.english}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- */}
// //       {/* Chronic & Metabolic Conditions Section (Heart) */}
// //       <section className="section-padding bg-light-bg">
// //         <div className="container-custom">
// //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// //             <div className="order-2 lg:order-1">
// //               <Card className="card-medical">
// //                 <CardHeader>
// //                   <CardTitle className="text-2xl">Chronic Disease Management</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="grid sm:grid-cols-2 gap-4">
// //                     {chronicMetabolicServices.map((service, index) => (
// //                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
// //                         <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
// //                         <div>
// //                           <p className="font-semibold text-sm">{service.name}</p>
// //                           <p className="text-xs text-muted-foreground">{service.english}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             <div className="order-1 lg:order-2">
// //               <div className="lg:sticky lg:top-24">
// //                 <div className="inline-block p-4 bg-secondary/10 rounded-2xl mb-6">
// //                   <Heart className="w-16 h-16 text-secondary" />
// //                 </div>
// //                 <h2 className="heading-lg mb-4">Chronic & Metabolic Care</h2>
// //                 <p className="text-para mb-6">
// //                   Specialized, long-term care for lifestyle diseases, cardiac issues, and complex conditions like **Diabetes, Hypertension, and Paralysis**.
// //                 </p>
// //                 <p className="text-para font-semibold text-secondary">
// //                   डायबिटीज, बीपी, हार्ट और पैरालिसिस का व्यापक उपचार और प्रबंधन
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- */}
// //       {/* Organ-Specific & GI Care Section (Activity) */}
// //       <section className="section-padding">
// //         <div className="container-custom">
// //           <div className="grid lg:grid-cols-2 gap-12 items-start">
// //             <div>
// //               <div className="sticky top-24">
// //                 <div className="inline-block p-4 bg-green-500/10 rounded-2xl mb-6">
// //                   <Activity className="w-16 h-16 text-green-600" />
// //                 </div>
// //                 <h2 className="heading-lg mb-4">GI, Liver & Organ-Specific Care</h2>
// //                 <p className="text-para mb-6">
// //                   Diagnosis and treatment for specific organ systems, including digestive, intestinal, and liver health (Jaundice).
// //                 </p>
// //                 <p className="text-para font-semibold text-green-600">
// //                   पेट, लीवर और अन्य आंतरिक अंगों की बीमारियों का इलाज
// //                 </p>
// //               </div>
// //             </div>

// //             <div>
// //               <Card className="card-medical">
// //                 <CardHeader>
// //                   <CardTitle className="text-2xl">Other Key Treatments</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="grid sm:grid-cols-2 gap-4">
// //                     {organSpecificServices.map((service, index) => (
// //                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
// //                         <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
// //                         <div>
// //                           <p className="font-semibold text-sm">{service.name}</p>
// //                           <p className="text-xs text-muted-foreground">{service.english}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>


// //       {/* --- */}
// //       {/* Procedures Section (Shield) */}
// //       <section className="section-padding bg-light-bg">
// //         <div className="container-custom">
// //           <div className="text-center mb-12">
// //             <h2 className="heading-lg mb-4">Diagnostic & Health Procedures</h2>
// //             <p className="text-para max-w-2xl mx-auto">
// //               Essential diagnostic and management procedures central to Internal Medicine practice.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //             {procedures.map((procedure, index) => (
// //               <Card key={index} className="card-medical">
// //                 <CardContent className="p-6">
// //                   <div className="flex items-center mb-3">
// //                     <Shield className="w-5 h-5 mr-3 text-primary" />
// //                     <h3 className="text-xl font-bold">{procedure.title}</h3>
// //                   </div>
// //                   <p className="text-sm text-muted-foreground">{procedure.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- */}
// //       {/* CTA Section */}
// //       <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
// //         <div className="container-custom text-center">
// //           <h2 className="heading-lg mb-4">
// //             Need Comprehensive Medical Care?
// //           </h2>
// //           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
// //             Get personalized and expert treatment for a wide range of acute and chronic health issues.
// //           </p>
// //           <Link to="/contact">
// //             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
// //               <Calendar className="w-5 h-5 mr-2" />
// //               Schedule Your Appointment
// //             </Button>
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Services;



import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Stethoscope, Heart, Shield, Activity } from "lucide-react";

// Note: Using Lucide icons for broader categories instead of the specific gastro/liver images
// import gastroIcon from "@/assets/gastro-icon.jpg"; 
// import liverIcon from "@/assets/liver-icon.jpg";

const Services = () => {
  // NEW General & Infectious Diseases List
  const generalInfectiousServices = [
    { name: "टायफाइड", english: "Typhoid" },
    { name: "मलेरिया", english: "Malaria" },
    { name: "डेंगू", english: "Dengue" },
    { name: "मेनिनजाइटिस (दिमागी बुखार)", english: "Meningitis" },
    { name: "श्वसन संक्रमण", english: "Respiratory Infections" },
    { name: "सामान्य बुखार और फ्लू", english: "Fever & Flu" },
    { name: "थायराइड रोग", english: "Thyroid Disorders" }, // From your list
  ];

  // NEW Chronic & Metabolic Conditions List
  const chronicMetabolicServices = [
    { name: "डायबिटीज (मधुमेह)", english: "Diabetes" },
    { name: "उच्च रक्तचाप (B.P.)", english: "Blood Pressure / Hypertension" },
    { name: "हृदय एवं छाती की समस्या", english: "Heart & Chest Conditions" },
    { name: "अल्सर", english: "Ulcers" },
    { name: "अस्थमा", english: "Asthma" },
    { name: "पैरालिसिस (पक्षाघात)", english: "Paralysis" }, // Specialist in Paralysis
    { name: "क्रोनिक बीमारियाँ", english: "Management of Chronic Illness" },
  ];

  // NEW Organ-Specific & GI Care List (Combining remaining conditions from your list)
  const organSpecificServices = [
    { name: "एसिडिटी और गैस", english: "Acidity & Gas" },
    { name: "कब्ज़ और दस्त", english: "Constipation & Diarrhea" },
    { name: "कोलाइटिस", english: "Colitis" },
    { name: "पीलिया (जॉन्डिस) & लीवर", english: "Jaundice & Liver Issues" },
    { name: "किडनी रोग प्रबंधन", english: "Kidney Disease Management" },
    { name: "पेट दर्द", english: "Abdominal Pain" },
  ];

  // Updated Procedures for Internal Medicine (Non-Surgical Focus)
  const procedures = [
    {
      title: "Diagnostic Consultations",
      description: "Expert diagnosis for complex and puzzling medical problems.",
    },
    {
      title: "Chronic Disease Monitoring",
      description: "Long-term management plans for conditions like Diabetes and Hypertension.",
    },
    {
      title: "Infectious Disease Testing",
      description: "Rapid and comprehensive testing for infections like Typhoid, Malaria, and Dengue.",
    },
    {
      title: "ECG & Basic Cardiac Screening",
      description: "In-house facility for ECG and basic screening of heart conditions.",
    },
    {
      title: "Wellness & Preventive Health",
      description: "Personalized advice on diet, lifestyle, and disease prevention.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Our **General Medicine & Internal Care** Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive **Internal Medicine** care for a wide spectrum of acute and chronic health conditions.
          </p>
        </div>
      </section>

      {/* General & Infectious Diseases Section (Stethoscope) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticky top-24">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                  <Stethoscope className="w-16 h-16 text-primary" />
                </div>
                <h2 className="heading-lg mb-4">General & Infectious Diseases</h2>
                <p className="text-para mb-6">
                  Expert diagnosis and treatment for all common ailments, infections, and fevers, including seasonal outbreaks and acute illnesses.
                </p>
                <p className="text-para font-semibold text-primary">
                  **टायफाइड, मलेरिया, डेंगू** और अन्य संक्रामक रोगों का विशेषज्ञ उपचार
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
                    {generalInfectiousServices.map((service, index) => (
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

      {/* --- */}
      {/* Chronic & Metabolic Conditions Section (Heart) */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Card className="card-medical">
                <CardHeader>
                  <CardTitle className="text-2xl">Chronic Disease Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {chronicMetabolicServices.map((service, index) => (
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
                  <Heart className="w-16 h-16 text-secondary" />
                </div>
                <h2 className="heading-lg mb-4">Chronic & Metabolic Care</h2>
                <p className="text-para mb-6">
                  Specialized, long-term care for lifestyle diseases, cardiac issues, and complex conditions like Diabetes, Hypertension, and Paralysis.
                </p>
                <p className="text-para font-semibold text-secondary">
                  **डायबिटीज, बीपी, हार्ट और पैरालिसिस** का व्यापक उपचार और प्रबंधन
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Organ-Specific & GI Care Section (Activity) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticky top-24">
                <div className="inline-block p-4 bg-green-500/10 rounded-2xl mb-6">
                  <Activity className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="heading-lg mb-4">GI, Liver & Organ-Specific Care</h2>
                <p className="text-para mb-6">
                  Diagnosis and treatment for specific organ systems, including digestive, intestinal, and liver health (**Jaundice**).
                </p>
                <p className="text-para font-semibold text-green-600">
                  **पेट, लीवर** और अन्य आंतरिक अंगों की बीमारियों का इलाज
                </p>
              </div>
            </div>

            <div>
              <Card className="card-medical">
                <CardHeader>
                  <CardTitle className="text-2xl">Other Key Treatments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {organSpecificServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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


      {/* --- */}
      {/* Procedures Section (Shield) */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Diagnostic & Health Procedures</h2>
            <p className="text-para max-w-2xl mx-auto">
              Essential diagnostic and management procedures central to Internal Medicine practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {procedures.map((procedure, index) => (
              <Card key={index} className="card-medical">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 mr-3 text-primary" />
                    <h3 className="text-xl font-bold">{procedure.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{procedure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">
            Need Comprehensive Medical Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized and expert treatment for a wide range of acute and chronic health issues.
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