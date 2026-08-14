"use client";

import React, { useState } from "react";

export interface CardProps {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image?: string;
  opensource?: boolean;
  stacks?: string[];
  category?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  github,
  demo,
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  stacks = [],
}) => {
  const [imgError, setImgError] = useState(false);
  const targetLink = demo || github || "#";
  const hasExternalLink = Boolean(demo || github);

  return (
    <div className="w-full bg-white border border-gray-200 shadow-md dark:bg-zinc-800/50 dark:border-gray-800 relative flex flex-col justify-between overflow-hidden">
      
      <a
        href={targetLink}
        target={hasExternalLink ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block relative w-full aspect-video overflow-hidden bg-slate-900"
      >
        {!imgError ? (
          <>
            <img
              src={image}
              alt={`Image for ${title}`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay / shadow tint over the image */}
            <div className="absolute inset-0 bg-slate-950/30 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-4 flex flex-col justify-between text-white relative">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400">System Project</div>
            <div className="text-sm font-bold line-clamp-2 text-white">{title}</div>
          </div>
        )}
      </a>

      <div className="p-3 pb-9 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-lg mt-0 font-bold tracking-tight text-gray-900 dark:text-white font-heading line-clamp-1">
            <a href={targetLink} target={hasExternalLink ? "_blank" : "_self"} rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="stacks flex gap-1.5 absolute bottom-2 left-3 w-[78%] overflow-x-auto scrollbar-none py-0.5">
            {stacks.map((stack, idx) => (
              <span
                key={idx}
                className="whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-400 shadow-xs text-white px-2 py-0.5 rounded-full text-[.7rem]"
              >
                {stack}
              </span>
            ))}
          </div>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 bottom-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              title={`${title} GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>

      </div>

    </div>
  );
};
