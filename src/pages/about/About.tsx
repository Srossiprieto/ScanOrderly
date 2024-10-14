import Background from "@/components/Background/Background";
import BlogAbout from "@/components/BlogAbout/BlogAbout";

function About() {
  return (
    <Background>
    <div className="min-h-screen relative z-1 bg-transparent text-white flex flex-col items-center justify-center p-4">
      <div className=" mt-[50px] max-w-screen-lg">
        <BlogAbout />
      </div>
    </div>
    </Background>
  );
}

export default About;
