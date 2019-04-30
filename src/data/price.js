import FieldedObject from './fieldedObject';

export default class Price extends FieldedObject {
  static fields = [
    'base',
    'silver',
    'gold',
  ];
}