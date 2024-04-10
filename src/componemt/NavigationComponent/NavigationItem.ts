export type NavigationItem = {
  value: string;
  url: string;
};

export const navigationItems: NavigationItem[] = [
  { value: "経歴", url: "/background" },
  { value: "作品", url: "/works" },
  { value: "技術や資格", url: "/skill" },
  { value: "お問合せ", url: "/contact" },
];
