import Image from "next/image";
import Link from "next/link";
import Wallet from "@/assets/wallet.svg"

const Peer = () => {
  return (
    <div className="mt-20 px-3 max-w-3xl mx-auto">
      <div className="border border-gray-400 rounded-xl p-5">
        <div className="flex items-center space-x-3">
          <p>From:</p>
          <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
            {/* <Image src={Eth} alt="eth" /> */}
            <p>Encounter brand</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col items-center font-semibold">
            <p>0.0</p>
            <p>$0.00</p>
          </div>

          <div className="">
            <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
              {/* <Image src={Eth} alt="eth" /> */}
              <p>ENU</p>
            </div>
            <div className="flex justify-center items-center px-4 h-[36px] text-sm font-semibold">
              {/* <Image src={Wallet} alt="wallet" /> */}
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-400 rounded-xl p-5 mt-5">
        <div className="flex items-center space-x-3">
          <p>To:</p>
          <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
            {/* <Image src={Sol} alt="sol" /> */}
            <p>Mcdonald Token</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col items-center font-semibold">
            <p>0.0</p>
            <p>$0.00</p>
          </div>

          <div className="">
            <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
              {/* <Image src={Sol} alt="sol" /> */}
              <p>MCD</p>
            </div>
            <div className="flex justify-center items-center px-4 h-[36px] text-sm font-semibold">
              <Image src={Wallet} alt="wallet" />
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="bg-[#058AB4] text-white font-semibold py-4 w-full rounded-xl text-center cursor-pointer">
          Swap
        </div>
      </div>
    </div>
  );
};

export default Peer;