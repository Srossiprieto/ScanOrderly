import Background from "@/components/Background/Background";
import BlogAbout from "@/components/BlogAbout/BlogAbout";

function About() {
  return (
    <Background>
    <div className="min-h-screen relative z-1 bg-transparent text-white flex flex-col items-center justify-start  p-4">
      <div className="max-w-2xl mt-[100px]">
        <BlogAbout />
      </div>
    </div>
    </Background>
  );
}

export default About;
