import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <div className="lg:w-[71%] px-[23px] py-24  text-lg mx-auto text-color">
          <h3>
            Visit nearbalkans.org and make sure to follow us on our social and
            community channels!
          </h3>
          <div className="lg:flex pt-[39px] w-full lg:w-[540px] lg:mx-auto hover:text-gray-200 cursor-pointer">
            <div className="hover:gray-200">
              <img src="/assets/svgexport-2.svg" alt="near-logo" />
            </div>
            <div className="border-gray-200 border-solid border-r-2 mx-[61px] hidden lg:block"></div>
            <div className="flex items-center lg:ml-auto justify-between">
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/twitter.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/foo.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/fire.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/facebook.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/linkeldn.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/instagram.svg" alt="twitter" />
              </div>
              <div className="lg:px-3 px-2 mt-[40px] lg:mt-0">
                <img src="/assets/points.svg" alt="twitter" />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center gap-10 pt-[39px]">
            <div className="text-lg cursor-pointer  text-center">
              <p>NEAR Balkans 2022</p>
            </div>
            <div className="text-lg cursor-pointer text-center">
              <p>info@nearbalkans.org</p>
            </div>
            <div className="text-lg cursor-pointer text-center">
              <p>Privacy Policy</p>
            </div>
            <div className="text-lg cursor-pointer text-center">
              <p>Cookie Policy</p>
            </div>
            <div className="text-lg cursor-pointer hover:underline text-center">
              <p>Terms & Conditions</p>
            </div>
          </div>
          <h3 className="pt-[34px] text-center">
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and Slovenia
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
