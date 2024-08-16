import EcosystemIcon from "../assets/icons/ecosystem.svg";

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border relative border-white/30 px-5 py-10 text-center rounded-xl">
        <div className="absolute inset-0 border-2 border-purple-400 rounded-xl"></div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
