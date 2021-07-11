import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food delivered to you</h2>
      <p>Choose your favorite meal!</p>
      <p>
        All our meals are cooked by vegetarian cats and made out of pure
        fairycollected gold
      </p>
    </section>
  );
};

export default MealsSummary;
