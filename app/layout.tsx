"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchModal from "@/components/search-modal";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setSearchResults(data.products || []);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    }
  };

  return (
    <html lang="en">
      <body className="font-poppins antialiased" suppressHydrationWarning>
        {children}

        {/* Fixed search icon at bottom right corner */}
        <button
          onClick={() => {
            setIsSearchOpen(true);
            setSearchResults([]);
          }}
          className="fixed bottom-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Open search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Search modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSearch={handleSearch}
          searchResults={searchResults}
        />

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
