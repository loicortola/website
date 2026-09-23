import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="type-display text-6xl sm:text-8xl">Off the map</h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        This page doesn&apos;t exist, or it moved when the site was rebuilt.
      </p>
      <Button asChild size="lg" className="mt-8 h-10 px-4">
        <Link href="/">Go to the home page</Link>
      </Button>
    </div>
  );
}
