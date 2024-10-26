import React from "react";

// 作品データのサンプル
const works = [
  {
    id: 1,
    title: "作品1",
    description: "これは作品1の説明です。",
    tags: ["タグ1", "タグ2"],
    imageUrl: "https://via.placeholder.com/300", // 画像URLのサンプル
  },
  {
    id: 2,
    title: "作品2",
    description: "これは作品2の説明です。",
    tags: ["タグ3", "タグ4"],
    imageUrl: "https://via.placeholder.com/300", // 画像URLのサンプル
  },
  {
    id: 3,
    title: "作品3",
    description: "これは作品3の説明です。",
    tags: ["タグ5", "タグ6"],
    imageUrl: "https://via.placeholder.com/300", // 画像URLのサンプル
  },
  {
    id: 4,
    title: "作品4",
    description: "これは作品4の説明です。",
    tags: ["タグ7", "タグ8"],
    imageUrl: "https://via.placeholder.com/300", // 画像URLのサンプル
  },
  // 他の作品データを追加
];

const Works: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center">
        {works.map((work) => (
          <div
            key={work.id}
            className="border rounded-lg p-6 w-96 shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{work.title}</h2>
            <p className="mt-2 text-lg">{work.description}</p>
            <div className="mt-4">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
