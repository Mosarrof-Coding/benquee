import Image from "next/image";
// assets
import blogImage from "@/public/blogimg.png";
import blogImage1 from "@/public/blogimg1.png";
import blogImage2 from "@/public/blogimg2.png";
import blogImage3 from "@/public/blogimg3.png";
import blogImage4 from "@/public/blogimg4.png";
import blogImage5 from "@/public/blogimg5.png";

export default function Blog() {
  return (
    <div className="w-full">
      <div className="max-w-[1254px] px-4 pb-20 mx-auto">
        <h1 className="text-[80px] py-24 leading-[1.1] text-[#1a191e] font-medium text-center">
          Blog
        </h1>
        <div className="categories flex gap-8">
          <h6 className="font-medium text-[18px] leading-[1.4] tracking-tight text-[1a191e]">
            Categories
          </h6>
          <ul className="flex gap-8">
            <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
              All
            </li>
            <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
              Products
            </li>
            <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
              Technology
            </li>
            <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
              App
            </li>
          </ul>
        </div>
        <div className="blogcontent grid grid-cols-3 gap-4 lg:gap-8">
          <div className="blocard pt-16">
            <Image src={blogImage} alt="blogimg image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                How To Start Using Banko For Your Startup
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  Technology
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard pt-16">
            <Image src={blogImage1} alt="blogimg1 image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                10 Things Nobody Told You About Banko
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  Technology
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard pt-16">
            <Image src={blogImage2} alt="blogimg2 image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                How To Start Using Banko For Your Startup
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard pt-16">
            <Image src={blogImage3} alt="blogimg3 image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                Why We Love Banko (And You Should, Too!)
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  technology
                </li>
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard pt-16">
            <Image src={blogImage4} alt="blogimg4 image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                5 Principles Of Crypto Investing
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard pt-16">
            <Image src={blogImage5} alt="blogimg5 image" />
            <div className="mt-6">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                7 Things About Banko Your Friends Want To Know
              </h4>
              <p className="font-medium text-[16px] leading-[1.6] text-[#1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[4px] py-1 px-2.5 font-medium text-[13px] text-[#1a191e] cursor-pointer">
                  technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
