export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw TypeError('name must be a String');
      }
      if (typeof length !== 'number') {
        throw TypeError('length must be a Number');
      }
      if (!Array.isArray(students)) {
        throw TypeError('students must be an Array');
      }
      students.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    get length() {
      return this._length;
    }
  
    get students() {
      return this._students;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') throw TypeError('name must be a String');
      this._name = newName;
    }
  
    set length(newLength) {
      if (typeof newLength !== 'number') throw TypeError('length must be a Number');
      this._length = newLength;
    }
  
    set students(newStudents) {
      if (!Array.isArray(newStudents)) throw TypeError('students must be an Array');
      newStudents.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._students = newStudents;
    }
}
