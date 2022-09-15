import { useEffect, useState } from "react";

import { GamerBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import Logo from "../src/assets/logo.svg";
import Game1 from "../src/assets/game1.png";

import "./styles/main.css";

interface GameProps {
  banner: string;
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<GameProps[]>();

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={Logo} className="w-50" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GamerBanner bannerUrl={Game1} title="League of Leagens" adsCount={5} />
      </div>

      <CreateAdBanner />
    </div>
  );
}
