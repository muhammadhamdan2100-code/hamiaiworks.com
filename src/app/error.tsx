"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * App-level error boundary. Next.js renders this in place of the crashed
 * segment whenever a Client or Server Component throws during render.
 * Errors are logged to the console for now — swap the console.error below
 * for a real error-tracking call (Sentry, etc.) when one is wired up.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg mx-auto">
        <AlertTriangle className="mx-auto text-accent-amber" size={40} />
        <h1 className="mt-5 font-display text-2xl font-semibold text-ink">Something went wrong</h1>
        <p className="mt-3 text-ink-muted leading-relaxed">
          That&apos;s on us, not you. Try again, or head back home — if it keeps happening, let us know
          on WhatsApp and we&apos;ll take a look.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button onClick={reset} size="lg">
            <RotateCcw size={16} />
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            <Home size={16} />
            Back to Home
          </Button>
        </div>
        <div className="mt-6">
          <WhatsAppButton label="Report this issue" variant="outline" />
        </div>
      </div>
    </div>
  );
}
