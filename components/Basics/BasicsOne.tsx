import Image from "next/image";

const BasicsOne = () => {
  return (
    <section className=" bg-white h-max" id="basics-one">
      <div className="flex flex-col justify-center m-auto max-w-[720px] p-10">
        <h1 className="text-black text-4xl text-center">How to Play?</h1>
        <p className="text-xl text-black text-center mt-4 mb-10">
          First of all - sign into your account. Then go to `Play` and start discovering the world of chemistry.{" "}
          Player has 5 spins per day for free and can buy extra spins for low price.{" "}
          Players also can check out their collection in `Dashboard`.
        </p>
        <Image
          className="rounded-md bg-teal"
          src="/images/interface.png"
          width={2880}
          height={2160}
          alt="Chemist Portrait"
        />
      </div>
    </section>
  );
};

export default BasicsOne;
