/* eslint no-underscore-dangle: 0 */

import PropTypes from 'prop-types';
import { View } from 'react-native';
import React from 'react';
import Radio from './Radio';

class SelectType extends React.Component {
  getOptions = ({ options }) => {
    if (Array.isArray(options)) {
      return options.map(val => ({ value: val, label: val }));
    }

    return Object.keys(options).map(key => ({ label: key, value: options[key] }));
  };

  render() {
    const { knob, onChange } = this.props;

    const options = this.getOptions(knob);

    return (
      <View>
        <Radio data={options} initValue={knob.value} onChange={item => onChange(item.value)} />
      </View>
    );
  }
}

SelectType.defaultProps = {
  knob: {},
  onChange: value => value,
};

SelectType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    selectV2: PropTypes.bool,
  }),
  onChange: PropTypes.func,
};

SelectType.serialize = value => value;
SelectType.deserialize = value => value;

export default SelectType;
