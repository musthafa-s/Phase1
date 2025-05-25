export default function Task8() {
    const person = {
      name: "Alice",
      age: 25,
      city: "Mumbai",
      hobbies: ["reading", "traveling"]
    };
  
    person.job = "Developer";
    person.age = 26;
    person.greet = function () {
      return `Hello, my name is ${this.name}`;
    };
  
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("City:", person.city);
    console.log("Hobbies:", person.hobbies);
    console.log("Job:", person.job);
    console.log("Greet:", person.greet());
  
    return <div>Check the console for object details.</div>;
  }