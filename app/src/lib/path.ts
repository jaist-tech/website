const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
};
