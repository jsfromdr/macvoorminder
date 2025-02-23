import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/nav/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-black selection:bg-green-600">
        <Navbar dark={false} />
        <main className={poppins.className}>{children}</main>
      </body>
    </html>
  );
}
