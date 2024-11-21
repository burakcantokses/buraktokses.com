import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ParticleBackground from "@/components/particle/ParticleBackground";

export const metadata: Metadata = {
  title: "Burakcan Tokses | Kişisel Website",
  description: "Backend Developer, UI/UX Designer, and Web Developer",
  keywords: [
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Software Developer",
    "React",
    "Next.js",
    "Burakcan Tokses",
    "Burakcan",
    "Tokses",
    "Burakcan Tok",
    "Burakcan T",
    "Tokses Burakcan",
    "Tokses Burak",
    "Tokses B",
    "Burakcan T.",
    "Tokses B.",
    "Tokses B",
    "Burak Tokses",
    "Tokses",
    "Burak",
    "Burak Tok",
    "Burak T",
    "Tokses Burak",
    "Tokses Burakcan",
    "Tokses B.",
    "Burakcan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow">
            <ParticleBackground />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
