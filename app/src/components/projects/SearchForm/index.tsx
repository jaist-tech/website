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

export const SearchForm = ({ searchPlaceholder, searchSubmitLabel, value, hasChanges, onChange, onSubmit }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const shouldShowSubmitButton = hasChanges && isInputFocused;

  return (
    <form
      id="search-form"
      className="relative max-w-4xl mx-auto w-full"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="input-search-form">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
        className="
          w-full border border-gray-300 rounded-md pl-12 pr-4 py-2
          focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-color focus:shadow-sm focus:shadow-cyan-100 transition-shadow
        "
      />
      <button
        type="button"
        onClick={onSubmit}
        onMouseDown={(event) => event.preventDefault()}
        disabled={!shouldShowSubmitButton}
        tabIndex={shouldShowSubmitButton ? 0 : -1}
        aria-hidden={!shouldShowSubmitButton}
        className={`
          absolute right-1 top-1/2 -translate-y-1/2 text-xs bg-gray-500 px-3 py-1 rounded-4xl
          hover:bg-gray-600 text-gray-100 transition-colors transition-opacity duration-200
          ${shouldShowSubmitButton ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}
        `}
      >
        {searchSubmitLabel}
      </button>
    </form>
  );
};
