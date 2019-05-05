// Prepare yourself for a loooooooong file of static data
//   In theory this would be better served from a database or a scraper
//   In practice it's just a (mostly) unchanging file and I don't care
import Fish from './fish';
import Time from './time';
import Price from './price';
import { Locations, Seasons, Weather } from './enums';

const fishCollection = [
  new Fish({
    name: 'Pufferfish',
    price: new Price({base: 200, silver: 250, gold: 300}),
    location: Locations.OCEAN,
    time: new Time({start: 6, end: 10}),
    season: Seasons.SUMMER,
    weather: Weather.SUN,
  }),
  new Fish({
    name: 'Anchovy',
    price: new Price({base: 30, silver: 37, gold: 45}),
    location: Locations.OCEAN,
    season: [Seasons.SPRING, Seasons.FALL],
  }),
  new Fish({
    name: 'Tuna',
    price: new Price({base: 100, silver: 125, gold: 150}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 13}),
    season: [Seasons.SUMMER, Seasons.WINTER],
  }),
  new Fish({
    name: 'Sardine',
    price: new Price({base: 40, silver: 50, gold: 60}),
    location: Locations.OCEAN,
    time: new Time({start: 6, end: 10}),
    season: [Seasons.SPRING, Seasons.FALL, Seasons.WINTER],
  }),
  new Fish({
    name: 'Bream',
    price: new Price({base: 45, silver: 56, gold: 67}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST],
    time: new Time({start: 12, end: 20}),
  }),
  new Fish({
    name: 'Largemouth Bass',
    price: new Price({base: 100, silver: 125, gold: 150}),
    location: Locations.MOUNTAIN_LAKE,
    time: new Time({start: 0, end: 13}),
  }),
  new Fish({
    name: 'Smallmouth Bass',
    price: new Price({base: 50, silver: 62, gold: 75}),
    location: [Locations.RIVER_TOWN, Locations.FOREST_POND, Locations.RIVER_FARM],
    season: [Seasons.SPRING, Seasons.FALL],
  }),
  new Fish({
    name: 'Rainbow Trout',
    price: new Price({base: 65, silver: 81, gold: 97}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST, Locations.MOUNTAIN_LAKE],
    time: new Time({start: 0, end: 13}),
    season: Seasons.SUMMER,
    weather: Weather.SUN,
  }),
  new Fish({
    name: 'Salmon',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST],
    time: new Time({start: 0, end: 13}),
    season: Seasons.FALL,
  }),
  new Fish({
    name: 'Walleye',
    price: new Price({base: 105, silver: 131, gold: 157}),
    location: [
      Locations.RIVER_TOWN,
      Locations.RIVER_FOREST,
      Locations.FOREST_POND,
      Locations.MOUNTAIN_LAKE,
    ],
    time: new Time({start: 6, end: 20}),
    season: Seasons.FALL,
    weather: Weather.RAIN,
  }),
  new Fish({
    name: 'Perch',
    price: new Price({base: 55, silver: 68, gold: 157}),
    location: [
      Locations.RIVER_TOWN,
      Locations.RIVER_FOREST,
      Locations.FOREST_POND,
      Locations.MOUNTAIN_LAKE,
    ],
    season: Seasons.WINTER,
  }),
  new Fish({
    name: 'Carp',
    price: new Price({base: 30, silver: 37, gold: 45}),
    location: [
      Locations.FOREST_POND,
      Locations.MOUNTAIN_LAKE,
      Locations.SECRET_WOODS_POND,
      Locations.SEWERS,
    ],
  }),
  new Fish({
    name: 'Catfish',
    price: new Price({base: 200, silver: 250, gold: 300}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST, Locations.SECRET_WOODS_POND, Locations.SWAMP],
    season: [Seasons.SPRING, Seasons.FALL],
    weather: Weather.RAIN,
  }),
  new Fish({
    name: 'Pike',
    price: new Price({base: 100, silver: 125, gold: 150}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST, Locations.FOREST_POND],
    season: [Seasons.SUMMER, Seasons.WINTER],
  }),
  new Fish({
    name: 'Sunfish',
    price: new Price({base: 105, silver: 131, gold: 157}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST, Locations.FOREST_FARM],
    time: new Time({start: 0, end: 13}),
    season: [Seasons.SPRING, Seasons.SUMMER],
    weather: [Weather.SUN, Weather.WIND],
  }),
  new Fish({
    name: 'Red Mullet',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 13}),
    season: [Seasons.SUMMER, Seasons.WINTER],
  }),
  new Fish({
    name: 'Herring',
    price: new Price({base: 30, silver: 37, gold: 45}),
    location: Locations.OCEAN,
    season: [Seasons.SPRING, Seasons.WINTER],
  }),
  new Fish({
    name: 'Eel',
    price: new Price({base: 85, silver: 106, gold: 127}),
    location: Locations.OCEAN,
    time: new Time({start: 10, end: 20}),
    season: [Seasons.SPRING, Seasons.FALL],
    weather: Weather.RAIN,
  }),
  new Fish({
    name: 'Octopus',
    price: new Price({base: 150, silver: 187, gold: 225}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 7}),
    season: Seasons.SUMMER,
  }),
  new Fish({
    name: 'Red Snapper',
    price: new Price({base: 50, silver: 62, gold: 75}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 13}),
    season: [Seasons.SUMMER, Seasons.FALL],
    weather: Weather.RAIN,
  }),
  new Fish({
    name: 'Squid',
    price: new Price({base: 80, silver: 100, gold: 120}),
    location: Locations.OCEAN,
    time: new Time({start: 12, end: 20}),
    season: Seasons.WINTER,
  }),
  new Fish({
    name: 'Sea Cucumber',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 13}),
    season: [Seasons.FALL, Seasons.WINTER],
  }),
  new Fish({
    name: 'Super Cucumber',
    price: new Price({base: 250, silver: 312, gold: 375}),
    location: Locations.OCEAN,
    time: new Time({start: 12, end: 20}),
    season: [Seasons.SUMMER, Seasons.FALL],
  }),
  new Fish({
    name: 'Ghostfish',
    price: new Price({base: 45, silver: 56, gold: 67}),
    location: Locations.MINES,
  }),
  new Fish({
    name: 'Stonefish',
    price: new Price({base: 300, silver: 375, gold: 450}),
    location: Locations.MINES,
  }),
  new Fish({
    name: 'Ice Pip',
    price: new Price({base: 500, silver: 625, gold: 750}),
    location: Locations.MINES,
  }),
  new Fish({
    name: 'Lava Eel',
    price: new Price({base: 700, silver: 875, gold: 1050}),
    location: Locations.MINES,
  }),
  new Fish({
    name: 'Sandfish',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.DESERT,
    time: new Time({start: 0, end: 14}),
  }),
  new Fish({
    name: 'Scorpion Carp',
    price: new Price({base: 150, silver: 187, gold: 225}),
    location: Locations.DESERT,
    time: new Time({start: 0, end: 14}),
  }),
  new Fish({
    name: 'Sturgeon',
    price: new Price({base: 200, silver: 250, gold: 300}),
    location: Locations.MOUNTAIN_LAKE,
    time: new Time({start: 0, end: 13}),
    season: [Seasons.SUMMER, Seasons.WINTER],
  }),
  new Fish({
    name: 'Tiger Trout',
    price: new Price({base: 150, silver: 187, gold: 225}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST],
    time: new Time({start: 0, end: 13}),
    season: [Seasons.FALL, Seasons.WINTER],
  }),
  new Fish({
    name: 'Bullhead',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.MOUNTAIN_LAKE,
  }),
  new Fish({
    name: 'Tilapia',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 8}),
    season: [Seasons.SUMMER, Seasons.FALL],
  }),
  new Fish({
    name: 'Chub',
    price: new Price({base: 200, silver: 250, gold: 300}),
    location: [Locations.RIVER_FOREST, Locations.MOUNTAIN_LAKE],
  }),
  new Fish({
    name: 'Dorado',
    price: new Price({base: 100, silver: 125, gold: 150}),
    location: Locations.RIVER_FOREST,
    time: new Time({start: 0, end: 13}),
    season: Seasons.SUMMER,
  }),
  new Fish({
    name: 'Albacore',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 5}),
    season: [Seasons.FALL, Seasons.WINTER],
  }),
  new Fish({
    name: 'Shad',
    price: new Price({base: 60, silver: 75, gold: 90}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST],
    time: new Time({start: 3, end: 20}),
    season: [Seasons.SPRING, Seasons.SUMMER, Seasons.FALL],
    weather: Weather.RAIN,
  }),
  new Fish({
    name: 'Lingcod',
    price: new Price({base: 120, silver: 150, gold: 180}),
    location: [Locations.RIVER_TOWN, Locations.RIVER_FOREST, Locations.MOUNTAIN_LAKE],
    season: Seasons.WINTER,
  }),
  new Fish({
    name: 'Halibut',
    price: new Price({base: 80, silver: 100, gold: 120}),
    location: Locations.OCEAN,
    time: new Time({start: 0, end: 5}),
    season: [Seasons.SPRING, Seasons.SUMMER, Seasons.WINTER],
  }),
  new Fish({
    name: 'Woodskip',
    price: new Price({base: 75, silver: 93, gold: 112}),
    location: [Locations.SECRET_WOODS_POND, Locations.FOREST_FARM],
  }),
  new Fish({
    name: 'Void Salmon',
    price: new Price({base: 150, silver: 187, gold: 225}),
    location: Locations.SWAMP,
  }),
  new Fish({
    name: 'Slimejack',
    price: new Price({base: 100, silver: 125, gold: 150}),
    location: Locations.BUG_LAIR,
  }),
];

export default fishCollection;