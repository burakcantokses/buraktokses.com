import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Burakcan Tokses | Kişisel Website",
  description: "Software Developer, UI/UX Designer, and Web Developer",
  keywords: [
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
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
