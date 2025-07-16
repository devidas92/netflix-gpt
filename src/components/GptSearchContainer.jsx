import { useSelector } from "react-redux";
import { LANGUAGE } from "../utils/constants";

const GptSearchContainer = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-30 min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start px-4 sm:px-8">
      <div className="w-full max-w-2xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {LANGUAGE[lang].title} 🎬
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder={LANGUAGE[lang].gptSearchPlaceholder}
            className="w-full flex-1 px-4 py-3 border-2 border-white rounded-md focus:outline-none "
          />

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-md">
            {LANGUAGE[lang].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchContainer;
