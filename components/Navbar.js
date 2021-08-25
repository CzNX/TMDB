import { Router, useRouter } from "next/dist/client/router";
import config from "../config";

const Navbar = () => {
  const route = useRouter();
  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap space-x-5 overflow-x-scroll scrollbar-hide w-full px-4 lg:justify-center md:pt-5">
        {Object.entries(config).map(([key, { title, url }]) => (
          <h1
            key={url}
            className=" cursor-pointer hover:text-gray-500 active:text-red-500"
            onClick={() => route.push(`/?genre=${key}`)}
          >
            {title}
            {/* {console.log(config[key].url)} */}
          </h1>
        ))}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;
