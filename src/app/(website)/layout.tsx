// src/app/(website)/layout.tsx

import Footer from "../main/Footer";
import Navbar from "../main/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9F9F9] ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
