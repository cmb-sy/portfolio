import AboutMe from "@/app/component/AboutMe";
import Background from "@/app/component/Background";
import Works from "@/app/component/Works";
import Skills from "@/app/component/Skills";
import NavigationBar from "@/app/component/NavigationBar/Navigationbar";
import TopPage from "./component/TopPage";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <div className="relative z-20">
        <NavigationBar />
      </div>
      <TopPage />
      <div className="flex flex-col">
        <div className="flex-1">
          <div className="relative z-10 bg-white">
            <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-green-500">
              About Me
            </h1>
            <AboutMe />
          </div>
          <div className="relative z-10 bg-slate-50">
            <h1 className="text-4xl font-bold mb-4 text-center text-green-500">
              Background
            </h1>
            <Background />
          </div>
          <div className="relative z-10 bg-white">
            <h1 className="text-4xl font-bold mb-4 text-center text-green-500">
              Works
            </h1>
            <Works />
          </div>
          <Skills />
          <div className="relative z-10 bg-white">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
