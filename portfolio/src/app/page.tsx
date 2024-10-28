import AboutMe from "@/app/component/AboutMe";
import Career from "@/app/component/Career/Career";
import Works from "@/app/component/Works";
import Skills from "@/app/component/Skills";
import NavigationBar from "@/app/component/NavigationBar/Navigationbar";
import TopPage from "./component/TopPage";
import Footer from "./component/Footer";

export default function Home() {
  const sections = [
    {
      title: "About Me",
      comment: "ああああああああああああ",
      component: <AboutMe />,
      bgColor: "bg-white",
    },
    {
      title: "Skill",
      comment: "ああああああああああああ",
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
  ];
  return (
    <>
      <TopPage />
      <div className="flex flex-col">
        <div className="flex-1">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative z-10 ${section.bgColor} py-24 mx-auto`}
            >
              <h1 className="text-4xl font-bold mb-4 text-center text-green-500">
                {section.title}
              </h1>
              <p className="mb-4 text-center">{section.comment}</p>
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
