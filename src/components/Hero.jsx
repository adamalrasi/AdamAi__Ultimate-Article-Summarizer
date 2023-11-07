import { heroLogo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={heroLogo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/adamalrasi")}
          className="blue_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        <span className="blue_gradient">AdamAi:</span>🤖
        <br className="max-md:hidden" />
        Ultimate Article Summarizer
      </h1>
      <h2 className="desc">
        <span className="text-[#185e78]">
          Tired of reading? 🥱 Don't worry, we've got you covered. <br />
          AdamAi summarizes articles so you don't have to. Our summaries are so
          good, you'll never want to read a full article again. 📚
        </span>
        <br />
      </h2>
      <h2 className="desc">
        <span className="blue_gradient">Start Summarising Today!</span> 👇
      </h2>
    </header>
  );
};

export default Hero;
