"use client";

import { useEffect, useRef, useState } from "react";

const timelineHeight = 640;
const widgetsScriptId = "twitter-wjs";
const widgetsScriptSrc = "https://platform.twitter.com/widgets.js";

type TwitterWidgets = {
  ready: (callback: (widgets: TwitterWidgets) => void) => void;
  widgets: {
    load: (element?: HTMLElement) => Promise<void>;
  };
};

declare global {
  interface Window {
    twttr?: TwitterWidgets;
    __twitterWidgetsScriptPromise?: Promise<TwitterWidgets>;
  }
}

const loadTwitterWidgets = (): Promise<TwitterWidgets> => {
  if (window.twttr?.widgets?.load) {
    return Promise.resolve(window.twttr);
  }

  if (window.__twitterWidgetsScriptPromise) {
    return window.__twitterWidgetsScriptPromise;
  }

  window.__twitterWidgetsScriptPromise = new Promise((resolve, reject) => {
    const resolveWhenReady = () => {
      const twttr = window.twttr;
      if (!twttr?.ready) {
        reject(new Error("Twitter widgets API is not available."));
        return;
      }

      twttr.ready(resolve);
    };

    const onError = () => {
      window.__twitterWidgetsScriptPromise = undefined;
      reject(new Error("Failed to load Twitter widgets script."));
    };

    let script = document.getElementById(widgetsScriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = widgetsScriptId;
      script.src = widgetsScriptSrc;
      script.async = true;
      script.charset = "utf-8";
      document.head.appendChild(script);
    }

    script.addEventListener("load", resolveWhenReady, { once: true });
    script.addEventListener("error", onError, { once: true });

    if (window.twttr?.ready) {
      resolveWhenReady();
    }
  });

  return window.__twitterWidgetsScriptPromise;
};

export const Timeline = () => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderTimeline = async () => {
      const container = timelineContainerRef.current;
      if (!container) {
        return;
      }

      try {
        const twttr = await loadTwitterWidgets();
        if (!isMounted) {
          return;
        }

        await twttr.widgets.load(container);
        if (!isMounted) {
          return;
        }

        setIsLoading(false);
        setHasError(false);
      } catch {
        if (!isMounted) {
          return;
        }

        setIsLoading(false);
        setHasError(true);
      }
    };

    void renderTimeline();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="max-w-3xl mx-auto w-full relative"
      ref={timelineContainerRef}
      style={{ minHeight: timelineHeight }}
    >
      {isLoading && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 rounded-2xl border border-slate-200 bg-slate-100 p-5 animate-pulse"
        >
          <div className="h-3 w-40 rounded bg-slate-300/80" />
          <div className="mt-6 h-3 w-full rounded bg-slate-300/80" />
          <div className="mt-4 h-3 w-5/6 rounded bg-slate-300/80" />
          <div className="mt-4 h-3 w-2/3 rounded bg-slate-300/80" />
          <div className="mt-10 h-3 w-full rounded bg-slate-300/80" />
          <div className="mt-4 h-3 w-4/5 rounded bg-slate-300/80" />
          <div className="mt-4 h-3 w-3/4 rounded bg-slate-300/80" />
        </div>
      )}
      <a
        className={`twitter-timeline block ${isLoading && !hasError ? "opacity-0" : "opacity-100"}`}
        data-height={timelineHeight}
        data-width="100%"
        data-chrome="noheader nofooter"
        href="https://twitter.com/jaist_tech?ref_src=twsrc%5Etfw"
        target="_blank"
        rel="noopener noreferrer"
      >
        {hasError ? "Tweets by jaist_tech" : <span className="sr-only">Tweets timeline is loading</span>}
      </a>
    </div>
  );
};
