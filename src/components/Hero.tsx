import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";


export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip ">

      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[100%-120px] "></div>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 border-white/30 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex gap-1 items-center">
              <span>Read more </span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center mt-8 inline-flex ">
            Streamlined Media <br /> Precision with AI
          </h1>
          <Image src={cursorImage} alt="" height={200} width={200} className="absolute right-[720px] top-[120px] hidden sm:inline"/>
          <Image src={messageImage} alt="" height={200} width={200} className="absolute left-[780px] -top-[86px] hidden sm:inline"/>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 text-center text-xl max-w-xl">
            Streamlined Media, Precision with AI delivers cutting-edge image
            ratio generation and video compression with unparalleled accuracy.
            Harness the power of Cloudinary’s AI technology for real-time
            processing and seamless integration, ensuring superior quality and
            efficiency.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="font-bold bg-white text-black rounded-lg py-3 px-5">
            Get For Free
          </button>
        </div>
      </div>
    </div>
  );
};
