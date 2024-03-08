export default class Currency {
    constructor(code, name) {
      if (typeof code !== 'string') throw TypeError('student must be a String');
      if (typeof name !== 'string') throw TypeError('student must be a String');
  
      this._code = code;
      this._name = name;
    }
  
    get code() {
      return this._code;
    }
  
    get name() {
      return this._name;
    }
  
    set code(newCode) {
      if (typeof code !== 'string') throw TypeError('student must be a String');
      this._code = newCode;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') throw TypeError('student must be a String');
      this._name = newName;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
}
