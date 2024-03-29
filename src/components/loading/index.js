import bgLoader from "../../assets/bgloader.png";
import "animate.css";

export default function Loading() {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat md:bg-contain"
      style={{ backgroundImage: `url(${bgLoader})`, opacity: "70%" }}
    >
      <h1 className="z-50 text-4xl text-white font-extrabold top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center">
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          C
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          a
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          r
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          r
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          e
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          g
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          a
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          n
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          d
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          o
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          .
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          .
        </span>
        <span
          className="animate__animated animate__bounceIn animate__infinite"
          data-delay="2000"
        >
          .
        </span>
      </h1>
    </div>
  );
}
