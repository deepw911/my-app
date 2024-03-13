import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

interface SelectedTableTileProps {
  table: string;
  onAddColumnClick: () => void;
}

const SelectedTableTile = ({ table, onAddColumnClick }: SelectedTableTileProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {table}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={onAddColumnClick}>
          Add Column
        </Button>
      </CardActions>
    </Card>
  );
};

export default SelectedTableTile;
