import Link from "next/link";
import Image from "next/image";

import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <Button
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
};
export default Navbar;
