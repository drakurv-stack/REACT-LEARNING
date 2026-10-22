function Food() {
  const food1 = "Apple";
  const food2 = "Mango";   // a component is a reusable piece of code that can be used in multiple places in the application
  const food3 = "Orange";

  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>{food3}</li>
    </ul>
  );
}

export default Food;
