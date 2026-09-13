import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex h-[420px] max-w-[1216px] items-center justify-between">
        {/*Banner Content*/}
        <div className="w-[696px]">
          {/*Heading*/}
          <h1 className="max-w-[553px] text-[48px] font-bold leading-[1.08] text-[#0F172A]">
            Build Your Ideal
         <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          {/*Description*/}
          <p className="mt-5 max-w-[576px] text-[16px] leading-7 text-[#475569]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          {/*Buttons*/}
          <div className="mt-7 flex items-center gap-4">
            <a href="#technologies"
            className="flex h-[40px] w-[168px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-[14px] font-semibold text-white"
            >
              Explore Technologies
            </a>
            <button
              type="button"
              className="h-[40px] w-[123px] rounded-lg border border-gray-300 bg-white text-[14px] font-medium text-[#334155]"
            >
            Learn More
            </button>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex h-[420px] w-[488px] items-center justify-center">
          <img
         src={BannerImage}
         alt="Development Stack"
         className="w-[330px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;