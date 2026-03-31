"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Props = {
  searchPlaceholder: string;
  searchSubmitLabel: string;
  value: string;
  hasChanges: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const SearchForm = ({
  searchPlaceholder,
  searchSubmitLabel,
  value,
  hasChanges,
  onChange,
  onSubmit,
}: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const shouldShowSubmitButton = hasChanges && isInputFocused;

  return (
    <form
      id="search-form"
      className="relative mx-auto w-full max-w-4xl"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="input-search-form">
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      </label>
      <input
        id="input-search-form"
        type="text"
        autoComplete="off"
        placeholder={searchPlaceholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.nativeEvent.isComposing) {
            event.preventDefault();
          }
        }}
        className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-12 transition-color transition-shadow focus:shadow-cyan-100 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
      />
      <button
        type="button"
        onClick={onSubmit}
        onMouseDown={(event) => event.preventDefault()}
        disabled={!shouldShowSubmitButton}
        tabIndex={shouldShowSubmitButton ? 0 : -1}
        aria-hidden={!shouldShowSubmitButton}
        className={`absolute top-1/2 right-1 -translate-y-1/2 rounded-4xl bg-gray-500 px-3 py-1 text-gray-100 text-xs transition-colors transition-opacity duration-200 hover:bg-gray-600 ${shouldShowSubmitButton ? "cursor-pointer opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        {searchSubmitLabel}
      </button>
    </form>
  );
};
