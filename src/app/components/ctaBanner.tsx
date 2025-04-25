import React from "react";

const CTABanner = () => {
  return (
    <section className="pt-20 w-full bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xl:p-24 gap-32 p-12 rounded-2xl  flex  justify-between flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-2/6 relative">
            <img
              src="https://pagedone.io/asset/uploads/1696241449.png"
              alt="CTA tailwind section"
              className="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="font-manrope text-5xl text-white font-semibold mb-7 text-center lg:text-left">
              Get ready to join pagedone{" "}
            </h2>
            <p className="text-lg text-white leading-8 mb-12 text-center lg:text-left">
              Download our app now from app stores & play store and experience the ease of financing on your finger
              tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
