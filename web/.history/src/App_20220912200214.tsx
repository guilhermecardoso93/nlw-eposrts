import "./styles/main.css";
import Logo from "../src/assets/logo.svg";

export function App() {
  return (
    <div className='max-w-[1344px] mx-auto my-20 flex flex-col items-center'>
      <img src={Logo} className='w-44' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='color-nlw-gradient'>duo</span> está aqui.
      </h1>
    </div>
  );
}
