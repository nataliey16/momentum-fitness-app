import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Header />
    </main>
  );
}
