import Image from 'next/image';

export default function WhyRaaha() {
    return (
      <div className="relative bg-white py-24 px-6 -mt-1">
        <div className="max-w-7xl mx-auto">
          {/* Title with leaf icon */}
          <div className="flex flex-col mb-24 mt-20 ml-44">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold text-primary" style={{ textDecoration: 'none' }}>Why</h2><br/>
              <img src="/images/about/logo 2.png" alt="Raaha" className="h-auto w-auto" /><span className='text-[46px] font-bold mt-3'>?</span>
            </div>
          </div>
  
          {/* Content section */}
          <div className="flex items-center justify-between gap-12">
            {/* Text content */}
            <div className="max-w-2xl">
              <p className="text-xl text-gray-800 leading-relaxed">
                Finding the right mental health support can be confusing, expensive, or just 
                out of reach. Raaha makes it simple. With just a few clicks, you can connect 
                with trusted psychologists, psychiatrists, and counselors—anytime, 
                anywhere. No long wait times, no stigma, just the help you need, when you 
                need it.
              </p>
            </div>
  
            {/* Logo circle */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-green-100"></div>
              <div className="absolute inset-8 rounded-full bg-primary flex items-center justify-center">
                <Image
                  src="/images/about/logo.png" // Replace with your image path
                  alt="Raaha Logo"
                  width={250} // Equivalent to w-32
                  height={128} // Equivalent to h-32
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }