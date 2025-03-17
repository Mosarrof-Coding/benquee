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
        <div className="heading max-w-[832px] px-4 mx-auto text-center min-h-[57vh] py-14 md:py-12 lg:py-16 xl:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[80px] leading-[1.1] text-[#1a191e] font-medium">
            All in one Card
          </h1>
          <h6 className="text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[1.8] text-[#1a191e] max-w-[500px] mx-auto">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </h6>
          <div className="button w-fit mx-auto flex items-center justify-center flex-wrap gap-4 lg:gap-8 pt-6 md:pt-8">
            <Link
              href={"user/account"}
              className="text-[16px] lg:text-[18px] tracking-[-0.03em] py-2 lg:py-4 px-4 lg:px-6 rounded-[6px] bg-[#5bb5a2] text-white"
            >
              Open Account
            </Link>
            <div>
              <button className="text-[#5bb5a2] text-[16px] lg:text-[18px] tracking-tight flex items-center gap-2 cursor-pointer">
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
        <div className="cards flex justify-between items-end gap-4">
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

      {/* transation */}
      <div className="transation max-w-[1232px] px-4 mx-auto flex items-center justify-between gap-12 py-[80px]">
        <div className="heading1 max-w-[538px]">
          <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
            Transation
          </h6>
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            Send & receive money instantly
          </h2>
          <p className="text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Malesuada Ipsum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Vestibulum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="pr-[110px]">
          <Image src={appimg} alt="appimg image" />
        </div>
      </div>
      {/* cards */}
      <div className="cards max-w-[1232px] px-4 mx-auto flex items-center justify-between gap-12 py-[80px]">
        <div className="heading1 max-w-[538px]">
          <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
            Cards
          </h6>
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            Manage Your Account
          </h2>
          <p className="text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Malesuada Ipsum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Vestibulum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="pr-[110px]">
          <Image src={appimg1} alt="appimg image" />
        </div>
      </div>
      {/* statistics */}
      <div className="statistics max-w-[1232px] px-4 mx-auto flex items-center justify-between gap-12 py-[80px]">
        <div className="heading1 max-w-[538px]">
          <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
            Advanched Statistics
          </h6>
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            Keep control over your money
          </h2>
          <p className="text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Malesuada Ipsum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Vestibulum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="pr-[110px]">
          <Image src={appimg2} alt="appimg image" />
        </div>
      </div>
      {/* saving account */}
      <div className="statistics max-w-[1232px] px-4 mx-auto flex items-center justify-between gap-12 py-[80px]">
        <div className="heading1 max-w-[538px]">
          <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
            Saving Accounts
          </h6>
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            Lorem ipsum dolor sit.
          </h2>
          <p className="text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Malesuada Ipsum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Vestibulum
            </li>
            <li className="text-[18px] font-medium leading-[1.8] text-[#1a191e] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full grid place-items-center bg-[#e8f2ee]">
                <Image src={checkmark} alt="checkmark image" />
              </span>
              Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="pr-[110px]">
          <Image src={appimg2} alt="appimg image" />
        </div>
      </div>

      {/* one bank */}
      <div className="bank max-w-[1232px] px-4 mx-auto py-[80px]">
        <div className="heading4 max-w-[660px] mx-auto text-center pb-[72px]">
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            All in one bank. Really.
          </h2>
          <p className="max-w-[460px] mx-auto text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
        </div>
        {/* statistics */}
        <div className="grid grid-cols-2 gap-8">
          <div className="onecard bg-[#f8f8f8] mx-auto w-full pt-[64px] rounded-[20px]">
            <div className="onebnkheding text-center">
              <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                Statistics
              </h3>
              <p className="max-w-[460px] mx-auto text-[18px] font-medium leading-[1.8] text-[#1a191e80] mb-[73px]">
                Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                et leo duis ut diam.
              </p>
            </div>
            <div className="onrimg">
              <Image
                src={onebanksatcs}
                alt="onebanksatcs image"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="onecard bg-[#f8f8f8] mx-auto w-full pt-[64px] rounded-[20px]">
            <div className="onebnkheding text-center">
              <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                Cards
              </h3>
              <p className="max-w-[460px] mx-auto text-[18px] font-medium leading-[1.8] text-[#1a191e80] mb-[73px]">
                Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                et leo duis ut diam.
              </p>
            </div>
            <div className="bankCards flex justify-between items-end gap-5">
              <div className="card">
                <Image
                  src={bankCard1}
                  alt="bankCard1 image"
                  className="mx-auto"
                />
              </div>
              <div className="card">
                <Image
                  src={bankCard2}
                  alt="bankCard2 image"
                  className="mx-auto"
                />
              </div>
              <div className="card">
                <Image
                  src={bankCard3}
                  alt="bankCard3 image"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="easyIntegretion rounded-[20px] bg-[#f8f8f8] w-full">
            <div className="onebnkheding max-w-[300px] pt-[56px] mx-auto">
              <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                Easy <br /> integration
              </h3>
              <p className="max-w-[460px] mx-auto text-[18px] font-medium leading-[1.8] text-[#1a191e80] mb-[73px]">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <Image src={gridcard} alt="gridcard image" />
            </div>
          </div>
          <div className="easyIntegretion rounded-[20px] bg-[#f8f8f8] w-full">
            <div className="onebnkheding max-w-[300px] pt-[56px] ms-auto">
              <div>
                <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                  Savings <br /> Accounts
                </h3>
                <p className="max-w-[460px] mx-auto text-[18px] font-medium leading-[1.8] text-[#1a191e80] mb-[73px]">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
                <div>
                  <Image src={gridcard1} alt="gridcard image" />
                </div>
              </div>
            </div>
          </div>
          <div className="easyIntegretion rounded-[20px] bg-[#f8f8f8] w-full">
            <div className="onebnkheding max-w-[300px] pt-[56px] ms-auto">
              <div>
                <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
                  Instant <br /> transactions
                </h3>
                <p className="max-w-[460px] mx-auto text-[18px] font-medium leading-[1.8] text-[#1a191e80] mb-[73px]">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
                <div>
                  <Image src={gridcard2} alt="gridcard2 image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choosing card */}
      <div className="chosingcard max-w-[1232px] px-4 mx-auto py-[80px]">
        <div className="heading4 max-w-[660px] mx-auto text-center pb-[72px]">
          <h6 className="text-[20px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
            Accounts
          </h6>
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-4">
            Choose your card
          </h2>
          <p className="max-w-[460px] mx-auto text-[17px] font-medium leading-[1.8] text-[#1a191e] mb-8">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
        </div>
        <div className="membershipcard grid grid-cols-3 gap-16">
          <div className="membercard text-center">
            <h6 className="flex items-center gap-3 text-[20px] leading-[1.2] tracking-tight text-[#1a191e] font-medium w-fit mx-auto mb-6">
              Basic
              <span className="text-[12px] px-3 leading-[1.8] text-[#5bb5a2] bg-[#e8f2ee] rounded-[4px]">
                Popular
              </span>
            </h6>
            <h3 className="text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2">
              Free
            </h3>
            <p className="text-[16px] font-medium leading-[1.6] text-[#1a191e80] max-w-[300px] mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6">
              <Image src={choosecard} alt="choosecard image" />
            </div>

            <button className="w-full text-[15px] font-medium leading-[1] text-white bg-[#5bb5a2] rounded-[6px] px-4 py-3 cursor-pointer">
              Get started
            </button>
          </div>
          <div className="membercard text-center">
            <h6 className="text-[20px] leading-[1.2] tracking-tight text-[#1a191e] font-medium w-fit mx-auto mb-6">
              Premium
            </h6>
            <h3 className="w-fit mx-auto text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2 flex items-end gap-3">
              $5
              <span className="text-[12px] leading-[1.8] text-[#1a191e80] rounded-[4px]">
                per month
              </span>
            </h3>
            <p className="text-[16px] font-medium leading-[1.6] text-[#1a191e80] max-w-[300px] mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6">
              <Image src={choosecard1} alt="choosecard1 image" />
            </div>

            <button className="w-full text-[15px] font-medium leading-[1] text-white bg-[#5bb5a2] rounded-[6px] px-4 py-3 cursor-pointer">
              Get started
            </button>
          </div>
          <div className="membercard text-center">
            <h6 className="text-[20px] leading-[1.2] tracking-tight text-[#1a191e] font-medium w-fit mx-auto mb-6">
              Gold
            </h6>
            <h3 className="w-fit mx-auto text-[40px] font-medium leading-[1.2] tracking-tight text-[#1a191e] mb-2 flex items-end gap-3">
              $10
              <span className="text-[12px] leading-[1.8] text-[#1a191e80] rounded-[4px]">
                per month
              </span>
            </h3>
            <p className="text-[16px] font-medium leading-[1.6] text-[#1a191e80] max-w-[300px] mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mb-6">
              <Image src={choosecard2} alt="choosecard2 image" />
            </div>

            <button className="w-full text-[15px] font-medium leading-[1] text-white bg-[#5bb5a2] rounded-[6px] px-4 py-3 cursor-pointer">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="ctabtn max-w-[1232px] px-4 mx-auto mt-[80px] mb-[80px] bg-[#5bb5a2] rounded-[20px] grid grid-cols-2 gap-[108px]">
        <div className="left max-w-[524px] py-20 pl-[76px]">
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-white mb-3">
            One app. <br /> One banking
          </h2>
          <p className="text-[18px] text-white leading-[1.8] mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex gap-16 mb-10">
            <ul className="flex flex-col gap-4">
              <li className="text-[16px] font-medium leading-[1.6] text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                Instant transation
              </li>
              <li className="text-[16px] font-medium leading-[1.6] text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                Saving Accounts
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-[16px] font-medium leading-[1.6] text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                Payment worldwide
              </li>
              <li className="text-[16px] font-medium leading-[1.6] text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#ffffff33] text-white">
                  <Image src={checkmark2} alt="checkmark2 image" />
                </span>
                100% mobile banking
              </li>
            </ul>
          </div>
          <div className="ctabtns flex gap-4">
            <button className="cursor-pointer">
              <Image src={applstor} alt="applstor image" />
            </button>
            <button className="cursor-pointer">
              <Image src={googlestor} alt="googlestor image" />
            </button>
          </div>
        </div>
        <div className="right pt-[113px] pr-[112px]">
          <Image src={ctacard} alt="ctacard image" />
        </div>
      </div>

      {/* suport */}
      <div className="ctabtn max-w-[1232px] px-4 mx-auto grid grid-cols-2 gap-16 lg:gap-[108px] py-24">
        <div className="dialing">
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight text-[#1a191e] mb-12">
            Need help?
          </h2>
          <div className="phone flex items-center gap-6 mb-8">
            <Image src={phone} alt="phone image" />
            <div className="phone">
              <a href="tel:+008012345678">
                <button className="text-[18px] font-medium leading-[1.4] tracking-tight text-[#1a191e] cursor-pointer">
                  +008 012345678
                </button>
              </a>
              <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80]">
                Support Hotline
              </p>
            </div>
          </div>
          <div className="phone flex items-center gap-6 mb-12">
            <Image src={mailing} alt="mailing image" />
            <div className="phone">
              <a href="mailto:help@benquee.com">
                <button className="hotline text-[18px] font-medium leading-[1.4] tracking-tight text-[#1a191e] cursor-pointer">
                  help@benquee.com
                </button>
              </a>

              <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80]">
                Support Email
              </p>
            </div>
          </div>
          <button className="cursor-pointer">
            <Image src={buttontxt} alt="buttontxt image" />
          </button>
        </div>
        <div>
          <Image src={column} alt="banco image" />
        </div>
      </div>
    </section>
  );
}
