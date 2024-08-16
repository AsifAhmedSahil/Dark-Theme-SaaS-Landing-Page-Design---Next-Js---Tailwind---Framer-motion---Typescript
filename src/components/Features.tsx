import Feature from "./Feature";



const features = [
  {
    "title": "Real-Time Optimization",
    "description": "Achieve instant media enhancement with real-time image ratio generation and video compression, ensuring optimal quality and performance for your content without delays."
  },
  {
    "title": "Seamless API Integration",
    "description": "Effortlessly integrate Pixle-Pulse AI with your existing systems through our intuitive API, streamlining your workflow and enhancing media management across platforms."
  },
  {
    "title": "Scalable Solutions",
    "description": "Benefit from scalable media processing solutions that grow with your needs, providing high-quality, efficient optimization regardless of your content volume."
  }
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>EveryThing You Need</h2>
        <div className='max-w-sm md:max-w-[750px] mx-auto'>
        <p className='text-center mt-5 text-xl text-white/70'>Pixle-Pulse AI brings cutting-edge technology to media optimization with a suite of powerful features designed to enhance your content management. Real-Time Optimization ensures that your images and videos are instantly adjusted for the best quality and performance, without any delays.</p>
        </div>

        <div className='mt-16 flex gap-4 flex-col md:flex-row sm:flex-1'>
            {
              features.map((item,index)=>(
                <Feature title={item.title} description={item.description} key={index}/>
              ))
            }
        </div>
      </div>

    </div>
  );
};
