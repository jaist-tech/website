"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const SearchForm = ({ value, onChange, onSubmit }: Props) => {
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
        placeholder="キーワードを入力"
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
    </form>
  );
};
