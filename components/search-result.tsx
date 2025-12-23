// import { searchProducts } from "@/app/api/search/route";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


// export default async function SearchResults({ query }: { query: string }) {
//   const products = await searchProducts(query);

//   if (products.length === 0) {
//     return <p className="text-center text-gray-500 text-sm">No products found</p>;
//   }

//   return (
//     <div className="mt-4 max-h-60 overflow-y-auto border-t pt-2">
//       {products.map((product: { _id: Key | null | undefined; slug: { current: any; }; image: { asset: { url: string | Blob | undefined; }; }; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; brand: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }; price: { toLocaleString: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }; }) => (
//         <a
//           key={product._id}
//           href={`/product/${product.slug.current}`}
//           className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"
//         >
//           {product.image?.asset?.url && (
//             <img
//               src={product.image.asset.url}
//               alt={String(product.name) || "Product image"}
//               className="w-10 h-10 object-cover rounded"
//             />
//           )}
//           <div className="flex-1">
//             <p className="font-medium text-sm">{product.name}</p>
//             {product.brand?.name && (
//               <p className="text-xs text-gray-500">{product.brand.name}</p>
//             )}
//           </div>
//           <span className="text-sm font-semibold">
//             GHS {product.price?.toLocaleString()}
//           </span>
//         </a>
//       ))}
//     </div>
//   );
// }
