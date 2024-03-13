import React, { useState } from 'react';
import AddableTile from './AddableTile';
interface TileData {
  selectedColumn: string;
  textValue: string;
}

const Tile: React.FC = () => {
  const [tiles, setTiles] = useState<TileData[]>([]);

  const addTile = () => {
    setTiles([...tiles, { selectedColumn: '', textValue: '' }]);
  };



  return (
    <div>
      <button onClick={addTile}>+</button>
      {tiles.map((tile, index) => (
        <AddableTile key={index} tile={tile} setTile={(updatedTile) => {
          setTiles([
            ...tiles.slice(0, index),
            updatedTile,
            ...tiles.slice(index + 1),
          ]);
        }} />
      ))}
    </div>
  );
};


export default Tile;
