import { useState } from 'react'

export default function AboutHero() {
  const [showParagraph, setShowParagraph] = useState(false)

  return (
    <div className="relative min-h-[84vh] text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url("/images/about/bgabt.png")',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-grow flex items-end pb-32">  
          <div className="max-w-5xl w-full mx-auto px-8 text-center">
            <h1 
              className={`text-6xl font-bold cursor-pointer transform transition-all duration-700 ease-out
                ${showParagraph ? 'translate-y-[-200px]' : 'hover:scale-105'}`}
              onClick={() => setShowParagraph(true)}
            >
              About Raaha
            </h1>
            
            <div 
              className={`transform transition-all duration-700 ease-out mt-8
                ${showParagraph 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            >
              <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
                Raaha Health is dedicated to transforming mental healthcare in India by making it 
                accessible, affordable, and high-quality for all. Our platform connects individuals with a 
                network of qualified mental health professionals, providing them with the tools and support 
                they need to prioritize their well-being. We believe in creating a world where mental health 
                care is a right, not a privilege, and we are here to ensure that everyone has access to the 
                care they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}