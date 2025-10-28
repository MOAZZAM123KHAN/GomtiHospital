import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Dr. Mourya" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Health Blog" },
  ];

  const services = [
    { path: "/services", label: "Gastroenterology" },
    { path: "/services", label: "Hepatology" },
    { path: "/services", label: "Endoscopy" },
    { path: "/contact", label: "Book Appointment" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">GM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Gomti Hospital</h3>
                <p className="text-sm opacity-90">Jaunpur</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Expert Gastroenterology and Liver Care by Dr. Mithilesh Mourya, serving patients in Jaunpur with compassion and excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  मुरादगंज, दुबे ढाबा के पास,<br />
                  धर्मकांटा के बगल मे,<br />
                  Jaunpur, Uttar Pradesh
                </span>
              </li>
              <li>
                <a
                  href="tel:09793502527"
                  className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-5 h-5" />
                  <span>097935 02527</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gomatihospitaljnp@gmail.com"
                  className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-opacity break-all"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>gomatihospitaljnp@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} Gomti Hospital, Jaunpur. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Designed for patient care excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
