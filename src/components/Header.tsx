// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Phone, Mail } from "lucide-react";
// import { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/services", label: "Services" },
//     { path: "/blog", label: "Blog" },
//     { path: "/contact", label: "Contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
//       {/* Top Bar */}
//       <div className="bg-primary text-primary-foreground py-2">
//         <div className="container-custom flex justify-between items-center text-sm">
//           <div className="flex items-center gap-4">
//             <a href="tel:09793502527" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//               <Phone className="w-4 h-4" />
//               <span>097935 02527</span>
//             </a>
//             <a href="mailto:gomatihospitaljnp@gmail.com" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
//               <Mail className="w-4 h-4" />
//               <span>gomatihospitaljnp@gmail.com</span>
//             </a>
//           </div>
//           <div className="text-xs md:text-sm">
//             Gomti Hospital, Jaunpur
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container-custom">
//         <nav className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-xl">GM</span>
//             </div>
//             <div className="hidden md:block">
//               <h1 className="font-bold text-lg leading-tight text-heading">Gomti Hospital</h1>
//               <p className="text-xs text-muted-foreground">Dr. Mithilesh Mourya</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-medium transition-colors hover:text-primary ${
//                   isActive(link.path) ? "text-primary" : "text-foreground"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex items-center gap-3">
//             <Link to="/contact" className="hidden md:block">
//               <Button className="btn-accent">
//                 Book Appointment
//               </Button>
//             </Link>
            
//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden pb-4 space-y-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
//                   isActive(link.path)
//                     ? "bg-primary text-primary-foreground"
//                     : "hover:bg-muted"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">
//               <Button className="btn-accent w-full">
//                 Book Appointment
//               </Button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
// 1. Import the logo image
import logo from "../assets/logo.jpg"; // Assuming this path is correct relative to the component file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:09793502527" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>97935 02527</span>
            </a>
            <a href="mailto:gomatihospitaljnp@gmail.com" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>gomatihospitaljnp@gmail.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm">
            Gomati Hospital, Jaunpur
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* 2. Replace the placeholder with the <img> tag */}
            <div className="w-12 h-12"> {/* Use a container for sizing if needed */}
              <img
                src={logo}
                alt="Gomati Hospital Logo"
                className="w-full h-full object-contain rounded-full" // Use appropriate classes for styling the image
              />
            </div>
            
            <div className="hidden md:block">
              <h1 className="font-bold text-lg leading-tight text-heading">Gomati Hospital</h1>
              <p className="text-xs text-muted-foreground">Dr. Mithilesh Maurya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <Button className="btn-accent">
                Book Appointment
              </Button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">
              <Button className="btn-accent w-full">
                Book Appointment
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;