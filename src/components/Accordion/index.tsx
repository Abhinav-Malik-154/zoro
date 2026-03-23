/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { PropsWithChildren } from 'react';

import { Icon } from '../Icon';
import { useStyles } from './styles';

export interface AccordionProps {
  className?: string;
  expanded: boolean;
  onChange: (index: number | undefined) => void;
  id: number;
  title: string;
  rightAdornment?: React.ReactElement;
}

export const Accordion = ({
  className,
  expanded,
  onChange,
  id,
  title,
  rightAdornment,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const styles = useStyles();

  const handleChange =
    (actionIdx: number) =>
    (event: React.SyntheticEvent, newExpandedIdx: boolean) => {
      onChange(newExpandedIdx ? actionIdx : undefined);
    };

  return (
    <MuiAccordion
      className={className}
      expanded={expanded}
      onChange={handleChange(id)}
      css={styles.accordionRoot as any}
    >
      <AccordionSummary
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
        css={styles.accordionSummary as any}
      >
        <div css={styles.accordionLeft as any}>
          <Icon name='arrowUp' css={styles.arrow(expanded) as any} />
          <Typography color={expanded ? 'textPrimary' : 'textSecondary'}>
            {title}
          </Typography>
        </div>
        {rightAdornment || <div />}
      </AccordionSummary>
      <AccordionDetails css={styles.content}>{children}</AccordionDetails>
    </MuiAccordion>
  );
};
