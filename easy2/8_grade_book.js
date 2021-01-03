function getGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;
  let grade;

  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B'
  } else if (average >= 70) {
    grade = 'C'
  } else if (average >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  console.log(grade);
    
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
