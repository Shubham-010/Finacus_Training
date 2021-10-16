import classes from "./AvailableHardW.module.css";
import Card from "../UI/Card";
import HardwareItem from "./HardwareItem/HardwareItem";

const AvailableHardW = () => {
  const HardwareList = PseudoData.map((hardware) => (
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
const PseudoData = [
  {
    id: "hw1",
    name: "Desktop",
    description: "Hp Desktops",
    price: 45000,
  },
  {
    id: "hw2",
    name: "Keyboard",
    description: "Acer Keyboards",
    price: 45000,
  },
  {
    id: "hw3",
    name: "Mouse",
    description: "Hp Mouse",
    price: 45000,
  },
];
export default AvailableHardW;
