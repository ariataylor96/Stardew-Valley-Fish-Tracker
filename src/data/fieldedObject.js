export default class FieldedObject {
  // A flat list of string keys
  static fields = [];

  // A 2d array structured as [[fieldName, defaultValue]]
  static defaults = [];

  constructor(fields) {
    if (!this.constructor.fields.length) {
      throw 'A static field list must be set to use this class';
    }

    if (!fields || typeof fields !== 'object') {
      return;
    }

    Object.entries(fields).map(([key, value]) => {
      if (this.constructor.fields.includes(key)) {
        this[key] = value;
      }
    });

    this.constructor.defaults.map(this.normalize);
  }

  normalize = ([path, def]) => {
    let defaultValue = def;

    // Allow a transformative function to take context from
    //   the whole object
    if (typeof def === 'function') {
      defaultValue = def(this);
    }

    this[path] = this[path] || defaultValue;
  };
}