import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <div className="my-10">
          <Hero />
        </div>
      </div>
    </>
  );
}
