import AboutMe from "@/app/component/AboutMe";
import Career from "@/app/component/Career/Career";
import Works from "@/app/component/Work/Works";
import Skills from "@/app/component/Skill/Skills";
import NavigationBar from "@/app/component/NavigationBar/Navigationbar";
import TopPage from "./component/TopPage";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact";

export default function Home() {
  const sections = [
    {
      id: "about-me",
      title: "About Me",
      comment: "私について",
      component: <AboutMe />,
      bgColor: "bg-slate-50",
    },
    {
      id: "skills",
      title: "Skill",
      comment: "経験のあるスキルを一覧でまとめました",
      component: <Skills />,
      bgColor: "bg-white",
    },
    {
      id: "works",
      title: "Works",
      comment: "過去に作成したアプリケーションを掲載しました",
      component: <Works />,
      bgColor: "bg-slate-50",
    },
    {
      id: "career",
      title: "Career",
      comment: "これまでの業務経験をまとめました",
      component: <Career />,
      bgColor: "bg-white",
    },
    {
      id: "contact",
      title: "Contact",
      comment: "最後までご覧頂きありがとうございました",
      component: <Contact />,
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <>
      <div className="relative z-20">
        <NavigationBar />
      </div>
      <TopPage />
      <div className="flex flex-col">
        <div className="flex-1">
          {sections.map((section, index) => (
            <div
              key={index}
              id={section.id}
              className={`relative z-10 ${section.bgColor} py-24`}
            >
              <div className="mx-auto max-w-screen-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center text-black-500">
                  {section.title}
                </h1>
                <p className="text-sm mb-4 text-center text-gray-500">
                  {section.comment}
                </p>
                {section.component}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
