import bgLoader from "../../assets/bgloader.png";
import "animate.css";

export default function Loading() {
  return (
    <div style={{backgroundImage:`url(${bgLoader})`,
    maxWidth:"100%",
    maxHeight:"100vh",
    opacity:"90"
    }} 
     className="w-full h-full ">
     
      <h1 className="z-50 text-4xl text-white font-extrabold top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center">
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">C</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">a</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">r</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">r</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">e</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">g</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">a</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">n</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">d</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">o</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">.</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">.</span>
        <span class="animate__animated animate__bounceIn animate__infinite"  data-delay="2000">.</span>
      </h1>
    </div>
  );
}
