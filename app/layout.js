import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import dchevron from "@/public/dchevron.png";
// icons

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "benquee.",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between bg-white overflow-hidden`}
      >
        {/* heder */}
        <header className="w-full h-16 lg:h-22 bg-white flex items-center font-geist-sans">
          <nav className="w-[1432px] px-4 mx-auto flex items-center justify-between gap-6">
            <div>
              <Link
                href={"/"}
                className="logo text-[#5bb5a2] text-2xl lg:text-[28px] :text-[36px] font-bold"
              >
                banquee.
              </Link>
            </div>

            <ul className="hidden md:flex items-center gap-3 xl:gap-4">
              <li>
                <Link
                  href={"/features"}
                  className="p-[6px_6px_6px_10px] lg:p-[8px_8px_8px_12px] text-[16px] font-medium text-[#1A191E] hover:bg-[#f8f8f8] transition rounded-md"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href={"/compeare"}
                  className="p-[6px_6px_6px_10px] lg:p-[8px_8px_8px_12px] text-[16px] font-medium text-[#1A191E] flex items-center hover:bg-[#f8f8f8] transition rounded-md"
                >
                  Compare
                  <span className="inline-flex ml-2">
                    <Image src={dchevron} alt="dchevron" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/support"}
                  className="p-[6px_6px_6px_10px] lg:p-[8px_8px_8px_12px] text-[16px] font-medium text-[#1A191E] hover:bg-[#f8f8f8] transition rounded-md"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className="p-[6px_6px_6px_10px] lg:p-[8px_8px_8px_12px] text-[16px] font-medium text-[#1A191E] flex items-center hover:bg-[#f8f8f8] transition rounded-md"
                >
                  Blog
                  <span className="inline-flex ml-2">
                    <Image src={dchevron} alt="thumb image" />
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                href={"/user/login"}
                className="text-[#5bb5a2] text-[18px] font-bold"
              >
                Login
              </Link>
              <Link
                href={"/user/account"}
                className="py-1.5 xl:py-3 px-3 xl:px-4 rounded-[6px] bg-[#5bb5a2] text-[15px] text-white font-medium text-nowrap"
              >
                Open Account
              </Link>
            </ul>
            <div className="mobile-nave block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>

        {/* rest component */}
        <main className="flex-1">{children}</main>

        {/* footer */}
        <footer className="mt-20 mb-12 px-4 font-geist-mono border-t border-[#e8e8e8]">
          <nav className="max-w-[1432px] mx-auto flex justify-between flex-wrap gap-6 pt-24 pb-20 border-b border-[#e8e8e8]">
            <Link
              href={"/"}
              className="logo text-[#5bb5a2] text-[36px] font-bold w-[435px]"
            >
              banquee.
            </Link>
            <div className="w-[965px] flex justify-between pt-4">
              <div>
                <h4 className="font-medium text-[18px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] mb-8">
                  About
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="/about"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Blog Section */}
              <div>
                <h4 className="font-medium text-[18px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] mb-8">
                  Blog
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="/blog/products"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/technology"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/crypto"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Crypto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Webflow Section */}
              <div>
                <h4 className="font-medium text-[18px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] mb-8">
                  Webflow
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="/webflow/styleguide"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Styleguide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/webflow/licensing"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Licensing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/webflow/changelog"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div>
                <h4 className="font-medium text-[18px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] mb-8">
                  Social Media
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[16px] leading-[1.6] text-[#1a191e80] hover:text-[#1A191E]"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="copyright pt-4">
            <div className="powerd w-[1400px] mx-auto flex justify-between">
              <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80]">
                © Made by{" "}
                <span className="text-[#5bb5a2]">
                  <a
                    href="http://www.w3c.com"
                    target="_blunk"
                    rel="noopener noreferrer"
                  >
                    Pawel Gola
                  </a>
                </span>{" "}
                - Powered by
                <span className="text-[#5bb5a2]">
                  {" "}
                  <a
                    href="http://www.w3c.com"
                    target="_blunk"
                    rel="noopener noreferrer"
                  >
                    Webflow
                  </a>
                </span>
              </p>
              <ul className="text-[14px] font-medium leading-[1.6] text-[#1a191e80] flex items-center gap-8">
                <li className="cursor-pointer">Impressum</li>
                <li className="cursor-pointer">Mission</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
