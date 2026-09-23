import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { talks } from "@/content/talks";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: `${base}/`, priority: 1 },
    ...["about", "work", "projects", "talks", "contact"].map((p) => ({ url: `${base}/${p}/`, priority: 0.7 })),
    ...["legal-notice", "privacy", "cookies"].map((p) => ({ url: `${base}/${p}/`, priority: 0.1 })),
    ...talks.map((t) => ({
      url: `${base}/talks/${t.slug}/`,
      priority: 0.5,
      videos: [
        {
          title: t.title,
          thumbnail_loc: `${base}${t.thumbnail}`,
          description: t.description,
          player_loc: `https://www.youtube.com/embed/${t.youtubeId}`,
          duration: t.duration,
        },
      ],
    })),
  ];
}
