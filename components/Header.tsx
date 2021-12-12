import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, useState, useEffect } from "react";

const menu = [
  {
    ariaLabel: "Who We Are",
    title: "Who We Are",
    text: "Who We Are",
    href: "/#who-we-are",
  },
  {
    ariaLabel: "Activities",
    title: "Activities",
    text: "Activities",
    href: "/#activities",
  },
  {
    ariaLabel: "Roadmap",
    title: "Roadmap",
    text: "Roadmap",
    href: "/#roadmap",
  },
  {
    ariaLabel: "FAQ",
    title: "FAQ",
    text: "FAQ",
    href: "/#faq",
  },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black fixed w-full top-0 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/#home">
            <a
              aria-label="ClubDAO"
              title="ClubDAO"
              className="inline-flex items-center"
            >
              {/* TODO Add logo (SVG) */}
              <Image
                src="/logo.png"
                alt="ClubDAO logo"
                layout="fixed"
                width={48}
                height={48}
              />
              <span className="ml-4 text-3xl font-bold tracking-wide text-gray-200 uppercase">
                ClubDAO
              </span>
            </a>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menu.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>
                  <a
                    aria-label={item.ariaLabel}
                    title={item.title}
                    className="font-medium text-xl tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-400"
                  >
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              {/* TODO Add logo (SVG) */}
              <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <a
                          aria-label="ClubDAO"
                          title="ClubDAO"
                          className="inline-flex items-center"
                        >
                          {/* TODO Add logo (SVG) */}
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                            ClubDAO
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-400" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menu.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href}>
                            <a
                              aria-label={item.ariaLabel}
                              title={item.title}
                              className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-gray-400"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.text}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
