import * as Dialog from "@radix-ui/react-dialog";
import reactImage from "../assets/react.svg";
import CreateHabitForm from "./CreateHabitForm"
import { CrossCircledIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={reactImage} alt="App logo" className="hover:animate-spin" />
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border-2 border-green-400 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-green-600 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          New Meow
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-5 top-3 text-zinc-400 transition-colors hover:text-red-500">
              <CrossCircledIcon className="size-6 hover:animate-pulse" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Create Habit
            </Dialog.Title>

            <CreateHabitForm/>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
