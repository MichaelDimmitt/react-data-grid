import { css } from '@linaria/core';
import type { CalculatedColumn } from '../types';

const measuringCellClassname = css`
  @layer rdg.MeasuringCell {
    contain: strict;
    grid-row: 1;
    visibility: hidden;
  }
`;

export function renderMeasuringCells<R, SR>(
  viewportColumns: readonly CalculatedColumn<R, SR>[],
  observeMeasuringCell: (measuringCell: HTMLDivElement | null) => void
) {
  return (
    <>
      {viewportColumns.map(({ key, idx, width, minWidth, maxWidth }) => (
        <div
          key={key}
          ref={typeof width === 'number' ? undefined : observeMeasuringCell}
          className={measuringCellClassname}
          style={{ gridColumnStart: idx + 1, minWidth, maxWidth }}
          data-measuring-cell-key={key}
        />
      ))}
    </>
  );
}
