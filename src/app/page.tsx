import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bgblack bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-4 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sx:text-2xl">
          <h1 className="text-4xl font-bold">
            Raghav&apos;s Computer <br />
            Repair Shop
          </h1>
          <address>
            #456 Gateway of Panchkula <br />
            Lotus City, 134116
          </address>
          <p>Open Daily: 9am - 5pm</p>
          <Link href={"tel:3333333333"} className="hover:underline">
            3333333333
          </Link>
        </div>
      </main>
    </div>
  );
}
