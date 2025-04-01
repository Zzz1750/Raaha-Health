import React, { useEffect, useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(false);
  const sidebarItems = [
    { name: 'Profile', id: 'profile-section' },
    { name: 'Info', id: 'info-section' },
    { name: 'Address', id: 'address-section' },
    { name: 'Session', id: 'session-section' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

   
    checkMobile();


    window.addEventListener('resize', checkMobile);
    
 
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarItems.map(item => 
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(sidebarItems[index].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveTab]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isMobile) {
    return (
      <div className="w-full bg-white  sticky -top-1 z-10">
        <div className="px-4 py-2">
          <nav>
            <ul className="flex justify-between items-center">
              {sidebarItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    scrollToSection(item.id);
                  }}
                  className="py-2 cursor-pointer"
                >
                  <span className={`text-sm ${
                    activeTab === item.name
                      ? 'text-black font-medium' 
                      : 'text-gray-400'
                  } transition-colors duration-150`}>
                    {item.name}
                  </span>
                  {activeTab === item.name && (
                    <div className="h-0.5 bg-black mt-1"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white h-screen flex flex-col">
      <div className="flex-1"></div>
      
      <div className="px-12 py-12">
        <nav>
          <ul className="relative">
            <div className="absolute w-px bg-gray-200 left-1.5" 
                 style={{
                   top: '22px',
                   bottom: '22px',
                 }}>
            </div>
            
            {sidebarItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  scrollToSection(item.id);
                }}
                className="flex items-center py-4 cursor-pointer group"
              >
                <div className={`w-3 h-3 rounded-full z-10 mr-6 
                  ${activeTab === item.name 
                    ? 'bg-black' 
                    : 'bg-gray-200 group-hover:bg-gray-400'
                  } transition-colors duration-150`}
                />
                
                <span className={`text-base
                  ${activeTab === item.name
                    ? 'text-black font-medium' 
                    : 'text-gray-400 group-hover:text-gray-600'
                  } transition-colors duration-150`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="flex-1"></div>
    </div>
  );
};

export default Sidebar;