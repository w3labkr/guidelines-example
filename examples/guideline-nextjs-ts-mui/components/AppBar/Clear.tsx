'use client';

// The library for web and native user interfaces.
import * as React from 'react';

// Move faster with intuitive React UI tools.
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { styled } from '@mui/system';

// Utility for creating styled components.
const MyBox = styled(MuiBox)({
  flexGrow: 1,
}) as typeof MuiBox;

export type ClearProps = MuiBoxProps;

export default function Clear(props: ClearProps) {
  return <MyBox {...props} />;
}
