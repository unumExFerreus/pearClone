import { footerLinks } from "@/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full text-xs text-[#fff]/60 px-[16px] md:px-[45px] xl:px-[17%] 2xl:px-[25%] 3xl:px[33%] mt-[50px] md:mt-[100px]">
        <div className="flex justify-between pt-6 pb-4">
          <span>
            More ways to shop:{" "}
            <Link href={"/"} className="text-[#147CE5]">
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link href={"/"} className="text-[#147CE5]">
              other retailer
            </Link>{" "}
            near you.
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t-[1px] border-[#535355] py-4">
          <div className="flex mb-2 md:mb-0">
            <span>Copyright © 2024 Me Inc. All rights reserved.</span>
          </div>

          <div>
            <ul className="flex flex-col md:flex-row justify-center">
              {footerLinks.map((list, index) => (
                <li className="mr-2 bri cursor-pointer" key={index}>
                  <Link href={"/"}>{list}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 md:mt-0">
            <span>United States</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
