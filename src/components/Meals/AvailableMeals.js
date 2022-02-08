import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


export default function AvailableMeals() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {

    const reqData = async () => {
      const resData = await fetch('https://zikki-meals-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const data = await resData.json();

      const loaddedData = [];

      for (const keyObj in data) {
       loaddedData.push({
          key: keyObj,
          name: data[keyObj].name,
          description: data[keyObj].description,
          price: data[keyObj].price
        })
      }
      setMeals(loaddedData);
    }

    reqData();
      
  }, [])

  const storedMeals = meals.map((meal) => {
    return <MealItem {...meal} key={meal.id}>{meal.name}</MealItem>;
  });

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{storedMeals}</ul>
      </Card>
    </section>
  );
}
