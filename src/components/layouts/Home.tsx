"use client";

import { createUser } from "~/service/users";

export function Home() {
  async function handleClick() {
    console.log("Click");
    const user = await createUser("test@test.com", "123");

    console.log(user);
  }
  return (
    <main className="flex items-center justify-center gap-8 sm:items-start">
      <button
        onClick={handleClick}
        className="rounded-full bg-black p-4 text-slate-100"
      >
        Deploy now
      </button>
    </main>
  );
}
