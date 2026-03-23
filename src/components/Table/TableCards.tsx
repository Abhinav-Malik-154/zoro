/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Breakpoint, Paper, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from '@/translation';
import Link from 'next/link';

import { Delimiter } from '../Delimiter';
import { Select, SelectOption, SelectProps } from '../Select';
import { useStyles } from './styles';
import { Order, TableProps } from './types';

interface TableCardProps<R>
  extends Pick<
    TableProps<R>,
    | 'data'
    | 'rowKeyExtractor'
    | 'rowOnClick'
    | 'getRowHref'
    | 'breakpoint'
    | 'columns'
  > {
  order: Order<R> | undefined;
  onOrderChange: (newOrder: Order<R>) => void;
}

export function TableCards<R>({
  data,
  rowKeyExtractor,
  rowOnClick,
  getRowHref,
  breakpoint,
  columns,
  order,
  onOrderChange,
}: TableCardProps<R>) {
  const { t } = useTranslation();
  const styles = useStyles();

  const [titleColumn, ...otherColumns] = columns;

  const selectOptions = useMemo(
    () =>
      columns.reduce((acc, column) => {
        if (!column.sortRows) {
          return acc;
        }

        const option: SelectOption = {
          value: column.key,
          label: column.label,
        };

        return [...acc, option];
      }, [] as SelectOption[]),
    [columns]
  );

  const selectedOption = useMemo(
    () =>
      order &&
      selectOptions.find((option) => option.value === order.orderBy.key),
    [order, selectOptions]
  );

  const handleOrderChange: SelectProps['onChange'] = (selectChangeEvent) => {
    const newSelectedOption = selectOptions.find(
      (option) => option.value === selectChangeEvent.target.value
    );
    const orderBy =
      newSelectedOption &&
      columns.find((column) => column.key === newSelectedOption.value);

    if (orderBy) {
      onOrderChange({
        orderBy,
        orderDirection: 'desc',
      });
    }
  };

  return (
    <div
      css={styles.getCardsContainer({ breakpoint: breakpoint as Breakpoint })}
    >
      {selectOptions.length > 0 && (
        <Select
          label={t('table.cardsSelect.label')}
          placeLabelToLeft
          ariaLabel={t('table.cardsSelect.accessibilityLabel')}
          options={selectOptions}
          value={selectedOption?.value}
          onChange={handleOrderChange}
          css={styles.cardsSelect}
        />
      )}

      <div>
        {data.map((row, rowIndex) => {
          const rowKey = rowKeyExtractor(row);

          return (
            <Paper
              key={rowKey}
              css={styles.tableWrapperMobile({
                clickable: !!(rowOnClick || getRowHref),
              })}
              onClick={
                rowOnClick &&
                ((e: React.MouseEvent<HTMLDivElement>) => rowOnClick(e, row))
              }
              component={
                getRowHref
                  ? ({
                      children,
                      ...props
                    }: {
                      children: React.ReactNode;
                      [key: string]: any;
                    }) => (
                      <div {...props}>
                        <Link css={styles.link} href={getRowHref(row)}>
                          {children}
                        </Link>
                      </div>
                    )
                  : 'div'
              }
            >
              <div css={styles.rowTitleMobile}>
                {titleColumn.renderCell(row, rowIndex)}
              </div>

              <Delimiter css={styles.delimiterMobile} />

              <div
                className='table__table-cards__card-content'
                css={styles.rowWrapperMobile}
              >
                {otherColumns.map((column) => (
                  <div
                    key={`${rowKey}-${column.key}`}
                    css={styles.cellMobile as any}
                  >
                    <Typography variant='body1' css={styles.cellTitleMobile}>
                      {column.label}
                    </Typography>

                    <Typography variant='body2' css={styles.cellValueMobile}>
                      {column.renderCell(row, rowIndex)}
                    </Typography>
                  </div>
                ))}
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default TableCards;
