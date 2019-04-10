import React, { useState } from 'react';
import { Column } from '../../types';

interface Props {
  column: Column;
  onChange(change: { filterTerm: string; column: Column }): void;
}

export default function FilterableHeaderCell({ column, onChange }: Props) {
  const [filterTerm, setFilterTerm] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFilterTerm(value);
    onChange({ filterTerm: value, column });
  }

  if (column.filterable === false) {
    return <div />;
  }

  return (
    <div>
      <input
        key={`header-filter-${column.key}`}
        placeholder="Search"
        value={filterTerm}
        onChange={handleChange}
      />
    </div>
  );
}