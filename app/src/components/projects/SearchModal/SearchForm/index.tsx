"use client";

import { Keyboard, Pointer } from "lucide-react";

import type { ProjectsSearchFormContent } from "@/locales/ja";
import type { Project } from "@/types/Project";

type CategoryFilter = Project["category"];
type LinkTypeFilter =
  | "siteLink"
  | "githubLink"
  | "appStoreLink"
  | "googlePlayLink"
  | "qiitaLink";

type Props = {
  content: ProjectsSearchFormContent;
  value: string;
  selectedCategories: CategoryFilter[];
  categoryOptions: Project["category"][];
  selectedLinkTypes: LinkTypeFilter[];
  linkTypeOptions: LinkTypeFilter[];
  onChange: (value: string) => void;
  onToggleCategory: (category: CategoryFilter) => void;
  onToggleLinkType: (linkType: LinkTypeFilter) => void;
  onQuickSearchTryable: () => void;
  onSubmit: () => void;
};

export const SearchForm = ({
  content,
  value,
  selectedCategories,
  categoryOptions,
  selectedLinkTypes,
  linkTypeOptions,
  onChange,
  onToggleCategory,
  onToggleLinkType,
  onQuickSearchTryable,
  onSubmit,
}: Props) => {
  const linkTypeLabels: Record<LinkTypeFilter, string> = {
    siteLink: content.linkTypeWebsiteLabel,
    githubLink: content.linkTypeGithubLabel,
    appStoreLink: content.linkTypeAppStoreLabel,
    googlePlayLink: content.linkTypeGooglePlayLabel,
    qiitaLink: content.linkTypeQiitaLabel,
  };

  const buttonClass = (isActive: boolean) =>
    `cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors ${
      isActive
        ? "border-cyan-500 bg-cyan-100 text-cyan-900"
        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-100"
    }`;

  return (
    <form
      id="search-form"
      className="relative mx-auto w-full max-w-4xl"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <p className="mt-3 mb-1 text-gray-600 text-sm">{content.freewordLabel}</p>
      <div className="relative">
        <label htmlFor="input-search-form">
          <Keyboard className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        </label>
        <input
          id="input-search-form"
          type="text"
          autoComplete="off"
          placeholder={content.freewordPlaceholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.nativeEvent.isComposing) {
              event.preventDefault();
            }
          }}
          className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-12 transition-color transition-shadow focus:shadow-cyan-100 focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
        />
      </div>

      <p className="mt-3 mb-1 text-gray-600 text-sm">
        {content.easySearchLabel}
      </p>
      <button
        type="button"
        onClick={onQuickSearchTryable}
        className="grid aspect-square w-16 cursor-pointer content-center justify-items-center gap-1 rounded-md border border-violet-500 bg-violet-100 text-violet-900 text-xs transition-colors hover:border-cyan-500 hover:bg-cyan-100 hover:text-cyan-900 active:border-cyan-500 active:bg-cyan-100 active:text-cyan-900"
      >
        <Pointer className="mr-1 inline-block" />
        {content.easySearchTryable}
      </button>

      <p className="mt-3 mb-1 text-gray-600 text-sm">{content.categoryLabel}</p>
      <div className="flex flex-wrap items-center gap-2">
        {categoryOptions.map((category) => {
          const isActive = selectedCategories.includes(category);

          return (
            <button
              key={category}
              type="button"
              onClick={() => onToggleCategory(category)}
              className={buttonClass(isActive)}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mt-3 mb-1 text-gray-600 text-sm">{content.linkTypeLabel}</p>
      <div className="flex flex-wrap items-center gap-2">
        {linkTypeOptions.map((linkType) => {
          const isActive = selectedLinkTypes.includes(linkType);

          return (
            <button
              key={linkType}
              type="button"
              onClick={() => onToggleLinkType(linkType)}
              className={buttonClass(isActive)}
              aria-pressed={isActive}
            >
              {linkTypeLabels[linkType]}
            </button>
          );
        })}
      </div>
    </form>
  );
};
