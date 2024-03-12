export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
