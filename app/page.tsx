import Image from "next/image";
import ClientWeek from "./ClientWeek/page";

export default function Home() {
  return (
    <main className="grow flex flex-col p-5 items-center overflow-auto">
      <ClientWeek />
    </main>
  );
}
