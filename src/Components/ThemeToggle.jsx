import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "pastel" ? "forest" : "pastel");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`btn btn-outline  ${theme === "pastel" && 'bg-slate-400'}`}
    >
      {theme === "pastel" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
};

export default ThemeToggle;
