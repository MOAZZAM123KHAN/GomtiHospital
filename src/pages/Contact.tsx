// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { MapPin, Phone, Mail, Clock, Calendar as CalendarIcon } from "lucide-react";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     time: "",
//     complaint: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.phone || !formData.date) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all required fields (Name, Phone, Date)",
//         variant: "destructive",
//       });
//       return;
//     }

//     // In a real application, this would send to a backend
//     toast({
//       title: "Appointment Request Sent!",
//       description: "We'll contact you shortly to confirm your appointment.",
//     });

//     // Reset form
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       date: "",
//       time: "",
//       complaint: "",
//     });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
//         <div className="container-custom text-center">
//           <h1 className="heading-xl mb-6">
//             Contact Us
//           </h1>
//           <p className="text-xl max-w-2xl mx-auto">
//             Book your appointment with Dr. Mithilesh Maurya at Gomati Hospital, Jaunpur
//           </p>
//         </div>
//       </section>

//       {/* Contact Information & Appointment Form */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="space-y-6">
//               <div>
//                 <h2 className="heading-md mb-6">Get In Touch</h2>
//                 <p className="text-para mb-8">
//                  "Our goal is to fulfill all your General Health and Internal Medicine needs. 
//                   Contact us or book an appointment today.
//                 </p>
//               </div>

//               {/* Contact Cards */}
//               <Card className="card-medical">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold mb-2">Address</h3>
//                       <p className="text-muted-foreground">
//                         Gomti Hospital<br />
//                         मुरादगंज, दुबे ढाबा के पास,<br />
//                         धर्मकांटा के बगल मे<br />
//                         Jaunpur, Uttar Pradesh
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="card-medical">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold mb-2">Phone</h3>
//                       <a href="tel:09793502527" className="text-primary font-semibold hover:underline">
//                         097935 02527
//                       </a>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         Click to call or WhatsApp
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="card-medical">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold mb-2">Email</h3>
//                       <a href="mailto:gomatihospitaljnp@gmail.com" className="text-primary font-semibold hover:underline break-all">
//                         gomatihospitaljnp@gmail.com
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="card-medical">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Clock className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold mb-2">Consultation Hours</h3>
//                       <p className="text-muted-foreground">
//                         Monday - Saturday: 11:00 AM - 2:30 PM<br />
//                         Sunday: OPD services are closed on Sunday
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Actions */}
//               <div className="flex flex-wrap gap-4 pt-4">
//                 <a href="tel:09793502527" className="flex-1 min-w-[200px]">
//                   <Button className="btn-primary w-full">
//                     <Phone className="w-5 h-5 mr-2" />
//                     Call Now
//                   </Button>
//                 </a>
//                 <a href="https://wa.me/919793502527" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px]">
//                   <Button className="btn-outline w-full">
//                     <Phone className="w-5 h-5 mr-2" />
//                     WhatsApp
//                   </Button>
//                 </a>
//               </div>
//             </div>

//             {/* Appointment Form */}
//             <div>
//               <Card className="card-medical">
//                 <CardHeader>
//                   <CardTitle className="text-2xl flex items-center gap-2">
//                     <CalendarIcon className="w-6 h-6 text-primary" />
//                     Book An Appointment
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <Label htmlFor="name">Full Name *</Label>
//                       <Input
//                         id="name"
//                         placeholder="Enter your full name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         required
//                         className="mt-1"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="phone">Contact Number *</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter your phone number"
//                         value={formData.phone}
//                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                         required
//                         className="mt-1"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="email">Email (Optional)</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         className="mt-1"
//                       />
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="date">Preferred Date *</Label>
//                         <Input
//                           id="date"
//                           type="date"
//                           value={formData.date}
//                           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                           required
//                           min={new Date().toISOString().split('T')[0]}
//                           className="mt-1"
//                         />
//                       </div>

//                       <div>
//                         <Label htmlFor="time">Preferred Time</Label>
//                         <Input
//                           id="time"
//                           type="time"
//                           value={formData.time}
//                           onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="complaint">Chief Complaint</Label>
//                       <Textarea
//                         id="complaint"
//                         placeholder="Brief description of your ailment (optional)"
//                         value={formData.complaint}
//                         onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
//                         rows={4}
//                         className="mt-1"
//                       />
//                     </div>

//                     <Button type="submit" className="btn-accent w-full text-lg py-6">
//                       Submit Appointment Request
//                     </Button>

//                     <p className="text-xs text-muted-foreground text-center">
//                       * Required fields. We'll contact you to confirm your appointment.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="section-padding bg-light-bg">
//         <div className="container-custom">
//           <h2 className="heading-lg text-center mb-8">Find Us</h2>
//           <div className="rounded-2xl overflow-hidden shadow-xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.123!2d82.6847!3d25.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzQ4LjgiTiA4MsKwNDEnMDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Gomati Hospital Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Calendar as CalendarIcon } from "lucide-react";
import { publicAppointmentApi } from "@/api/publicAppointmentApi";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    complaint: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic required fields validation
    if (!formData.name || !formData.phone || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, Date)",
        variant: "destructive",
      });
      return;
    }

    // Validate Sunday
    const dateObj = new Date(formData.date);
    if (dateObj.getDay() === 0) {
      toast({
        title: "Invalid Date",
        description: "Appointments cannot be booked on Sunday",
        variant: "destructive",
      });
      return;
    }

    // Validate time if provided
    if (formData.time) {
      const [hour, minute] = formData.time.split(":").map(Number);
      const totalMinutes = hour * 60 + minute;
      const startMinutes = 11 * 60; // 11:00 AM
      const endMinutes = 14 * 60 + 30; // 2:30 PM
      if (totalMinutes < startMinutes || totalMinutes > endMinutes) {
        toast({
          title: "Invalid Time",
          description: "Appointment time must be between 11:00 AM and 2:30 PM",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      setLoading(true);

      const response = await publicAppointmentApi.bookAppointment({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        appointmentDate: formData.date,
        appointmentTime: formData.time,
        disease: formData.complaint,
      });

      toast({
        title: "Appointment Booked!",
        description: response.message,
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        complaint: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Book your appointment with Dr. Mithilesh Maurya at Gomati Hospital, Jaunpur
          </p>
        </div>
      </section>

      {/* Contact Info & Appointment Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Keep all your Contact Cards and Quick Actions exactly as-is */}
            </div>

            {/* Appointment Form */}
            <div>
              <Card className="card-medical">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                    Book An Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-1"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Contact Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-1"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                        disabled={loading}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="mt-1"
                          disabled={loading}
                        />
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="mt-1"
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="complaint">Chief Complaint</Label>
                      <Textarea
                        id="complaint"
                        placeholder="Brief description of your ailment (optional)"
                        value={formData.complaint}
                        onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                        rows={4}
                        className="mt-1"
                        disabled={loading}
                      />
                    </div>

                    <Button type="submit" className="btn-accent w-full text-lg py-6" disabled={loading}>
                      {loading ? "Booking..." : "Submit Appointment Request"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. We'll contact you to confirm your appointment.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (keep unchanged) */}
    </div>
  );
};

export default Contact;
