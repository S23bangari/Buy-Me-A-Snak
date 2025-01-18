import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy me a Snack | Fund Your Project with chai",
  description: "a crowdfunding platform for creaters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <div className="relative z-10 min-h-screen w-full bg-black  ">
            <div className=" z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <div className="absolute -z-10 left-10 right-0 top-[-10%] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
              <Navbar />
              <div className="text-white min-h-screen relative">{children}</div>
              <Footer />
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
