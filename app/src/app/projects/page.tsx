"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SearchForm } from "@/components/projects/SearchForm";
import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { projects as projectsData } from "@/data/projects";
import { ja } from "@/locales/ja";

const { projects: projectsLabel } = ja;

const normalizeText = (value: string) => value.normalize("NFKC").toLocaleLowerCase("ja-JP");

export default function Page() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [hasSearchInputChanges, setHasSearchInputChanges] = useState(false);
  const normalizedSearchKeyword = normalizeText(searchKeyword.trim());

  const handleSearchInputChange = (value: string) => {
    setSearchInputValue(value);
    setHasSearchInputChanges(true);
  };

  const submitSearch = () => {
    setSearchKeyword(searchInputValue);
    setHasSearchInputChanges(false);
  };

  const applySearchKeyword = (keyword: string) => {
    setSearchInputValue(keyword);
    setSearchKeyword(keyword);
    setHasSearchInputChanges(false);
  };

  const filteredProjects = useMemo(() => {
    if (!normalizedSearchKeyword) {
      return projectsData;
    }

    return projectsData.filter((project) => {
      const searchableText = normalizeText(
        [project.title, project.description, ...project.tags].join(" "),
      );

      return searchableText.includes(normalizedSearchKeyword);
    });
  }, [normalizedSearchKeyword]);

  return (
    <SectionFrame maxWidth="7xl">
      <Heading level={1}>{projectsLabel.title}</Heading>

      <SearchForm
        value={searchInputValue}
        hasChanges={hasSearchInputChanges}
        onChange={handleSearchInputChange}
        onSubmit={submitSearch}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid w-full justify-items-start gap-6 mb-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onTagClick={(tag) => applySearchKeyword(tag)}
            />
          ))}
        </div>
      ) : (
        <p className="w-full text-center text-gray-500 py-12">
          条件に一致するプロジェクトが見つかりませんでした。
        </p>
      )}
    </SectionFrame>
  );
}
