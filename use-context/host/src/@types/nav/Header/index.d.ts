// This is not quite right, as the new <Header> component does not need to pass in any props.
import React from 'react';
const HeaderProps: React.FunctionComponent<{
  count: number;
  onClear: () => void;
}>;
export default HeaderProps;
