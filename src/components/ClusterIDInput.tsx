import React, { useState, useEffect } from 'react';
import { TextField, FormControl } from '@material-ui/core';

interface ClusterIDInputProps {
  selectedDatabase: string;
  clusterIDs: string[]; // Array of available cluster IDs
  selectedClusterID: string;
  onClusterIDChange: (clusterID: string) => void;
  // Add props for fetching cluster IDs based on database (if applicable)
}

const ClusterIDInput = ({ selectedDatabase, clusterIDs, selectedClusterID, onClusterIDChange, ...fetchProps }: ClusterIDInputProps) => {
  const [filteredClusterIDs, setFilteredClusterIDs] = useState<string[]>([]);

  // Fetch cluster IDs based on selected database (if applicable)
  useEffect(() => {
    if (selectedDatabase) {
      // Implement logic to fetch cluster IDs based on fetchProps and selectedDatabase
      setFilteredClusterIDs(clusterIDs); // Replace with fetched cluster IDs
    } else {
      setFilteredClusterIDs([]);
    }
  }, [selectedDatabase, clusterIDs, fetchProps]);

  const handleClusterIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onClusterIDChange(event.target.value);
  };

  return (
    <FormControl variant="standard" >
      <TextField
        id="cluster-id"
        label="Cluster ID"
        value={selectedClusterID}
        onChange={handleClusterIDChange}
        select
        SelectProps={{
          native: true,
        }}
        helperText={filteredClusterIDs.length === 0 ? 'No cluster IDs available' : ''}
      >
        {filteredClusterIDs.map((clusterID) => (
          <option key={clusterID} value={clusterID}>
            {clusterID}
          </option>
        ))}
      </TextField>
    </FormControl>
  );
};

export default ClusterIDInput;
