import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-blackto-gray-800"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg mx-auto items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white font-bold text-4xl sm:text-7xl">
            Hey, I'm <span className="text-xt">Abhishek Hari</span>.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a developer, tech enthusiast, writer and photographer. I play
            and write about football.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2 text-xt">
                <a href="https://x.com/abhishek7h">
                  <FaTwitter className="text-[28px] hover:text-gray-500" />
                </a>
                <a href="https://github.com/abhishek7h">
                  <AiFillGithub className="text-[28px] hover:text-gray-500" />
                </a>
                <a href="https://ah3.medium.com">
                  <FaMedium className="text-[28px] hover:text-gray-500" />
                </a>
                <a href="mailto:hey@abhishekhari.com">
                  <MdEmail className="text-[28px] hover:text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/87843823?v=4"
            alt="A picture of Abhishek Hari"
            className="rounded-2xl md:w-full lg:ml-10 sm:mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
