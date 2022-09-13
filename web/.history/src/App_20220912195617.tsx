import "./styles/main.css";
import Logo from "../src/assets/logo.svg";

export function App() {
  return (
    <div className='max-w-[1344px] mx-auto my-20 flex flex-col items-center'>
      <img src={Logo} className='w-72 max-w-72' />
    </div>
  );
}
