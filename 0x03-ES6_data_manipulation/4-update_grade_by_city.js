export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location.localeCompare(city) === 0)
    .map((x) => {
      const newGrade = newGrades.filter((y) => y.studentId === x.id);
      const student = x;
      if (newGrade.length === 1) student.grade = newGrade[0].grade;
      else student.grade = 'N/A';
      return student;
    });
}
