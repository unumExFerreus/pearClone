import { footerLinks } from "@/utils";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full text-xs text-[#fff]/60 bg-[#1D1D1D] xs:px-[16px] md:px-[45px] xl:px-[17%] 2xl:px-[25%] 3xl:px[33%] mt-[100px] md:mt-[200px]">
        <div className="flex justify-between pt-6 pb-4">
          <span>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </span>
        </div>

        <div className="flex justify-between border-t-[1px] border-[#535355] py-4">
          <div className="flex">
            <span>Copyright © 2024 Me. All rights reserved.</span>
          </div>

          <div>
            <ul className="flex justify-center cursor-pointer">
              {footerLinks.map((list, index) => (
                <li className="mx-3 bri" key={index}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span>United States</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
