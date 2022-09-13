import "./styles/main.css";
import Logo from "../src/assets/logo.svg";
import Game1 from "../src/assets/game1.png"; 

export function App() {
  return (
    <div className='max-w-[1344px] mx-auto my-20 flex flex-col items-center'>
      <img src={Logo} className='w-50' />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
        <a href="">
          <img src="" />

        </a>
      </div>
    </div>
  );
}
