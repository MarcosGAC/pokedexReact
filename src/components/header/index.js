import typeImages from "../Pokemon/iconesTypes";
import garchomp from "../../assets/garchomp.png";
import light from "../../assets/brilho.png"
import dark from "../../assets/escuro.png"

export default function Header({setMode,mode}) {
  function changeMode(){
    if(!mode){
      setMode(true)
    }else{
      setMode(false)
    }
  }
  return (
    <div>
      <div className="w-full h-screen bg-indigo-800">
        <div className="flex justify-end">
      <button className=" pt-2" onClick={() =>changeMode()}>{mode ?<img className="h-20" alt="light" src={light}/> : <img className="h-20" src={dark} alt="dark"/>} </button>
      </div>
        <div className="w-full h-full flex flex-col-reverse items-center justify-evenly pb-10 text-zinc-100 dark:text-neutral-900 md:flex-row">
          <div className="w-full font-medium gap-5 flex flex-col px-4 md:w-full xl:w-1/3">
            <h1 style={mode ? {color: "white"} :{ color: "black"}} className="text-6xl font-bold uppercase">GARCHOMP</h1>
            <p style={mode ? {color: "white"} :{ color: "black"}} className="text-[20px] max-[600px]:text-[18px]">
              Quando dobra o corpo e estende as asas, Garchomp fica parecendo um
              jato. Consegue voar na velocidade sônica, graças a isso, ele nunca
              deixa a sua presa escapar. Quando está em velocidade elevada, suas
              asas criam lâminas de vento que são capazes de destruir as árvores
              próximas.
            </p>
          </div>
          <div
            className="w-full h-20 flex items-center gap-4 text-zinc-100 dark:text-neutral-900 
    md:flex-col md:h-full md:w-20"
          >
            <div className="w-full h-px bg-gradient-to-l from-zinc-100 dark:from-neutral-900 md:w-px md:h-1/2 md:bg-gradient-to-t" />

            <img
              className="w-[120px]"
              src={typeImages.dragon}
              alt="icone dragon"
            />

            <div className=" w-full h-px bg-gradient-to-r from-zinc-100 dark:from-neutral-900 md:w-px md:h-1/2 md:bg-gradient-to-b" />
          </div>
          <img
            alt="garchomp"
            src={garchomp}
            className=" h-[40%] md:h-[40%] xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
