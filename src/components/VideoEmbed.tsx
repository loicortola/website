"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

/**
 * YouTube player that only loads once the visitor asks for it, so opening a talk
 * page sends nothing to Google (see /privacy/).
 */
export function VideoEmbed({
  youtubeId,
  start,
  title,
  thumbnail,
}: {
  youtubeId: string;
  start?: number;
  title: string;
  thumbnail: string;
}) {
  const [playing, setPlaying] = useState(false);
  const params = new URLSearchParams({ autoplay: "1", ...(start ? { start: String(start) } : {}) });

  return (
    <div className="mt-8 overflow-hidden rounded-xl bg-black ring-1 ring-foreground/10">
      <AspectRatio ratio={16 / 9}>
        {playing ? (
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?${params}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block size-full focus-visible:outline-none"
            aria-label={`Play “${title}”. Loads the YouTube player.`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumbnail} alt="" className="size-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-background/90 text-foreground shadow-lg transition-transform group-hover:scale-105 group-focus-visible:ring-3 group-focus-visible:ring-ring">
                <Play className="size-6 translate-x-0.5 fill-current" />
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-3 text-left text-xs text-white/85">
              Playing loads the video from YouTube (Google).
            </span>
          </button>
        )}
      </AspectRatio>
    </div>
  );
}
