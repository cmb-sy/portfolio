export type NavigationItem = {
  value: string;
  key: string;
};

export const navigationItems: NavigationItem[] = [
  { value: "私について", key: "#about" },
  { value: "経歴", key: "#career" },
  { value: "作品", key: "#works" },
  { value: "技術や資格", key: "#skill" },
  { value: "お問合せ", key: "#contact" },
];
