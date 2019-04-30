// Allows you to match against either single field or collection
export default class MatchableEnum {
  static ANY = 'any';

  static matches(selected, test) {
    if (test === this.ANY) {
      return true;
    }

    if (Array.isArray(test)) {
      return test.includes(selected);
    }

    return selected === test;
  }
}