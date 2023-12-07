import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer/Footer";
//import "../app/(site)/globals.css";
//import "@/styles/globals.css";
import "../styles/globals.css";
import { Raleway, Bitter } from "next/font/google";
//import { ThemeProvider } from "next-themes";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});
const raleway = Raleway({
  weight: ["400", "700"],
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
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {/* <TopNav /> */}
        {children}
        {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
