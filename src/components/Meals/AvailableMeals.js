import React from "react";
import Card from "../UI/Card/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

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
    return <MealItem {...meal}>{meal.name}</MealItem>;
  });

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{storedMeals}</ul>
      </Card>
    </section>
  );
}
