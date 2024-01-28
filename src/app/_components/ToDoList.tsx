"use client";

import { useState } from "react";
import { useGetToDoList, useSaveToDoList } from "@/app/_hooks/useToDoList";

export function ToDoList() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useGetToDoList();
  const { mutate: saveTodo } = useSaveToDoList();

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const newItem = new FormData(event.currentTarget).get("search") as string;
    saveTodo({
      data: newItem,
    });
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  py-2">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="search"
            name={"search"}
            placeholder="Add Todo..."
            className="bg-gray-100 border-gray-200 focus:bg-white focus:border-primary rounded-md pl-3 pr-10 text-gray-700"
          />
          <button type={"submit"}>Add</button>
        </form>
      </div>
      {!isLoading && (
        <div className="w-full max-w-sm">
          <section className="flex flex-col items-start gap-2 p-4">
            {data.map((value: { data: string }, index: number) => (
              <div className="space-y-1 leading-none" key={index}>
                <div>{value.data}</div>
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
