import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter =Inter({subsets :['latin']})

export const metadata: Metadata = {
  title: "Kumesha Portfolio",
  description: "My personal portfolio website built with Next.js, TypeScript, Framer Motion, and Three.js, showcasing skills, projects, and 3D interactive elements with responsive, dynamic animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
