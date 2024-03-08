export default class Building {
    constructor(sqft) {
      if (typeof sqft !== 'number') throw TypeError('amount must be a number');
      if (this.constructor !== Building) {
        if (!this.evacuationWarningMessage) {
          throw Error('Class extending Building must override evacuationWarningMessage');
        }
      }
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
}
