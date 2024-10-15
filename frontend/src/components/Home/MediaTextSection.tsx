// src/components/Home/MediaTextSection.tsx
import React from 'react';

type MediaBlock = {
  imageSrc: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
};

type MediaTextSectionProps = {
  blocks: MediaBlock[];
};

const MediaTextSection: React.FC<MediaTextSectionProps> = ({ blocks }) => {
  return (
    <section className="container mx-auto p-14">
      <div className="flex flex-col items-center">
        {blocks.map((block, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center justify-center mb-28 ${block.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-1/2 p-6 text-center md:text-left ${block.imagePosition === 'right' ? 'md:pr-6' : 'md:pl-6'}`}>
              <div className="line mb-4" />
              <h2 className="text-4xl font-bold mb-4 title">{block.title}</h2>
              <p className="text-xl">{block.description}</p>
            </div>
            <img
              src={block.imageSrc}
              alt={block.title}
              className="w-full md:w-2/5 h-auto object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaTextSection;
