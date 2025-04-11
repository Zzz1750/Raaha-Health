import Image from "next/image";
export const HeroSection = () => {
    return (
      <section
        className="relative h-[500px] sm:h-screen md:h-[700px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('images/specialist/bg.png')" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-start justify-center w-full">
          {/* Text Content */}
          <div className="bg-opacity-50 p-4 sm:p-6 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Let Us <span className="text-green-400">Help</span> You <br />
              Feel <span className="text-green-400">Better</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200">
              Our trained professionals are focused on finding you <br className="hidden sm:block" />
              the help you need.
            </p>
            {/* Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:space-x-4">
              <button className="bg-white text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 mb-3 sm:mb-0">
                Find My Therapist
              </button>
              <button className="border-2 border-white text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-green-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
 