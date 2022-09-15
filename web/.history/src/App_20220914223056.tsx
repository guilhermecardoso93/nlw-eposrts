import { MagnifyingGlassPlus } from "phosphor-react";

import Logo from "../src/assets/logo.svg";
import Game1 from "../src/assets/game1.png";

import "./styles/main.css";
import { GamerBanner } from "./components/GameBanner";

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={Logo} className="w-50" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
       <GamerBanner bannerUrl={Game1} title='League of Leagens' adsCount={5}/>
      </div>
      <div className="bg-nlw pt-1 rounded-lg self-stretch  mt-8 over-flow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size="24" />
              Publicar Anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
