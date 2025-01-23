import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex  items-center gap-2">
      <img src={"/me.png"} className=" w-12 rounded-full" alt="logo" />

      <p className=" text-gray-50">NOOR</p>
    </Link>
  );
};

export default Logo;
