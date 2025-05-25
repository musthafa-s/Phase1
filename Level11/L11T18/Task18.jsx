import React, { useEffect } from 'react';

const Task18 = () => {
  useEffect(() => {
    const students = [
      { name: "John", age: 21, grades: [85, 90, 92] },
      { name: "Jane", age: 19, grades: [78, 88, 95] },
      { name: "Mark", age: 22, grades: [90, 87, 93] }
    ];

    const names = students.map(s => s.name);
    const over20 = students.filter(s => s.age > 20);
    const allGrades = students.flatMap(s => s.grades);
    const avgAll = allGrades.reduce((a, b) => a + b) / allGrades.length;

    const avgOver20 = students
      .filter(s => s.age > 20)
      .flatMap(s => s.grades)
      .reduce((a, b, _, arr) => a + b / arr.length, 0);

    console.log("Names:", names);
    console.log("Students > 20:", over20);
    console.log("Avg Grade (All):", avgAll.toFixed(2));
    console.log("Avg Grade (Age > 20):", avgOver20.toFixed(2));
  }, []);

  return <p>Check the console for advanced array results.</p>;
};

export default Task18;
