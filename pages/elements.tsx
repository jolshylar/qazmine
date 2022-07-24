import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  electronicConfiguration: string;
  electronegativity: number;
  atomicRadius: number;
  ionRadius: unknown;
  vanDerWaalsRadius: number;
  ionizationEnergy: number;
  electronAffinity: number;
  oxidationStates: string;
  standardState: string;
  bondingType: string;
  meltingPoint: number;
  boilingPoint: number;
  density: number;
  groupBlock: string;
  yearDiscovered: number;
  block: string;
  cpkHexColor: string;
  period: number;
  group: number;
}

const ElementBox = ({ element }: { element: Element }) => {
  return (
    <div className="border-primary border-2 w-28 pl-1">
      <h2>{element.atomicNumber}</h2>
      <h1 className="text-secondary">{element.symbol}</h1>
      <h2>{element.name}</h2>
      <h2>{element.atomicMass}</h2>
    </div>
  );
};

const Elements = () => {
  const [data, setData] = useState<Element[]>([]);

  const getElements = () => {
    fetch("https://periodic-table-elements-info.herokuapp.com/elements")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getElements();
  }, []);

  return (
    <Layout>
      <Navbar />
      <h1 className="text-center text-4xl py-4">
        All elements our game provides
      </h1>
      <div className="flex flex-wrap justify-center my-4 gap-2">
        {data &&
          data.map((element) => (
            <ElementBox key={element.atomicNumber} element={element} />
          ))}
      </div>
    </Layout>
  );
};

export default Elements;
