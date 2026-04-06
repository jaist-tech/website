"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SearchModal } from "@/components/projects/SearchModal";
import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { projects as projectsData } from "@/data/projects";
import { ja } from "@/locales/ja";

import type { Project } from "@/types/Project";

const { projects: projectsLabel } = ja;
type CategoryFilter = Project["category"];
type LinkTypeFilter =
  | "siteLink"
  | "githubLink"
  | "appStoreLink"
  | "googlePlayLink"
  | "qiitaLink";

const categoryOptions = Array.from(
  new Set(projectsData.map((project) => project.category)),
) as Project["category"][];
const linkTypeOptions: LinkTypeFilter[] = [
  "siteLink",
  "githubLink",
  "appStoreLink",
  "googlePlayLink",
  "qiitaLink",
];
const quickSearchTryableCategory: CategoryFilter = "Development";
const quickSearchTryableLinkTypes: LinkTypeFilter[] = [
  "siteLink",
  "appStoreLink",
  "googlePlayLink",
];

const normalizeText = (value: string) =>
  value.normalize("NFKC").toLocaleLowerCase("ja-JP");

const toggleOption = <T,>(options: T[], target: T): T[] => {
  if (options.includes(target)) {
    return options.filter((option) => option !== target);
  }

  return [...options, target];
};

export function ProjectsPageClient() {
  const [hasModalOpened, setHasModalOpened] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchCategories, setSearchCategories] = useState<CategoryFilter[]>(
    [],
  );
  const [searchCategoryInputValues, setSearchCategoryInputValues] = useState<
    CategoryFilter[]
  >([]);
  const [searchLinkTypes, setSearchLinkTypes] = useState<LinkTypeFilter[]>([]);
  const [searchLinkTypeInputValues, setSearchLinkTypeInputValues] = useState<
    LinkTypeFilter[]
  >([]);
  const normalizedSearchKeyword = normalizeText(searchKeyword.trim());

  const handleSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const handleToggleCategory = (category: CategoryFilter) => {
    setSearchCategoryInputValues((currentCategories) =>
      toggleOption(currentCategories, category),
    );
  };

  const handleToggleLinkType = (linkType: LinkTypeFilter) => {
    setSearchLinkTypeInputValues((currentTypes) =>
      toggleOption(currentTypes, linkType),
    );
  };

  const submitSearch = () => {
    setSearchKeyword(searchInputValue);
    setSearchCategories(searchCategoryInputValues);
    setSearchLinkTypes(searchLinkTypeInputValues);
  };

  const resetSearchConditions = () => {
    setSearchKeyword("");
    setSearchInputValue("");
    setSearchCategories([]);
    setSearchCategoryInputValues([]);
    setSearchLinkTypes([]);
    setSearchLinkTypeInputValues([]);
  };

  const applyQuickSearchTryable = () => {
    setSearchKeyword("");
    setSearchInputValue("");
    setSearchCategories([quickSearchTryableCategory]);
    setSearchCategoryInputValues([quickSearchTryableCategory]);
    setSearchLinkTypes(quickSearchTryableLinkTypes);
    setSearchLinkTypeInputValues(quickSearchTryableLinkTypes);
  };

  const applySearchKeyword = (keyword: string) => {
    setSearchInputValue(keyword);
    setSearchKeyword(keyword);
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const searchableText = normalizeText(
        [project.title, project.description, ...project.tags].join(" "),
      );
      const matchedCategory =
        searchCategories.length === 0 ||
        searchCategories.includes(project.category);
      const matchedLinkType =
        searchLinkTypes.length === 0 ||
        searchLinkTypes.some((linkType) => Boolean(project[linkType]));
      const matchedKeyword =
        !normalizedSearchKeyword ||
        searchableText.includes(normalizedSearchKeyword);

      return matchedCategory && matchedLinkType && matchedKeyword;
    });
  }, [normalizedSearchKeyword, searchCategories, searchLinkTypes]);

  const searchFormContent = projectsLabel.searchForm;

  return (
    <SectionFrame maxWidth="7xl">
      <div className="flex w-full items-center justify-between gap-4">
        <Heading level={1}>{projectsLabel.title}</Heading>
        <div className="flex w-full items-center justify-end gap-2">
          <button
            type="button"
            className="group flex cursor-pointer cursor-pointer content-center items-center justify-center gap-2 rounded-lg border border-violet-400 bg-white px-3 py-2 font-bold text-sm text-violet-800 shadow transition-transform hover:scale-105 hover:border-cyan-400 hover:bg-cyan-100 hover:text-cyan-800"
            onClick={() => setHasModalOpened(true)}
          >
            <Search className="transition-transform group-hover:scale-120" />
            検索
          </button>
        </div>
      </div>

      <SearchModal
        hasModalOpened={hasModalOpened}
        onClose={() => setHasModalOpened(false)}
        content={searchFormContent}
        value={searchInputValue}
        selectedCategories={searchCategoryInputValues}
        categoryOptions={categoryOptions}
        selectedLinkTypes={searchLinkTypeInputValues}
        linkTypeOptions={linkTypeOptions}
        onChange={handleSearchInputChange}
        onToggleCategory={handleToggleCategory}
        onToggleLinkType={handleToggleLinkType}
        onQuickSearchTryable={applyQuickSearchTryable}
        onSubmit={submitSearch}
        onReset={resetSearchConditions}
      />

      {filteredProjects.length > 0 ? (
        <div className="mb-3 grid w-full justify-items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onTagClick={(tag) => applySearchKeyword(tag)}
            />
          ))}
        </div>
      ) : (
        <>
          <p className="w-full py-12 text-center text-gray-500">
            {projectsLabel.noResults}
          </p>
          <button
            type="button"
            className="mx-auto flex cursor-pointer content-center items-center justify-center gap-2 rounded-lg border border-violet-400 bg-white px-3 py-2 font-bold text-sm text-violet-800 shadow transition-transform hover:scale-105 hover:border-cyan-400 hover:bg-cyan-100 hover:text-cyan-800"
            onClick={() => resetSearchConditions()}
          >
            条件をリセットする
          </button>
        </>
      )}
    </SectionFrame>
  );
}
