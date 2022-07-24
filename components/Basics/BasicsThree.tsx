import Image from "next/image";

const BasicsThree = () => {
  return (
    <section className="flex bg-white h-[480px] items-center justify-center px-4">
      <div className="explanation justify-center">
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
    </section>
  );
};

export default BasicsThree;
