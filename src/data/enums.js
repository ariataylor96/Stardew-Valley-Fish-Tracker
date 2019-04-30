import FieldedObject from './fieldedObject';
import MatchableEnum from './matchableEnum';

export class Locations extends MatchableEnum {
  static OCEAN = 'ocean';

  static RIVER_TOWN = 'riverTown';
  static RIVER_FOREST = 'riverForest';
  static RIVER_FARM = 'riverFarm';
  static FOREST_FARM = 'forestFarm';

  static FOREST_POND = 'forestPond';
  static SECRET_WOODS_POND = 'secretWoodsPond';
  static MOUNTAIN_LAKE = 'mountainLake';
  
  static SWAMP = 'swamp';
  static MINES = 'mines';
  static DESERT = 'desert';
  static SEWERS = 'sewers';

  // Literally only needed for the slimejack, but we'll add it for
  //   the sake of consistency in API.
  static BUG_LAIR = 'mutantBugLair';
}

// This is basically for vanity and testing purposes
export class Seasons extends MatchableEnum {
  static SPRING = 'spring';
  static SUMMER = 'summer';
  static FALL = 'fall';
  static WINTER = 'winter';

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

// There are 5 total weather classifications, but only these 3 are used for fish
export class Weather extends MatchableEnum {
  static SUN = 'sun';
  static RAIN = 'rain';
  static WIND = 'wind';
}
