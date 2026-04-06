import { useEffect, useRef } from "react";
import { SquareX } from "lucide-react";

import { SearchForm } from "./SearchForm";

import type { ProjectsSearchFormContent } from "@/locales/ja";
import type { Project } from "@/types/Project";

type CategoryFilter = Project["category"];
type LinkTypeFilter =
  | "siteLink"
  | "githubLink"
  | "appStoreLink"
  | "googlePlayLink"
  | "qiitaLink";

interface Props {
  hasModalOpened: boolean;
  onClose: () => void;
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
  onReset: () => void;
}

export const SearchModal = ({
  hasModalOpened,
  onClose,
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
  onReset,
}: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (hasModalOpened) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [hasModalOpened]);

  useEffect(() => {
    if (!hasModalOpened) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [hasModalOpened]);

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  const handleReset = () => {
    onReset();
    onClose();
  };

  const handleQuickSearchTryable = () => {
    onQuickSearchTryable();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="m-auto w-[min(42rem,calc(100vw-2rem))] select-none rounded-lg p-6 shadow-lg backdrop:bg-black/60"
      onClose={onClose}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-bold text-lg">{content.title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="group cursor-pointer"
        >
          <SquareX className="text-red-300 text-sm transition-colors transition-transform group-hover:scale-110 group-hover:text-red-400 group-active:text-red-500" />
        </button>
      </div>

      <SearchForm
        content={content}
        value={value}
        selectedCategories={selectedCategories}
        categoryOptions={categoryOptions}
        selectedLinkTypes={selectedLinkTypes}
        linkTypeOptions={linkTypeOptions}
        onChange={onChange}
        onToggleCategory={onToggleCategory}
        onToggleLinkType={onToggleLinkType}
        onQuickSearchTryable={handleQuickSearchTryable}
        onSubmit={handleSubmit}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className={
          "mt-4 w-full cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-white transition-colors hover:bg-cyan-500 active:bg-cyan-500"
        }
      >
        {content.searchSubmit}
      </button>

      <button
        type="button"
        onClick={handleReset}
        className="mt-2 w-full cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-100"
      >
        {content.resetConditions}
      </button>
    </dialog>
  );
};
