import { useEffect, useState } from "react";
import classes from "./AvailableHardW.module.css";
import Card from "../UI/Card";
import HardwareItem from "./HardwareItem/HardwareItem";

const AvailableHardW = () => {
  const [hardwares, sethardware] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(undefined);

  useEffect(() => {
    const fetchHardware = async () => {
      const response = await fetch(
        "https://http-react1-default-rtdb.firebaseio.com/hardware.json"
      );
      if (!response.ok) {
        throw new Error("something went Wrong!!");
      }

      const responseData = await response.json();

      const loadedharware = [];
      for (const key in responseData) {
        loadedharware.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      sethardware(loadedharware);
      setIsLoading(false);
    };
    fetchHardware().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.HardwareLoading}>
        <p>Loading....</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.HardwareError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const HardwareList = hardwares.map((hardware) => (
    <HardwareItem
      id={hardware.id}
      key={hardware.id}
      name={hardware.name}
      description={hardware.description}
      price={hardware.price}
    />
  ));
  return (
    <section className={classes.hardware}>
      <Card>
        <ul>{HardwareList}</ul>
      </Card>
    </section>
  );
};
// const PseudoData = [
//   {
//     id: "hw1",
//     name: "Desktop",
//     description: "Hp Desktops",
//     price: 45000,
//   },
//   {
//     id: "hw2",
//     name: "Keyboard",
//     description: "Acer Keyboards",
//     price: 45000,
//   },
//   {
//     id: "hw3",
//     name: "Mouse",
//     description: "Hp Mouse",
//     price: 45000,
//   },
// ];
export default AvailableHardW;
