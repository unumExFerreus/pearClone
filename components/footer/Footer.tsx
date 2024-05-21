import { footerLinks } from "@/utils";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full text-xs text-[#fff]/60 bg-[#1D1D1D] px-[16px] md:px-[45px] xl:px-[17%] 2xl:px-[25%] 3xl:px[33%] mt-[100px] md:mt-[200px]">
        <div className="flex justify-between pt-6 pb-4">
          <span>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 0-000-00-000.
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t-[1px] border-[#535355] py-4">
          <div className="flex mb-2 md:mb-0">
            <span>All rights reserved.</span>
          </div>

          <div>
            <ul className="flex flex-col md:flex-row justify-center  cursor-pointer">
              {footerLinks.map((list, index) => (
                <li className="mr-2 bri" key={index}>
                  {list}
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
