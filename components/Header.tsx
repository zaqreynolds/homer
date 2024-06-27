"use client";

import { useRouter } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { Button } from "./ui/button";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1">
        <Button onClick={() => router.back()} variant="ghost" className="p-3">
          Back
        </Button>
      </div>
      <h1 className="flex-1 text-center mt-4 text-xl font-bold">My Workout</h1>
      <div className="flex-1 flex justify-end">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
