import helixImage from "../assets/images/helix2.png"
import emojiStar from "../assets/images/emojistar.png"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white text-center py-[72px] sm:py-24">
      <div className="container lg:max-w-xl relative">
        <Image src={helixImage} alt="" className="absolute top-6 left-[calc(100%+36px)]"/>
        <Image src={emojiStar} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]"/>
        <h2 className="text-5xl  font-bold ">Get Instant Access</h2>
        <p className="mt-12 text-white/70 text-xl">
        Streamlined Media, Precision with AI delivers cutting-edge image
            ratio generation and video compression with unparalleled accuracy.
            Harness the power of Cloudinary’s AI technology for real-time
            processing and seamless integration, ensuring superior quality and
            efficiency.
        </p>

        <form action="" className="flex flex-col gap-2.5 mt-10 sm:flex-row max-w-sm mx-auto">
          <input type="email" placeholder="Enter Your Email" name="email" className="h-12 bg-white/20 rounded-lg font-medium px-4 placeholder:text-[#9CA3AF] md:flex-1" />
          <button className="h-12 bg-white text-black rounded-lg px-5">Get Access</button>
        </form>

      </div>

    </div>
  );
};
