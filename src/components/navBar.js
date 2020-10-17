import { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <header className="text-gray-500 bg-transparent body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="scale-100 transform hover:scale-110 transition duration-300">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl text-black font-bold">
                Victor1890
              </span>
            </a>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/*test */}
            <a className="inline-flex items-center bg-transparent border-5 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-900 mt-4 md:mt-0">
              First Link
            </a>
            <a className="inline-flex items-center bg-transparent border-5 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-900 mt-4 md:mt-0">
              Second Link
            </a>
            <a className="inline-flex items-center bg-transparent border-5 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-900 mt-4 md:mt-0">
              Third Link
            </a>
            <a className="inline-flex items-center bg-transparent border-5 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-900 mt-4 md:mt-0">
              Fourth Link
            </a>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
export default NavBar;
