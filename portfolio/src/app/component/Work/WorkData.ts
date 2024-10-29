export interface Work {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "作品1",
    description:
      "これは作品1の品1の品1の品1の品1の品1の品1の品1の品1の品1の品1の品1の品1の品1の説明です。",
    tags: ["タグ1", "タグ2"],
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "作品2",
    description: "これは作品2の説明です。",
    tags: ["タグ3", "タグ4"],
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "作品3",
    description: "これは作品3の説明です。",
    tags: ["タグ5", "タグ6"],
    imageUrl: "https://via.placeholder.com/300",
  },
];
