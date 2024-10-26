import AboutMe from "@/app/component/AboutMe";
import Background from "@/app/component/Background";
import Works from "@/app/component/Works";
import Skills from "@/app/component/Skills";
import NavigationBar from "@/app/component/NavigationBar/Navigationbar";
export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="flex">
        <div className="flex-1 p-10">
          <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-green-500">
            About Me
          </h1>
          <AboutMe />
          <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-green-500">
            Background
          </h1>
          <Background />
          <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-green-500">
            Works
          </h1>
          <Works />
          <h1 className="text-4xl font-bold mt-8 mb-4 text-center text-green-500">
            Skills
          </h1>
          <Skills />
        </div>
      </div>
    </>
  );
}
