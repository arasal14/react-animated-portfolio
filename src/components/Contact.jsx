import "../index.css";
import { FaArrowRight } from "react-icons/fa";

export const Contact = () => {
  const handleEmailClick = () => {
    const email = "abhinavrasal14@gmail.com";
    const subject = "Your Subject";
    const body = "Your Message";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="m-8 flex flex-wrap justify-center items-center">
        <button
          className="animated-button w-full lg:w-1/4 py-2 text-lg text-neutral-800 rounded-full lg:text-2xl font-semibold tracking-wider bg-gradient-to-r from-cyan-300 via-slate-500 to-purple-300 hover:from-purple-500 hover:via-slate-500 hover:to-cyan-500 hover:text-white"
          type="button"
          onClick={handleEmailClick}
        >
          Feel Free To Ask!
          <span className="arrow">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
