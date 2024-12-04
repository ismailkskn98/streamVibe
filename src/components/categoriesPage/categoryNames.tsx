import type { CategoryNamesType } from "@/types";
import React from "react";
import { Button } from "../ui/button";

export default function CategoryNames({ categoriesName, id }: { categoriesName: CategoryNamesType[]; id?: string }) {
  return (
    <main className="w-full flex flex-col gap-8 ">
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(0, 10).map((category: CategoryNamesType, index: number) => (
          <Button
            key={category.id || index}
            className={`text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 ${id && Number(id) === category.id ? "bg-neutral-800" : ""}`}
          >
            {category.name}
          </Button>
        ))}
      </article>
      <article className="mx-auto flex items-center gap-3 flex-wrap">
        {categoriesName.slice(10).map((category: CategoryNamesType, index: number) => (
          <Button
            key={category.id || `second-${index}`}
            className={`text-grey-60 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-800 ${id && Number(id) === category.id ? "bg-neutral-800" : ""}`}
          >
            {category.name}
          </Button>
        ))}
      </article>
    </main>
  );
}
