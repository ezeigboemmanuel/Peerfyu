import Enca from "@/assets/enca.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center max-w-3xl mx-auto px-4">
      <div className="flex space-x-4 items-center">
        <Image src={Enca} alt="encounter" />
        <div>
          <p className="font-bold">The Encounter fashion store</p>
          <p>Location: Paris, france</p>
          <p className="font-bold">Market cap: $3.6M</p>
        </div>
      </div>

      <div className="w-full">
        <div className="font-bold">
          <p>Token Price</p>
          <p className="mt-3">
            0.17421 <span className="text-green-400">+6%</span>
          </p>
        </div>

        <div className="w-full flex flex-col border max-w-xl mx-auto space-y-4 mt-5">
          <button className="border border-black px-4 py-3 w-full">Buy</button>
          <button className="border border-black px-4 py-3">Sell</button>
          <Link href="/peer">
            <button className="text-white bg-[#058AB4] px-4 py-3 w-full">Trade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
