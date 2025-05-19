import Image from "next/image";

import notFoundImage from "@/public/resources/404Illustration.jpg";
import LogoPNG from "@/public/LogoPNG.png";

const NotFoundPage = () => {
  return (
    <>
      <main className="flex flex-col text-center justify-center items-center h-screen w-full">
        <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
          <div>
            <Image priority src={notFoundImage} alt="Illustration of a UFO with 404 error" height={300} />
            <h3 className="text-2xl font-normal text-white bg-blue-600 py-3 rounded-full">404 Not Found</h3>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Whoops! That page doesn’t exist.</h2>
            <p className="text-gray-500 pt-4 text-lg">
              The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-lg">Here are some helpful links instead:</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="/" className="hover:underline hover:text-gray-700 transition-colors">
                Home
              </a>
              <a href="/register" className="hover:underline hover:text-gray-700 transition-colors">
                Register
              </a>
              <a href="/dashboard" className="hover:underline hover:text-gray-700 transition-colors">
                Dashboard
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full pb-8 justify-center text-center flex flex-col items-center border-t border-gray-200 bg-white py-12 mt-12 gap-4">
        <div className="flex items-center gap-4">
          <Image src={LogoPNG} alt="Freelanceo Logo" height={42} className="bg-blue-600 p-2 rounded-xl" />
          <span className="text-xl font-bold">Freelanceo</span>
        </div>
        <div className="mt-8pt-6">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Freelanceo | Franco Galfre. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default NotFoundPage;
