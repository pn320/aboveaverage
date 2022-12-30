import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="relative z-[2] mt-4 place-content-center font-sans sm:ml-6 sm:flex sm:space-x-8">
      <Link
        href="/"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Home.
      </Link>
      <Link
        href="blog"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Articles.
      </Link>
      <Link
        href="#"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Thassit.
      </Link>
    </nav>
  );
};
