import { HeroAnimation } from "@components/HeroAnimation";
import Head from "next/head";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>AboveAverage | Not Found</title>
      </Head>
      <HeroAnimation />
      <div className="relative z-[2] grid min-h-screen animate-fadein place-items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="mt-3 text-4xl font-bold tracking-tight text-red-900 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-400 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again <br />
                  If you were redirected here, I&apos;m probably working on it!
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/"
                  className="sm:text-md ml-0 text-lg font-normal text-gray-600 hover:text-red-900 lg:-ml-[6rem]"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
