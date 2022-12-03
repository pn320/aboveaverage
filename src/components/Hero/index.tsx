export const Hero = () => {
  return (
    <main className="grid min-h-screen animate-fadein place-content-center bg-gray-200">
      <div className="text-center font-sans text-lg font-light md:text-xl lg:text-2xl">
        <span className="text-7xl font-normal md:text-8xl lg:text-9xl ">
          Hi.
        </span>{" "}
        <br /> I love learning, pretty much{" "}
        <span className="italic">everything</span>
        <br />
        <br />
        {/* <span className="animate-fadeinslow text-gray-500 md:text-lg lg:text-xl">
          Press <kbd className="font-sans">⌘</kbd>
          <kbd className="font-sans">K</kbd> to move around quick
        </span> */}
      </div>
    </main>
  );
};
