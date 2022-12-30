export const NavBar = () => {
  return (
    <nav className="relative z-[2] mt-4 hidden place-content-center font-sans sm:ml-6 sm:flex sm:space-x-8">
      <a
        href="/"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Home.
      </a>
      <a
        href="blog"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Articles.
      </a>
      <a
        href="#"
        className="x-1 text-md inline-flex items-center pt-1 font-normal text-black hover:text-red-900"
      >
        Thassit.
      </a>
    </nav>
  );
};
