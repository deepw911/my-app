import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface RuleSelectionProps {
  selectedColumn: string;
  rules: string[]; // Array of available rules for the column (replace with actual rule data)
  onRuleChange: (rule: string) => void;
}

const RuleSelection = ({ selectedColumn, rules, onRuleChange }: RuleSelectionProps) => {
  return (
    <FormControl variant="standard" >
      <InputLabel id="rule-label">Rule</InputLabel>
      <Select
        labelId="rule-label"
        id="rule"
        value={''} // Initially no selection
        label="Rule"
        // onChange={(event) => onRuleChange(event.target.value)}
        disabled={!selectedColumn}
      >
        {rules.map((rule) => (
          <MenuItem key={rule} value={rule}>
            {rule}
          </MenuItem>
        ))}
        {rules.length === 0 && selectedColumn && (
          <MenuItem key="no-rules" value="" disabled>
            No rules available
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default RuleSelection;
