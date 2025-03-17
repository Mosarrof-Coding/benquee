import Image from "next/image";
import Link from "next/link";
import chevdown from "@/public/chevdown.png";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";
import card4 from "@/public/card4.png";
import card5 from "@/public/card5.png";
import checkmark from "@/public/checkmark.png";
import appimg from "@/public/app.png";
import appimg1 from "@/public/app1.png";
import appimg2 from "@/public/app2.png";
import onebanksatcs from "@/public/bankStaticstics.png";
import bankCard1 from "@/public/bankCard1.png";
import bankCard2 from "@/public/bankCard2.png";
import bankCard3 from "@/public/bankCard3.png";
import gridcard from "@/public/grid.png";
import gridcard1 from "@/public/grid2.png";
import gridcard2 from "@/public/grid3.png";
import choosecard from "@/public/choosecard.png";
import choosecard1 from "@/public/choosecard1.png";
import choosecard2 from "@/public/choosecard2.png";
import checkmark2 from "@/public/checkmark2.png";
import ctacard from "@/public/ctacard.png";
import applstor from "@/public/Apple_store.png";
import googlestor from "@/public/google_store.png";
import phone from "@/public/phone.png";
import mailing from "@/public/mailing.png";
import buttontxt from "@/public/button-text.png";
import column from "@/public/column.png";

export default function Home() {
  return (
    <section className="">
      {/* hero */}
      <div className="bg-[#e8f2ee]">
        <div className="max-w-[832px] px-4 mx-auto text-center xl:min-h-[57vh] py-14 md:py-18 lg:py-20 xl:pt-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[80px] mb-1 text-[#1a191e] font-medium">
            All in one Card
          </h1>
          <h6 className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[1.8] text-[#1a191e90] max-w-[500px] mx-auto">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </h6>
          <div className="button w-fit mx-auto flex items-center justify-center flex-wrap gap-2 sm:gap-4 lg:gap-6 xl:gap-8 pt-6 md:pt-8 lg:pt-12 mb-8">
            <Link
              href={"user/account"}
              className="text-[14px] sm:text-[16px] lg:text-[18px] tracking-tight py-1 sm:py-2 lg:py-3 xl:py-4 px-2 sm:px-3 lg:px-4 xl:px-6 rounded-[3px] lg:rounded-[6px] bg-[#5bb5a2] text-white"
            >
              Open Account
            </Link>
            <div>
              <button className="text-[#5bb5a2] text-[14px] sm:text-[16px] lg:text-[18px] tracking-tight flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                Compare Card
                <span>
                  <Image
                    src={chevdown}
                    alt="chevdown image"
                    width={0}
                    className="w-3 lg:w-4"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="cards flex justify-between items-end gap-1 sm:gap-2 lg:gap-4">
          <div className="card">
            <Image src={card1} alt="card1 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card2} alt="card2 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card3} alt="card3 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card4} alt="card4 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card5} alt="card5 image" width={0} height={0} />
          </div>
        </div>
      </div>

      {/* transaction */}
      <div className="mt-10 md:mt-14 xl:mt-18">
        <div className="cmnView">
          <div className="cmnHeading">
            <h6 className="">Transation</h6>
            <h2 className="">Send & receive money instantly</h2>
            <p className="mb-4 lg:mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-1 lg:gap-2">
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Malesuada Ipsum
              </h6>
              <h6 className="leading-[1.4] lg:leading-[1.8] text-[#E1C69D] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Vestibulum
              </h6>
              <h6 className="leading-[1.4] lg:leading-[1.8] text-[#E1C69D] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Parturient Lorem
              </h6>
            </div>
          </div>
          <div className="p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px]">
            <Image
              src={appimg}
              alt="appimg image"
              width={0}
              height={0}
              className="tranImage"
            />
          </div>
        </div>

        {/* cards */}
        <div className="cmnView">
          <div className="cmnHeading">
            <h6 className="">Cards</h6>
            <h2 className="">Manage Your Account</h2>
            <p className="mb-4 lg:mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-1 lg:gap-2">
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Malesuada Ipsum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Vestibulum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Parturient Lorem
              </h6>
            </div>
          </div>
          <div className="p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px]">
            <Image
              src={appimg1}
              alt="appimg image"
              width={0}
              height={0}
              className="tranImage"
            />
          </div>
        </div>

        {/* statistics */}
        <div className="cmnView">
          <div className="cmnHeading">
            <h6 className="">Advanched Statistics</h6>
            <h2 className="">Keep control over your money</h2>
            <p className="mb-4 lg:mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-1 lg:gap-2">
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Malesuada Ipsum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Vestibulum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Parturient Lorem
              </h6>
            </div>
          </div>
          <div className="p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px]">
            <Image
              src={appimg2}
              alt="appimg image"
              width={0}
              height={0}
              className="tranImage"
            />
          </div>
        </div>

        {/* saving account */}
        <div className="cmnView">
          <div className="cmnHeading">
            <h6 className="">Saving Accounts</h6>
            <h2 className="">Lorem ipsum dolor sit.</h2>
            <p className="mb-4 lg:mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-1 lg:gap-2">
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Malesuada Ipsum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Vestibulum
              </h6>
              <h6 className="categorys">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                  <Image
                    src={checkmark}
                    alt="checkmark image"
                    width={0}
                    height={0}
                  />
                </span>
                Parturient Lorem
              </h6>
            </div>
          </div>
          <div className="p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px]">
            <Image
              src={appimg2}
              alt="appimg image"
              width={0}
              height={0}
              className="tranImage"
            />
          </div>
        </div>
      </div>
      {/* one bank */}
      <div className="my-10 md:my-14 xl:my-18">
        <div className="cmnView2">
          <div className="cmnSubheading">
            <li className="cmnLi">
              All in one bank.
              <br className="" /> Really.
            </li>
            <h6 className="max-w-[460px] mx-auto">
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </h6>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
            <div className="onecard">
              <div className="onebnkheding text-center">
                <h3 className="h3">Statistics</h3>
                <p className="max-w-[460px] mx-auto px-2">
                  Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                  et leo duis ut diam.
                </p>
              </div>
              <div className="onrimg">
                <Image
                  src={onebanksatcs}
                  alt="onebanksatcs image"
                  width={0}
                  height={0}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="onecard">
              <div className="onebnkheding text-center">
                <h3 className="h3">Cards</h3>
                <p className="max-w-[460px] mx-auto px-2">
                  Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                  et leo duis ut diam.
                </p>
              </div>

              <div className="onrimg flex justify-between items-end gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
                <div className="onrimg">
                  <Image
                    src={bankCard1}
                    alt="bankCard1 image"
                    width={0}
                    height={0}
                    className="mx-auto"
                  />
                </div>
                <div className="onrimg">
                  <Image
                    src={bankCard2}
                    alt="bankCard2 image"
                    width={0}
                    height={0}
                    className="mx-auto"
                  />
                </div>
                <div className="onrimg">
                  <Image
                    src={bankCard3}
                    alt="bankCard3 image"
                    width={0}
                    height={0}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mt-4 lg:mt-6 xl:mt-8">
            <div className="onecard">
              <div className="text-center sm:text-left mx-auto">
                <h3 className="h3 ml-2">
                  Easy <br className="hidden sm:block" /> integration
                </h3>
                <p className="max-w-[460px] mx-auto px-2">
                  Lorem ipsum dolor sit amet, <br className="hidden sm:block" />{" "}
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="onrimg">
                <Image
                  src={gridcard}
                  alt="gridcard image"
                  width={0}
                  height={0}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="onecard">
              <div className="text-center sm:text-left mx-auto">
                <div>
                  <h3 className="h3 ml-2">
                    Savings <br className="hidden sm:block" /> Accounts
                  </h3>
                  <p className="max-w-[460px] mx-auto px-2">
                    Lorem ipsum dolor sit amet,{" "}
                    <br className="hidden sm:block" />
                    consectetur adipiscing elit.
                  </p>
                  <div className="onrimg">
                    <Image
                      src={gridcard1}
                      alt="gridcard image"
                      width={0}
                      height={0}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="onecard">
              <div className="text-center sm:text-left mx-auto">
                <div>
                  <h3 className="h3 ml-2">
                    Instant <br className="hidden sm:block" /> transactions
                  </h3>
                  <p className="max-w-[460px] mx-auto px-2">
                    Lorem ipsum dolor sit amet,{" "}
                    <br className="hidden sm:block" /> consectetur adipiscing
                    elit.
                  </p>
                  <div className="onrimg">
                    <Image
                      src={gridcard2}
                      alt="gridcard2 image"
                      width={0}
                      height={0}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* choosing card */}
      <div className="cmnView2">
        <div className="max-w-[540px] mx-auto text-center pb-12 md:pb-16 xl:pb-18">
          <h6 className="">Accounts</h6>
          <li className="cmnLi">Choose your card</li>
          <h6 className="max-w-[460px] mx-auto">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </h6>
        </div>
        <div className="membershipcard max-w-[746px] lg:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-14">
          <div className="membercard text-center">
            <h6 className="price">
              Basic
              <span className="priceCategory">Popular</span>
            </h6>
            <h3 className="h3 mb-2">Free</h3>
            <p className="max-w-[300px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6 w-fit mx-auto pt-5 lg:pt-6">
              <Image
                src={choosecard}
                alt="choosecard image"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>

          <div className="membercard text-center">
            <h6 className="price">Premium</h6>
            <h3 className="h3 mb-2 w-fit mx-auto flex items-end gap-3">
              Deduct $5
              <span className="text-[10px] lg:text-[12px] leading-[1.8] text-[#1a191e80] rounded-[4px]">
                per month
              </span>
            </h3>
            <p className="max-w-[300px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6 w-fit mx-auto pt-5 lg:pt-6">
              <Image
                src={choosecard1}
                alt="choosecard1 image"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>

          <div className="membercard text-center">
            <h6 className="price">Gold</h6>
            <h3 className="h3 mb-2 w-fit mx-auto flex items-end gap-3">
              Deduct $10
              <span className="text-[10px] lg:text-[12px] leading-[1.8] text-[#1a191e80] rounded-[4px]">
                per month
              </span>
            </h3>
            <p className="max-w-[300px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6 w-fit mx-auto pt-5 lg:pt-6">
              <Image
                src={choosecard2}
                alt="choosecard2 image"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>
        </div>
      </div>

      {/* one app */}
      <div className="ctabtn max-w-[1232px] px-2 mx-2 xl:mx-auto my-14 lg:my-18 xl:my-20 bg-[#5bb5a2] rounded-xl lg:rounded-2xl flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="left w-full py-6 md:py-8 lg:py-12 xl:py-20 px-2 sm:px-4 lg:px-8 xl:pl-[76px]">
          <h2 className="mb-3 lg:mb-6 xl:mb-8 text-white">
            One app. <br /> One banking
          </h2>
          <p className="mb-3 sm:mb-4 lg:mb-7 text-yellow-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="flex flex-col gap-2 lg:gap-4 w-fit">
              <h6 className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image
                    src={checkmark2}
                    alt="checkmark2 image"
                    width={0}
                    height={0}
                    className=""
                  />
                </span>
                Instant transation
              </h6>
              <h6 className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                Saving Accounts
              </h6>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 w-fit">
              <h6 className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                Payment worldwide
              </h6>
              <h6 className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                100% mobile banking
              </h6>
            </div>
          </div>
          <div className="ctabtns flex flex-wrap gap-4">
            <button className="cursor-pointer">
              <Image
                src={applstor}
                alt="applstor image"
                width={0}
                height={0}
                className="max-w-[94px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[130px]"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src={googlestor}
                alt="googlestor image"
                width={0}
                height={0}
                className="max-w-[94px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[130px]"
              />
            </button>
          </div>
        </div>
        <div className="pt-10 sm:pt-12 lg:pt-16 xl:pt-24 sm:pr-4 lg:pr-8 xl:pr-12 2xl:pr-16 flex justify-center md:justify-end">
          <Image
            src={ctacard}
            alt="ctacard image"
            width={0}
            height={0}
            className="max-w-[260px] lg:max-w-[320px]"
          />
        </div>
      </div>

      {/* suport */}
      <div className="ctabtn max-w-[1232px] mx-auto px-4 grid grid-cols-12 py-10 lg:py-12 xl:py-16">
        <div className="col-span-11 md:col-span-4 mb-8">
          <h2 className="sm:pb-2 lg:pb-4">Need help?</h2>
          <div className="phone flex items-center gap-3 lg:gap-6 mb-4 lg:mb-8">
            <Image
              src={phone}
              alt="phone image"
              width={0}
              height={0}
              className="w-8 sm:w-10"
            />
            <div className="phone">
              <a href="tel:+008012345678">
                <button className="text-[16px] xl:text-[18px] font-medium leading-[1.4] tracking-tight text-[#1a191e] cursor-pointer">
                  +008 012345678
                </button>
              </a>
              <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80]">
                Support Hotline
              </p>
            </div>
          </div>
          <div className="phone flex items-center gap-3 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            <Image
              src={mailing}
              alt="mailing image"
              width={0}
              height={0}
              className="w-8 sm:w-10"
            />
            <div className="phone">
              <a href="mailto:help@benquee.com">
                <button className="hotline text-[16px] xl:text-[18px] font-medium leading-[1.4] tracking-tight text-[#1a191e] cursor-pointer">
                  help@benquee.com
                </button>
              </a>

              <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80]">
                Support Email
              </p>
            </div>
          </div>
          <button className="cursor-pointer">
            <Image
              src={buttontxt}
              alt="buttontxt image"
              width={0}
              height={0}
              className="max-w-20 sm:max-w-24 lg:max-w-full"
            />
          </button>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Image
            src={column}
            alt="banco image"
            width={0}
            height={0}
            className="md:ms-auto"
          />
        </div>
      </div>
    </section>
  );
}
