import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface DatabaseSelectionProps {
  selectedDatabase: string;
  onDatabaseChange: (database: string) => void;
  // Add props for fetching databases (if applicable)
}

const DatabaseSelection = ({ selectedDatabase, onDatabaseChange, ...fetchProps }: DatabaseSelectionProps) => {
  const [databases, setDatabases] = useState<string[]>([]);

  // Fetch databases from API or use mock data (if applicable)
  useEffect(() => {
    // Implement logic to fetch databases using fetchProps
  }, [fetchProps]);

  const handleDatabaseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onDatabaseChange(event.target.value);
    return null;
  };

  return (
    <FormControl variant='standard' >
      <InputLabel id="demo-simple-select-label">Database</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDatabase}
        label="Database"
        // onChange={handleDatabaseChange}
      >
        {databases.map((database) => (
          <MenuItem key={database} value={database}>
            {database}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DatabaseSelection;
