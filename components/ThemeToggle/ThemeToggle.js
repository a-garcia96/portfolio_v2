import React from "react";

import { useAtom } from "jotai";
import { themeAtom } from "../../atoms";

const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggle = (e) => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent] justify-self-end"
      onClick={toggle}
    >
      <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};

export default ThemeToggle;
