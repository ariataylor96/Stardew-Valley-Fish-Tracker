import FieldedObject from './fieldedObject';

// Stardew time starts at 6am and ends at 2am when the player passes out.
//   This is, notably, a little difficult to express without using
//   a proper datetime handling library, which I don't want for 2 reasons:
//
//   1. That seems like overkill for something that doesn't even involve
//      using minutes in the calculations
//   2. They usually add a tremendous amount to the bundle size, and I
//      really like having a small deployable bundle for snappy load times.
//
// In the interest of that, I'm expressing times as "hours past 6am"
//   to make the math much easier to express.
export class Time extends FieldedObject {
  static fields = [
    'start',
    'end',
  ];

  static defaults = [
    ['start', 0],
    ['end', 20],
  ];

  inRange = startTime => (
    !startTime ||
    (
      startTime >= this.start &&
      startTime < this.end
    )
  );

  format = time => {
    const period = time >= 6 && time < 18 ? 'pm' : 'am';
    let hour = time + 6;

    if (hour > 24) {
      hour -= 24;
    } else if (hour > 12) {
      hour -= 12;
    }

    return `${hour}${period}`;
  };

  get friendlyText() {
    return `${this.format(this.start)} - ${this.format(this.end)}}`;
  }
}