import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header
        className="h-[600px] relative"
        style={{
          background: `url('./src/assets/background.jpg') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <nav className="flex h-24 w-full items-center justify-center">
          <div className="space-y-1 cursor-pointer">
            <div className="w-6 h-0.5 bg-cyan-400"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
          </div>
          <div className="">
            <img
              src="./src/assets/cyberpunk-2077-logo.png"
              alt=""
              className="w-72"
            />
          </div>
          <div>
            <div className="flex items-center cursor-pointer">
              <p className="text-cyan-400">PT-BR</p>
              <IoMdArrowDropdown className="text-cyan-400" />
            </div>
          </div>
        </nav>

        <p className="text-3xl mt-[360px] font-extrabold text-center mx-3">
          <h2 className="text-white font-refinery uppercase tracking-wide">
            Vivencie a experiência definitiva de Cyberpunk 2077{" "}
          </h2>
        </p>

        <div>
            <button className="flex flex-col items-center w-full mt-6">
                <img src="./src/assets/button-1.png" alt="" className="" />
            </button>
        </div>
      </header>

      <section className="bg-black h-[500px] text-[#F2EC0F]">
        
      </section>
    </>
  );
};

export default Header;
