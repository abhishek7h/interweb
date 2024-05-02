/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 lg:mt-30px  items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Hello, I am <span className="text-xt">Abhishek Hari</span>
        </h1>
        <p className="">
          I'm a developer, tech enthusiast, writer and photographer.
        </p>
      </div>

      <div className="flex mt-8 gap-2">
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            <a
              href="https://twitter.com/abhishek7h"
              className="text-xt hover:text-white rounded-full glow p-2"
              target="_blank"
            >
              <FaTwitter className="text-[28px]" />
            </a>
            <a
              href="https://github.com/abhishek7h"
              className="text-xt hover:text-white rounded-full glow p-2"
              target="_blank"
            >
              <AiFillGithub className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-25 mt-10 lg:flex justify-center items-center">
        {/* Image for both desktop and mobile */}
        <div className="lg:mr-4">
          <img
            // src={require("../assets/temple.jpeg")}
            src="https://pbs.twimg.com/profile_images/1741807653201080321/YZqzs1Hy_400x400.jpg"
            alt="My Memoji"
            className="h-auto w-auto rounded-full border-2 p-1 img_glow lg:mt-10 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
