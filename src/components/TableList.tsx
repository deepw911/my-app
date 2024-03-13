import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@material-ui/core';

interface TableListProps {
  selectedKeyspace: string;
  tables: string[]; // Array of available tables
  selectedTables: string[]; // Array of selected table names
  onTableChange: (table: string, isChecked: boolean) => void;
  // Add props for fetching tables based on keyspace (if applicable)
}

const TableList = ({ selectedKeyspace, tables, selectedTables, onTableChange, ...fetchProps }: TableListProps) => {
  const [filteredTables, setFilteredTables] = useState<string[]>([]);

  // Fetch tables based on selected keyspace (if applicable)
  useEffect(() => {
    if (selectedKeyspace) {
      // Implement logic to fetch tables based on fetchProps and selectedKeyspace
      setFilteredTables(tables); // Replace with fetched tables
    } else {
      setFilteredTables([]);
    }
  }, [selectedKeyspace, tables, fetchProps]);

  const handleTableChange = (event: React.ChangeEvent<HTMLInputElement>, table: string) => {
    onTableChange(table, event.target.checked);
  };

  return (
    <List>
      {filteredTables.map((table) => (
        <ListItem key={table} button dense selected={selectedTables.includes(table)}>
          <Checkbox
            color="primary"
            edge="start"
            checked={selectedTables.includes(table)}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': table }}
            onChange={(event) => handleTableChange(event, table)}
          />
          <ListItemText id={table} primary={table} />
        </ListItem>
      ))}
    </List>
  );
};

export default TableList;
