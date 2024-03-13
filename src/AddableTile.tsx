import { useState } from "react";


interface TileData {
    selectedColumn: string;
    textValue: string;
  }

interface AddableTileProps {
    tile: TileData;
    setTile: (updatedTile: TileData) => void;
  }
  
  const AddableTile: React.FC<AddableTileProps> = ({ tile, setTile }) => {
    const [selectedColumn, setSelectedColumn] = useState<string>(tile.selectedColumn);
    const [textValue, setTextValue] = useState<string>(tile.textValue);
  
    const columns = ['Column 1', 'Column 2', 'Column 3']; // Replace with your column names
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (name === 'selectedColumn') {
        setSelectedColumn(value);
      } else if (name === 'textValue') {
        setTextValue(value);
      }
      setTile({ selectedColumn, textValue });
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      if (name === 'selectedColumn') {
        setSelectedColumn(value);
      } else if (name === 'textValue') {
        setTextValue(value);
      }
      setTile({ selectedColumn, textValue });
    };
    return (
      <div>
        <select name="selectedColumn" value={selectedColumn} onChange={handleSelectChange}>
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
        <input type="text" name="textValue" value={textValue} onChange={handleChange} />
      </div>
    );
  };

  export default AddableTile;