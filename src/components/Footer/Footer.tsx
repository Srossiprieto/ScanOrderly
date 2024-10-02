import GitHubIcon from "../../assets/GithubIcon";

function Footer() {
  return (
    <div className="flex justify-between items-center mt-24 p-3 max-w-screen-lg mx-auto text-left text-white border-t border-[#25252B]">
      <div className="text-base">
        © 2024 Todos los derechos reservados.
        <span className="hover:text-blue-500 cursor-pointer"> ScanOrderly</span>
      </div>
        <div className="flex space-x-4 items-center justify-center text-center">
          <a
            className="x"
            href="https://github.com/Srossiprieto/ScanOrderly"
            target="_blank"
            aria-label="Github Icon"
          >
            <GitHubIcon className="text-white" />
          </a>
        </div>
    </div>
  );
}

export default Footer;
