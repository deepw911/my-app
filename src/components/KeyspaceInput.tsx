import React, { useState, useEffect } from 'react';
import { TextField, FormControl } from '@material-ui/core';

interface KeyspaceInputProps {
  selectedClusterID: string;
  keyspaces: string[]; // Array of available keyspaces
  selectedKeyspace: string;
  onKeyspaceChange: (keyspace: string) => void;
  // Add props for fetching keyspaces based on cluster ID (if applicable)
}

const KeyspaceInput = ({ selectedClusterID, keyspaces, selectedKeyspace, onKeyspaceChange, ...fetchProps }: KeyspaceInputProps) => {
  const [filteredKeyspaces, setFilteredKeyspaces] = useState<string[]>([]);

  // Fetch keyspaces based on selected cluster ID (if applicable)
  useEffect(() => {
    if (selectedClusterID) {
      // Implement logic to fetch keyspaces based on fetchProps and selectedClusterID
      setFilteredKeyspaces(keyspaces); // Replace with fetched keyspaces
    } else {
      setFilteredKeyspaces([]);
    }
  }, [selectedClusterID, keyspaces, fetchProps]);

  const handleKeyspaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onKeyspaceChange(event.target.value);
  };

  return (
    <FormControl variant="standard" >
      <TextField
        id="keyspace"
        label="Keyspace"
        value={selectedKeyspace}
        onChange={handleKeyspaceChange}
        disabled={!selectedClusterID}
        helperText={filteredKeyspaces.length === 0 ? 'No keyspaces available' : ''}
      />
    </FormControl>
  );
};

export default KeyspaceInput;
