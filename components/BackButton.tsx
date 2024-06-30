"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateUp = () => {
    // Get the current pathname
    const currentPath = pathname;

    // Split the pathname into segments
    const pathSegments = currentPath.split("/").filter(Boolean);

    // Remove the last segment to navigate up one level
    const newPath = "/" + pathSegments.slice(0, -1).join("/");

    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <Button onClick={navigateUp} variant="ghost" className="p-3">
      Back
    </Button>
  );
};

export default BackButton;
