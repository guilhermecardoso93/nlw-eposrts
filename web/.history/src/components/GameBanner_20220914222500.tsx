import Game1 from "../src/assets/game1.png";

export function GamerBanner (){
  return (
    <a href="" className="relative rounded-8 over-flow-hidden">
          <img src={Game1} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-grad absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">
              {" "}
              4 anúncios{" "}
            </span>
          </div>
        </a>
  )
}