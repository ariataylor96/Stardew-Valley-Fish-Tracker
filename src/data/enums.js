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

  // [[value, friendlyName]]
  //   Used to create select lists
  static get FRIENDLY() {
    return [
      [this.ANY, 'Any'],
      [this.OCEAN, 'Ocean'],
      [this.RIVER_TOWN, 'River (Town)'],
      [this.RIVER_FOREST, 'River (Forest)'],
      [this.RIVER_FARM, 'Riverlands Farm'],
      [this.FOREST_POND, 'Forest Pond'],
      [this.SECRET_WOODS_POND, 'Secret Woods Pond'],
      [this.MOUNTAIN_LAKE, 'Mountain Lake'],
      [this.SWAMP, 'Swamp'],
      [this.MINES, 'Mines'],
      [this.DESERT, 'Desert'],
      [this.SEWERS, 'Sewers'],
      [this.BUG_LAIR, 'Bug Lair'],
    ];
  }
}

// This is basically for vanity and testing purposes
export class Seasons extends MatchableEnum {
  static SPRING = 'spring';
  static SUMMER = 'summer';
  static FALL = 'fall';
  static WINTER = 'winter';

  static get FRIENDLY() {
    return [
      [this.ANY, 'Any'],
      [this.SPRING, 'Spring'],
      [this.SUMMER, 'Summer'],
      [this.FALL, 'Fall'],
      [this.WINTER, 'Winter'],
    ];
  }
}

// There are 5 total weather classifications, but only these 3 are used for fish
export class Weather extends MatchableEnum {
  static SUN = 'sun';
  static RAIN = 'rain';
  static WIND = 'wind';

  static get FRIENDLY() {
    return [
      [this.ANY, 'Any'],
      [this.SUN, 'Sun'],
      [this.RAIN, 'Rain'],
      [this.WIND, 'Wind'],
    ];
  }
}
