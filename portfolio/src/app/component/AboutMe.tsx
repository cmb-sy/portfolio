import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-screen-lg text-xl leading-relaxed">
      <div className="mt-12 flex flex-col items-center md:flex-row md:justify-center gap-8">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full mr-8"
          width={250}
          height={250}
          priority
        />
        <div className="text-center md:text-left ml-8">
          <div className="w-full space-y-4 text-2xl">
            <dl className="flex text-gray md:mx-0 md:mt-2">
              <dt className="w-28 text-2xl font-bold">氏名</dt>
              <dd className="text-xl">Kunst</dd>
            </dl>
            <dl className="flex text-gray md:mx-0 md:mt-2">
              <dt className="w-28 text-2xl font-bold">ブログ</dt>
              <dd className="text-xl">
                <Link href="https://x.com/kunst_sy_">
                  <span className="text-blue-500 hover:text-blue-600">
                    kunstBlog
                  </span>
                </Link>
              </dd>
            </dl>
            <dl className="flex text-gray md:mx-0 md:mt-2">
              <dt className="w-28 text-2xl font-bold">X:</dt>
              <dd className="text-xl">
                <Link href="https://x.com/kunst_sy_">
                  <span className="text-blue-500 hover:text-blue-600">
                    kunst
                  </span>
                </Link>
              </dd>
            </dl>
            <dl className="flex text-gray md:mx-0 md:mt-2">
              <dt className="w-28 text-2xl font-bold">Github</dt>
              <dd className="text-xl">
                <Link href="https://github.com/cmb-sy">
                  <span className="text-blue-500 hover:text-blue-600">
                    kunst
                  </span>
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="p-12 space-y-4">
        こんにちは、kunstと言います。フロントエンドエンジニア兼、データサイエンティストとして活動しています。
        静的型付けの言語やインフラ、そして機械学習に興味があります。最先端技術を使って課題を解決したいと思っています。
        趣味は、山登り/サウナ/筋トレ/読書/散策です。未知の土地へ行くのが好きです。
        今年は、統計検定1級/SC/英会話に挑戦したいと思っています。
      </div>
    </div>
  );
};

export default AboutMe;
