import React, { useEffect } from "react";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggle = (e) => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent] justify-self-end"
    >
      <input
        onClick={toggle}
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        checked={theme == "dark" ? true : false}
      />

      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-900"></span>

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};

export default ThemeToggle;
