import FieldedObject from './fieldedObject';
import Time from './time';
import { Seasons, Weather } from './enums';

export default class Fish extends FieldedObject {
  static fields = [
    'name',
    'price',
    'location',
    'time',
    'season',
    'weather',
  ];

  static defaults = [
    ['time', new Time()],
    ['season', Seasons.ANY],
    ['weather', Weather.ANY],
  ];
}
