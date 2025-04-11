import { useState, useEffect } from "react";
import Image from "next/image";

export default function OurVision() {
  const words = ["Accessible", "Available", "High Quality"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    let timeout;
    if (!isDeleting && displayedWord === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedWord === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedWord((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, currentWordIndex]);

  return (
    <div className="relative h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/bg2.png"
          alt="Vision background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start">
        <div className="max-w-7xl px-6 md:px-8 w-full">
          <div className="ml-10"> {/* Removed md:ml-20 and lg:ml-32 */}
            <h2 className="text-3xl font-medium mb-6 text-white">Our Vision is</h2>
            <div className="text-5xl font-light space-y-2 text-white">
              <p>To create a world where</p>
              <p>mental health care is</p>
              <p className="text-secondary-light">{displayedWord || "\u00A0"}</p>
              <p>for everyone in India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
