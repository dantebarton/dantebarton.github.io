
import CC_commencement from "@/assets/images/CC_commencement.jpg";
import Dante_and_Jongsoo from "@/assets/images/Dante_and_Jongsoo_hackathon.jpg";
import group_matsuri from "@/assets/images/group_matsuri_photo.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const images = [
    {
      src: CC_commencement,
      caption: "2024 CC team at UMB Commencement"
    },
    {
      src: Dante_and_Jongsoo,
      caption: "Late night hackathon coding session with team captain"
    },
    {
      src: group_matsuri,
      caption: "Celebrating diversity at Japanese Sakura Matsuri"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-navy-dark to-navy-light relative"
    >
      {/* Computer science themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] text-5xl text-white font-mono">01001001</div>
        <div className="absolute top-[30%] right-[15%] text-4xl text-white font-mono">10110010</div>
        <div className="absolute bottom-[25%] left-[20%] text-6xl text-white font-mono">01100101</div>
        <div className="absolute bottom-[10%] right-[8%] text-3xl text-white font-mono">11100010</div>
        <div className="absolute top-[50%] left-[50%] text-7xl text-white font-mono opacity-20">{ };</div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white">
              Hey! I'm<br />Danté<br />Barton
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-300">
              Software Engineer
            </h2>
            <p className="text-gray-200 max-w-lg">
              with experience in Front End Development (Android, iOS, and web development). 
              I'm an avid explorer, learner and love the opportunity to take on any challenge that comes my way!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-[#4D96DA] hover:bg-[#3778B8] text-white rounded-full"
                asChild
              >
                <a href="#contact">Get in touch</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-navy-dark rounded-full"
                asChild
              >
                <a href="#projects">See my work</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-fade-in">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="rounded-full overflow-hidden border-4 border-[#4D96DA]/20">
                          <img 
                            src={image.src} 
                            alt={`Slide ${index + 1}: ${image.caption}`} 
                            className="w-full h-80 md:h-96 object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-navy/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-center w-4/5">
                          <p className="text-sm text-blue-300">{image.caption}</p>
                          <div className="flex justify-center gap-1 mt-1">
                            {images.map((_, i) => (
                              <span 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#4D96DA]' : 'bg-gray-500'}`}
                              ></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 text-blue-300 border-blue-300" />
                <CarouselNext className="right-0 text-blue-300 border-blue-300" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
