import Image from "next/image";
import Fashion from "@/assets/fashion.svg";
import Store from "@/assets/store.svg";
import Link from "next/link";

const Trade = () => {
  const trades = [
    {
      image: Fashion,
      name: "Fashionfit 0.03421pod",
      percent: "+3%",
    },
    {
      image: Store,
      name: "Fashionfit 0.03421pod",
      percent: "+3%",
    },
    {
      image: Fashion,
      name: "Fashionfit 0.03421pod",
      percent: "+3%",
    },
    {
      image: Fashion,
      name: "Fashionfit 0.03421pod",
      percent: "+3%",
    },
    {
        image: Fashion,
        name: "Fashionfit 0.03421pod",
        percent: "+3%",
      },
      {
        image: Store,
        name: "Fashionfit 0.03421pod",
        percent: "+3%",
      },
      {
        image: Fashion,
        name: "Fashionfit 0.03421pod",
        percent: "+3%",
      },
      {
        image: Fashion,
        name: "Fashionfit 0.03421pod",
        percent: "+3%",
      },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 pt-16 pb-32">
      {trades.map((trade, index) => (
        <div key={index} className="flex flex-col justify-center items-center border px-4">
          <Image src={trade.image} alt="img" />
          <p>{trade.name}</p>
          <p className="text-green-400">{trade.percent}</p>
          <Link href="/trade">
            <button className="text-white bg-[#058AB4] px-4 py-3">Trade</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Trade;
