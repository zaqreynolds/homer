"use client";
import { usePathname, useRouter } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import BackButton from "./BackButton";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1">
        <BackButton />
      </div>
      <h1 className="flex-1 text-center mt-4 text-xl font-bold">My Workout</h1>
      <div className="flex-1 flex justify-end">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
