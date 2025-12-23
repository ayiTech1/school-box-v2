// app/api/search/route.ts
import { NextRequest } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.trim().length === 0) {
    return Response.json({ products: [] });
  }

  try {
    const products = await client.fetch(
      groq`*[_type == "product" && (name match $q || description match $q || brand->name match $q)]{
        _id,
        name,
        "slug": slug.current,
        price,
        image,
        brand->{
          name
        }
      }`,
      { q: `*${query}*` }
    );

    return Response.json({ products });
  } catch (error) {
    console.error("Search error:", error);
    return Response.json({ products: [], error: "Failed to search" }, { status: 500 });
  }
}
