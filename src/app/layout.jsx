import { DM_Serif_Display, Public_Sans } from "next/font/google";
import "/dist/css/main.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--ff-primary",
});

export const public_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-secondary",
});

export const metadata = {
  title: "PayAPI",
  description:
    "Empowering innovators by delivering access to the financial system.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_serif_display.variable} ${public_sans.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
