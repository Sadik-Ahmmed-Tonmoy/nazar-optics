import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nazar Optics",
  description: "Generated by create next app",
};

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default commonLayout;
