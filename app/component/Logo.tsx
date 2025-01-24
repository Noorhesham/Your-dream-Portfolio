import Image from "next/image";
import Link from "next/link";
import { LOGOPATH, LOGOTEXT } from "../constants";

const Logo = () => {
  return (
    <Link href="/" className="flex  items-center gap-2">
      <img src={LOGOPATH} className=" w-14 rounded-full" alt="logo" />

      {LOGOTEXT && <p className=" text-gray-50">{LOGOTEXT}</p>}
    </Link>
  );
};

export default Logo;
