"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0YCHQbKWhG7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { useState } from "react";
import { useGetProductList } from "@/app/_hooks/useGetProductList";
import { Card } from "@/app/_components/Card";

// isloading, isfetcing, refetchonfoucs, staletime.

export function ProductList() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useGetProductList(query);

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("search") as string;
    setQuery(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="search"
          name={"search"}
          placeholder="Search..."
          className="bg-gray-100 border-gray-200 focus:bg-white focus:border-primary rounded-md pl-3 pr-10 text-gray-700"
        />
        <button type={"submit"}>Search</button>
      </form>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
        {data.map((product: any) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>
    </section>
  );
}
