import Image from "next/image";
// assets
import detailcard from "@/public/detailcard.png";
import facebook from "@/public/facebook.png";
import twitter from "@/public/linkedin.png";
import linkdIn from "@/public/twitter.png";
import instagram from "@/public/insta.png";
import blogImage from "@/public/blogimg.png";
import blogImage1 from "@/public/blogimg1.png";
import blogImage2 from "@/public/blogimg2.png";
import allarticlebtn from "@/public/allarticlebtn.png";
import React from "react";
import Link from "next/link";

export default function blog_details() {
  return (
    <>
      <div className="pt-24 pb-[160px] border-b border-[#e8e8e8]">
        <div className="max-w-[1032px] mx-auto px-4">
          <div className="heading1 max-w-[852px] mx-auto text-center">
            <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-8">
              How To Start Using Banko For Your Startup
            </h2>
            <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2 max-w-[568px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </h6>
          </div>
          <div className="mt-16 max-w-[1000px]">
            <Image src={detailcard} alt="blogcard image" />
            <div className="cardinfo flex flex-col gap-8 pt-16">
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e]">
                Et malesuada fames ac turpis
              </h4>
              <h6 className="font-medium text-[18px] leading-[1.4] tracking-tight text-[1a191e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi blandit cursus risus at ultrices mi tempus imperdiet
                nulla. Odio morbi quis commodo odio. Et malesuada fames ac
                turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin
                aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt
                augue interdum. Ultrices in iaculis nunc sed augue lacus
                viverra.
                <br /> <br /> Erat imperdiet sed euismod nisi porta. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras
                sed felis eget velit aliquet sagittis. Amet commodo nulla
                facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus at augue.
                Blandit aliquam etiam erat velit scelerisque in dictum. In hac
                habitasse platea dictumst vestibulum rhoncus. Molestie ac
                feugiat sed lectus vestibulum.
              </h6>
              <h4 className="font-medium text-[28px] leading-[1.2] tracking-tight text-[#1a191e]">
                Nascetur ridiculus mus
              </h4>
              <h6 className="font-medium text-[18px] leading-[1.4] tracking-tight text-[1a191e]">
                Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis
                orci a scelerisque purus semper eget duis at. Porta lorem mollis
                aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac
                orci phasellus egestas tellus. Mauris cursus mattis molestie a
                iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus
                mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis
                convallis convallis tellus id interdum. Quis ipsum suspendisse
                ultrices gravida dictum fusce. Scelerisque mauris pellentesque
                pulvinar pellentesque. Tincidunt augue interdum velit euismod.
                Nibh tortor id aliquet lectus. Amet commodo nulla facilisi
                nullam. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor
                eu augue ut lectus arcu bibendum.
              </h6>
              <div className="socialmedia w-fit mx-auto text-center mt-8">
                <h6 className="font-medium text-[18px] leading-[1.4] tracking-tight text-[1a191e] mb-4">
                  Share article
                </h6>
                <ul className="flex gap-4 justify-center items-center w-fit mx-auto">
                  <li>
                    <Image
                      src={facebook}
                      alt="facebook image"
                      className="cursor-pointer"
                    />
                  </li>
                  <li>
                    <Image
                      src={linkdIn}
                      alt="linkdIn image"
                      className="cursor-pointer"
                    />
                  </li>
                  <li>
                    <Image
                      src={twitter}
                      alt="twitter image"
                      className="cursor-pointer"
                    />
                  </li>
                  <li>
                    <Image
                      src={instagram}
                      alt="instagram image"
                      className="cursor-pointer"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related product */}
      <div className="related max-w-[1032px] mx-auto px-4">
        <div className="relathead flex justify-between items-end gap-4 pt-[160px]">
          <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e]">
            Related Articles
          </h3>
          <Link href={"/"}>
            <Image
              src={allarticlebtn}
              alt="allarticlebtn image"
              className="cursor-pointer inline-flex"
            />
          </Link>
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
        </div>
      </div>
    </>
  );
}
