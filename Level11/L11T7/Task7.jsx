export default function Task7() {
    const foods = ["Pizza", "Burger", "Pasta", "Sushi", "Ice Cream"];
    foods.push("Tacos");
    foods.shift();
    const length = foods.length;
    const index = foods.indexOf("Sushi");
    const sliced = foods.slice(1, 4);
  
    console.log("Modified foods array:", foods);
    console.log("Length:", length);
    console.log("Index of Sushi:", index);
    console.log("Sliced array:", sliced);
  
    return <div>Check the console for array operations.</div>;
  }