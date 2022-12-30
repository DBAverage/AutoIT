import { useEffect } from "react";
import { themeChange } from "theme-change";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function Header(): JSX.Element {
  const themes = [
      // "corporate"
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-primary">
      <div className="flex-none">
        <i>auto</i>
        <b>IT</b>
      </div>
      <div className="flex-1 avatar">
        <div className="w-6 rounded-full">
          <Image height="24" width="24" src="/robot-24px.png" alt="Site Logo" />
        </div>
      </div>
      <select className="select" data-choose-theme>
        <option value='corporate'>
          Default Theme
        </option>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}
