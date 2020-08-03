import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  radioContainer: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', margin: 10 },
  radioInner: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  itemLabel: { fontSize: 16 },

  item: {
    marginRight: 8,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
  },
});

const Radio = ({ data, initValue, onChange }) => {
  const [value, setValue] = useState(initValue);
  return (
    <View style={styles.radioContainer}>
      {data.map(item => (
        <TouchableOpacity
          key={item.label}
          activeOpacity={0.7}
          style={styles.item}
          onPress={() => {
            onChange(item);
            setValue(item.value);
          }}
        >
          <View
            style={[
              styles.radio,
              {
                borderColor: value === item.value ? 'green' : 'lightgrey',
              },
            ]}
          >
            <View
              style={[
                styles.radioInner,
                { backgroundColor: value === item.value ? 'green' : 'white' },
              ]}
            />
          </View>
          <Text style={styles.itemLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Radio;

Radio.defaultProps = {
  data: [],
  onChange: value => value,
  initValue: '',
};

Radio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  initValue: PropTypes.string,
  onChange: PropTypes.func,
};
