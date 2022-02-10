import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  useEffect(() => {
    const reqData = async () => {
      const resData = await fetch(
        "https://zikki-meals-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if(!resData.ok){
        throw new Error("Something went wrong!");
      }

      const data = await resData.json();

      const loaddedData = [];

      for (const keyObj in data) {
        loaddedData.push({
          key: keyObj,
          name: data[keyObj].name,
          description: data[keyObj].description,
          price: data[keyObj].price,
        });
      }
      setMeals(loaddedData);
    };

      reqData()
      .then()
      .catch(err => {
        setHttpError(err.message)
        setIsLoading(false);
      });

      setIsLoading(false);


  }, []);


  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if(httpError){
    return(
      <section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
    );
  }

  const storedMeals = meals.map( meal => {
    return (
      <MealItem {...meal} key={meal.id}>
        {meal.name}
      </MealItem>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{storedMeals}</ul>
      </Card>
    </section>
  );
};
