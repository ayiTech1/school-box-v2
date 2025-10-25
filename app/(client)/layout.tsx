import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - school box",
    default: "school-box online store",
  },
  description: "Your one-stop shop for all school supplies and essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}
