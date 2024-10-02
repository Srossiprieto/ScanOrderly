import GitHubIcon from "../../../assets/GithubIcon";

interface ButtonHomeUiProps {
  text: string;
  href: string;
}

function ButtonHomeUi({ text, href }: ButtonHomeUiProps) {
  return (
    <a
      href={href}
      className="relative inline-block bg-[#1E1E23] bg-opacity-100 text-white text-sm font-medium py-1 px-4 rounded-full transition-colors duration-200 overflow-hidden group"
      target="_blank"
    >
      <span className="flex items-center relative">
        <span className="mr-2">{text}</span>
        <span className="bg-[#3E424A] border rounded-lg border-white font-bold w-6 h-6 text-center leading-8 flex items-center justify-center">
          <GitHubIcon className="w-4 h-4 text-white" />
        </span>
        <span className="ml-2">Combinator</span>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-30 transform -skew-x-12"></span>
    </a>
  );
}

export default ButtonHomeUi;