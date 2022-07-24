import Image from "next/image";

const BasicsTwo = () => {
  return (
    <section className="flex bg-[#f0f0f0] h-[480px] items-center justify-center px-4">
      <div className="explanation justify-center">
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
    </section>
  );
};

export default BasicsTwo;
