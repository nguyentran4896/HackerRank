// Grading Students
function gradingStudents(grades) {
  return grades.map(x => {
    if (x < 38) return x
    if (x % 5 >= 3) return x + 5 - x % 5
    return x
  })
}
