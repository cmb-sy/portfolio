// 作品データの型定義
export interface Work {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

// 作品データのサンプル
export const works: Work[] = [
  {
    title: "作品1",
    description: "これは作品1の説明です。",
    tags: ["タグ1", "タグ2"],
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "作品2",
    description: "これは作品2の説明です。",
    tags: ["タグ3", "タグ4"],
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "作品3",
    description: "これは作品3の説明です。",
    tags: ["タグ5", "タグ6"],
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "作品4",
    description: "これは作品4の説明です。",
    tags: ["タグ7", "タグ8"],
    imageUrl: "https://via.placeholder.com/300", // 画像URLのサンプル
  },
];
