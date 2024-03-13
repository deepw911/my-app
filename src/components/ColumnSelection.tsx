import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface ColumnSelectionProps {
  selectedTable: string;
  columns: string[]; // Array of available columns for the table
  selectedColumns: string[]; // Array of already selected columns for the table
  onColumnChange: (column: string) => void;
  // Add props for fetching columns based on table (if applicable)
}

const ColumnSelection = ({ selectedTable, columns, selectedColumns, onColumnChange, ...fetchProps }: ColumnSelectionProps) => {
  const [filteredColumns, setFilteredColumns] = useState<string[]>([]);

  // Fetch columns based on selected table (if applicable)
  useEffect(() => {
    if (selectedTable) {
      // Implement logic to fetch columns based on fetchProps and selectedTable
      setFilteredColumns(columns.filter((column) => !selectedColumns.includes(column))); // Filter out already selected columns
    } else {
      setFilteredColumns([]);
    }
  }, [selectedTable, columns, selectedColumns, fetchProps]);

  const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onColumnChange(event.target.value);
  };

  return (
    <FormControl variant="standard" >
      <InputLabel id="column-label">Column</InputLabel>
      <Select
        labelId="column-label"
        id="column"
        value={''} // Initially no selection
        label="Column"
        // onChange={handleColumnChange}
        disabled={!selectedTable}
      >
        {filteredColumns.map((column) => (
          <MenuItem key={column} value={column}>
            {column}
          </MenuItem>
        ))}
        {filteredColumns.length === 0 && selectedTable && (
          <MenuItem key="no-columns" value="" disabled>
            No columns available
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default ColumnSelection;

