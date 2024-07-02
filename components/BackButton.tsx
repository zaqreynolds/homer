"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);

  // const navigateUp = () => {
  //   // Get the current pathname
  //   const currentPath = pathname;

  //   // Split the pathname into segments
  //   const pathSegments = currentPath.split("/").filter(Boolean);

  //   // Remove the last segment to navigate up one level
  //   const newPath = "/" + pathSegments.slice(0, -1).join("/");

  //   // Navigate to the new path
  //   router.push(newPath);
  // };

  return (
    <Button
      onClick={router.back}
      variant="ghost"
      className={`p-3 focus:bg-transparent ${hide ? "hidden" : ""}`}
    >
      Back
    </Button>
  );
};

export default BackButton;
