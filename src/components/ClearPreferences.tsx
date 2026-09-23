"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/** Erases the only thing this site stores in the browser: the theme choice. */
export function ClearPreferences() {
  const { setTheme } = useTheme();
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        onClick={() => {
          setTheme("system");
          try {
            localStorage.removeItem("theme");
          } catch {}
          setDone(true);
        }}
      >
        Erase my theme choice
      </Button>
      <span role="status" className="text-sm text-muted-foreground">
        {done ? "Erased. The site now follows your system setting." : ""}
      </span>
    </div>
  );
}
