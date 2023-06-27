import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Raleway, Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata = {
  title: {
    template: "%s | Mark Landeryou Portfolio",
    default: "Mark Landeryou Portfolio",
  },
  description: "Mark Landeryou's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{`${bitter.variable}, ${raleway.variable}`}">
      <body>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
