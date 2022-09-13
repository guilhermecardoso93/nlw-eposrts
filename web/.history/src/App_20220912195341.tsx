import "./styles/main.css";
import Logo from "../src/assets/logo.svg";

export function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <img src={Logo} />
    </div>
  );
}
