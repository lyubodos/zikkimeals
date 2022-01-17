import React from "react";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "An austrian delicious specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Classic Hamburger",
    description:
      "American, raw, meaty, cooked rare and ready to pleace your mouth",
    price: 10.99,
  },
  {
    id: "m4",
    name: "Cesar's Salad",
    description:
      "Classic Cesar's Salad with cooked chicken beasts and finely sliced letus and veggies",
    price: 13.99,
  },
];

export default function AvailableMeals() {

  const storedMeals = DUMMY_MEALS.map((meal) => {
    return <li key={meal.id}>{meal.name}</li>;
  });

  return (
    <section className={classes.meals}>
      <ul>{storedMeals}</ul>
    </section>
  );
}
