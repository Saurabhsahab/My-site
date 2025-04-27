
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactComponent from "../components/Contact";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Saurabh Upadhayay";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <ContactComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
