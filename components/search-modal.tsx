"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  searchResults: any[];
}

const SearchModal = ({ isOpen, onClose, onSearch, searchResults }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-shop_dark_green focus:outline-none"
              autoFocus
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Show search results */}
        {searchResults.length > 0 && (
          <div className="mt-4 max-h-60 overflow-y-auto border-t pt-2">
            {searchResults.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product.slug.current}`}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                {product.image?.asset?.url && (
                  <img
                    src={product.image.asset.url}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium text-sm">{product.name}</p>
                  {product.brand?.name && (
                    <p className="text-xs text-gray-500">{product.brand.name}</p>
                  )}
                </div>
                <span className="text-sm font-semibold">
                  GHS {product.price?.toLocaleString()}
                </span>
              </Link>
            ))}
          </div>
        )}

        {searchQuery && searchResults.length === 0 && (
          <p className="mt-4 text-center text-gray-500 text-sm">No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
