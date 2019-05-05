import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// Allows you to match against either single field or collection
export default class MatchableEnum {
  static ANY = 'any';

  static matches(selected, test) {
    if (selected === this.ANY || test === this.ANY) {
      return true;
    }

    if (Array.isArray(test)) {
      return test.includes(selected);
    }

    return selected === test;
  }

  static get FRIENDLY() {
    throw 'Not implemented!';
  }

  static get FRIENDLY_AS_OBJ() {
    return this.FRIENDLY.reduce((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {});
  }

  static toDropdown({value, onChange, label, key}) {
    return (
      <TextField
        select
        SelectProps={{
          autoWidth: true,
        }}
        value={value}
        onChange={e => onChange(e.target.value)}
        label={label}
        key={key}
      >
        {this.FRIENDLY.map(([internalValue, name], idx) => (
          <MenuItem value={internalValue} key={idx}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}