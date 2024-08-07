import { useState } from "react";
import { api } from "../lib/axios";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export default function CreateHabitForm() {
  const [title, setTitle] = useState("");

  const createNewHabit = async (event) => {
    event.preventDefault();

    if (!title) {
      alert("No title entered.");
      return;
    }

    await api.post("habits", {
      title,
    });

    alert("Habit created successfully!");
  };
  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold text-xl leading-tight">
        Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Enter the habit's title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="rounded-lg p-4 mt-3 focus:outline-none"
      />
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center font-semibold bg-green-400 hover:bg-green-700 transition-colors group"
      >
        <span className="flex items-center group-hover:animate-bounce"><LightningBoltIcon className="size-5" />Submit</span>
      </button>
    </form>
  );
}
