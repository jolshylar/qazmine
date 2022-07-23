import Image from "next/image";
import React from "react";

const Basics = () => {
  return (
    <div
      id="basics"
      className="flex flex-col items-center justify-center gap-10 bg-white py-10"
    >
      <h1 className="text-5xl text-black font-bold text-center">
        Basics of the Game
      </h1>
      <div className="explanation">
        <Image
          className="rounded-md bg-teal"
          src="/images/chemist.png"
          width={170}
          height={134}
          alt="Chemist Portrait"
        />
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. <br />
          Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
        </p>
      </div>

      <div className="explanation">
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. <br />
          Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
        </p>
        <Image
          className="rounded-md bg-teal"
          src="/images/chemist.png"
          width={170}
          height={134}
          alt="Chemist Portrait"
        />
      </div>

      <div className="explanation">
        <Image
          className="rounded-md bg-teal"
          src="/images/chemist.png"
          width={170}
          height={134}
          alt="Chemist Portrait"
        />
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. <br />
          Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
        </p>
      </div>
    </div>
  );
};

export default Basics;
