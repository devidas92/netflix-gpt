export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjdhYTQzMGNmMTUwMDZiYmRkZTY2YzA4MzdkYmRjZSIsIm5iZiI6MTc1MjYxMDM1Ny4zNzksInN1YiI6IjY4NzZiNjM1ODU1ODg4MmU2Nzc5ODFhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03dOFavi44XIwNxedOjgTkjS8IcaaeQCRza79mVgw9I",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const LANGUAGE = {
  en: {
    search: "Search",
    title: "Find Movies with GPT",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  malayalam: {
    search: "തിരയുക", // Thirayuka
    title: "GPT ഉപയോഗിച്ച് സിനിമകൾ കണ്ടെത്തുക",
    gptSearchPlaceholder: "ഇന്ന് നിങ്ങൾ കാണാൻ ആഗ്രഹിക്കുന്നതെന്താണ്?",
  },
  spanish: {
    search: "Buscar",
    title: "Encuentra películas con GPT",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
  hindi: {
    search: "खोजें",
    title: "GPT के साथ फिल्में खोजें",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  tamil: {
    search: "தேடல்", // Thedal
    title: "GPT உதவியுடன் திரைப்படங்களை கண்டறியவும்",
    gptSearchPlaceholder: "இன்று நீங்கள் என்ன பார்க்க விரும்புகிறீர்கள்?",
  },
  french: {
    search: "Rechercher",
    title: "Trouvez des films avec GPT",
    gptSearchPlaceholder: "Que souhaitez-vous regarder aujourd'hui?",
  },
};

export const SUPPORTED_LANGAUGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "malayalam",
    name: "Malayalm",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
