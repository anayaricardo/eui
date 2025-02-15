import React, { useState, Fragment } from 'react';

import { EuiRange, EuiSpacer, EuiDualRange } from '../../../../src/components';

import { DisplayToggles } from '../form_controls/display_toggles';
import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const [value, setValue] = useState('20');
  const [dualValue, setDualValue] = useState([20, 100]);

  const inputRangeSliderId = useGeneratedHtmlId({ prefix: 'inputRangeSlider' });
  const dualInputRangeSliderId = useGeneratedHtmlId({
    prefix: 'dualInputRangeSlider',
  });

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onDualChange = (value) => {
    setDualValue(value);
  };

  const levels = [
    {
      min: 0,
      max: 20,
      color: 'danger',
    },
    {
      min: 20,
      max: 100,
      color: 'success',
    },
  ];

  return (
    <Fragment>
      <DisplayToggles canAppend canPrepend>
        <EuiRange
          id={inputRangeSliderId}
          value={value}
          onChange={onChange}
          showInput="inputWithPopover"
          showLabels
          aria-label="An example of EuiRange with showInput prop"
        />
      </DisplayToggles>

      <EuiSpacer size="xl" />

      <DisplayToggles canAppend canPrepend>
        <EuiDualRange
          id={dualInputRangeSliderId}
          value={dualValue}
          onChange={onDualChange}
          showInput="inputWithPopover"
          showLabels
          levels={levels}
          aria-label="An example of EuiDualRange with showInput prop"
        />
      </DisplayToggles>
    </Fragment>
  );
};
