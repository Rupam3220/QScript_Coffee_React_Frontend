import Cappuccino from "../images/capp.jpg";
import Latte from "../images/lat.jpeg";
import Macchiato from "../images/macci.jpeg";
import Americano from "../images/ameri.jpeg";
import Espresso from "../images/Espr.jpeg";
import ColdBrew from "../images/coldbrew.jpg";

export const MenuList = [
  {
    name: "Cappuccino",
    description:
      "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam.",
    image: Cappuccino,
    price: 200,
  },
  {
    name: "Latte",
    description:
      "A latte is one of the most popular coffee drinks thanks to its mild, sweet flavor.",
    image: Latte,
    price: 250,
  },
  {
    name: "Macchiato",
    description:
      "A Macchiato is made by adding a splash of milk foam or steamed milk to a regular espresso.",
    image: Macchiato,
    price: 300,
  },
  {
    name: "Americano",
    description:
      "Americano. Americanos are an approximation of black coffee that's made with espresso.",
    image: Americano,
    price: 100,
  },
  {
    name: "Espresso",
    description:
      "Espresso has a distinguished taste that comes from its syrupy texture and foamy layer on top.",
    image: Espresso,
    price: 400,
  },
  {
    name: "Cold brew",
    description:
      "Cold Brew. Cold brew coffee is on a different branch of the coffee family tree than espresso drinks.",
    image: ColdBrew,
    price: 500,
  },
];