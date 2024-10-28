import AboutMe from "@/app/component/AboutMe";
import Career from "@/app/component/Career/Career";
import Works from "@/app/component/Work/Works";
import Skills from "@/app/component/Skill/Skills";
import NavigationBar from "@/app/component/NavigationBar/Navigationbar";
import TopPage from "./component/TopPage";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

export default function Home() {
  const sections = [
    {
      title: "About Me",
      comment: "私について",
      component: <AboutMe />,
      bgColor: "bg-white",
    },
    {
      title: "Skill",
      comment:
        "ラウド関連を中心に幅広く技術習得に励んでおります。これからも日々研鑽していきます！以下チャートは各スキルごとの得意度をレートで示しています。",
      component: <Skills />,
      bgColor: "bg-slate-50",
    },
    {
      title: "Works",
      comment: "ああああああああああああ",
      component: <Works />,
      bgColor: "bg-white",
    },
    {
      title: "Career",
      comment: "ああああああああああああ",
      component: <Career />,
      bgColor: "bg-slate-50",
    },
    {
      title: "Contact",
      comment: "ああああああああああああ",
      component: <Contact />,
      bgColor: "bg-white",
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
              className={`relative z-10 ${section.bgColor} py-24`}
            >
              <div className="mx-auto max-w-screen-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center text-green-500">
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
