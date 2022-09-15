import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GamerBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";
import Logo from "../src/assets/logo.svg";

import "./styles/main.css";
import { Input } from "./components/Form";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<GameProps[] | undefined>();

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
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
        {games?.map((game) => {
          return (
            <GamerBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              key={game.id}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-2xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o Game ?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o Game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Qual seu nome (ou nick) ?</label>
                <Input id="name" placeholder="Como te chamam dentro do jogo?" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quanto tempo?</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser Zero."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual é o seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000." />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className='flex gap-1'>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Domingo">D</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Segunda-feira">S</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Terça-feira">T</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quarta-feira">Q</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quinta-feira">Q</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sexta-feira">S</button>
                    <button 
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sábado">S</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                Costumo me conectar ao chat de voz.
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar um duo.
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

//LevelUp Journey UntilTheEnd
