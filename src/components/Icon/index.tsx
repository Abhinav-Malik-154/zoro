'use client';

import { useTheme } from '@mui/material';
import _uniqueId from 'lodash/uniqueId';
import React, { useId, useRef } from 'react';

import * as icons from './icons';
import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  ...otherProps
}) => {
  const id = useId();

  const theme = useTheme();
  const sanitizedSize = size ?? SHAPE.iconSize.medium;
  const sanitizedColor = color ?? theme.palette.text.secondary;
  // Because "name" could come from fetched data, we use a default icon in case
  // the one requested isn't found
  const Component = icons[name] || icons.mask;

  return (
    <Component
      width={sanitizedSize}
      height={sanitizedSize}
      color={sanitizedColor}
      id={id}
      {...otherProps}
    />
  );
};
