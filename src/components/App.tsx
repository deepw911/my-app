import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import DatabaseSelection from './DatabaseSelection';
import ClusterIDInput from './ClusterIDInput';
import KeyspaceInput from './KeyspaceInput';
import TableList from './TableList';
import SelectedTableTile from './SelectedTableTile';
import ColumnSelection from './ColumnSelection';
import RuleSelection from './RuleSelection';


// Replace with your actual API endpoints or mock data
const API_URL = 'https://your-api.com';

interface AppState {
  activeNav: string;
  selectedDatabase: string;
  clusterIDs: string[];
  selectedClusterID: string;
  keyspaces: string[];
  selectedKeyspace: string;
  tables: string[];
  selectedTables: string[];
  selectedColumns: { [table: string]: string[] }; // Map table name to selected columns
  selectedRules: { [table: string]: { [column: string]: string } }; // Map table and column to selected rule
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    activeNav: 'Database',
    selectedDatabase: 'mongo',
    clusterIDs: ["cluster1","cluster2","cluster3","cluster4","cluster5"],
    selectedClusterID: '',
    keyspaces: ["keyspace1","keyspace2","keyspace3","keyspace4","keyspace5"],
    selectedKeyspace: '',
    tables: ["table1","table2","table3","table4","table5"],
    selectedTables: ["table1","table2","table3"],
    selectedColumns: {},
    selectedRules: {},
  });

  // Fetch data based on selected options (implement API calls or use mock data)
  // const fetchData = async () => {
  //   if (state.selectedDatabase) {
  //     // const response = await fetch(`<span class="math-inline">\{API\_URL\}/databases/</span>{state.selectedDatabase}/cluster-ids`);
  //     // const data = await response.json();
  //     setState((prevState) => ({ ...prevState, clusterIDs: [] }));
  //   } else {
  //     setState((prevState) => ({ ...prevState, clusterIDs: [] }));
  //   }

  //   // Implement similar logic for fetching keyspaces, tables, columns, and rules
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [state.selectedDatabase]);

  // // Update state based on user interactions with components

  const handleNavChange = (nav: string) => {
    setState((prevState) => ({ ...prevState, activeNav: nav }));
  };

  const handleDatabaseChange = (database: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedDatabase: database,
      selectedClusterID: '',
      keyspaces: [],
      selectedKeyspace: '',
      tables: [],
      selectedTables: [],
      selectedColumns: {},
      selectedRules: {},
    }));
  };

  // Implement similar handler functions for other component interactions (e.g., cluster ID, keyspace, table selection, adding columns, selecting rules)

  const handleAddColumnClick = (table: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedColumns: { ...prevState.selectedColumns, [table]: [] }, // Initialize empty column selection for the table
    }));
  };

  const handleColumnChange = (table: string, column: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedColumns: {
        ...prevState.selectedColumns,
        [table]: [...prevState.selectedColumns[table], column], // Add selected column to the table's list
      },
    }));
  };

  const handleRuleChange = (table: string, column: string, rule: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedRules: {
        ...prevState.selectedRules,
        [table]: { ...prevState.selectedRules[table] || {}, [column]: rule }, // Create nested object for table and column, set rule
      },
    }));
  };

  const renderSelectedTables = () => {
    return state.selectedTables.map((table) => (
      <SelectedTableTile key={table} table={table} onAddColumnClick={() => handleAddColumnClick(table)} />
    ));
  };

  return (
    <div className="App">
      <Navigation activeNav={state.activeNav} onNavChange={handleNavChange} />
      {/* {state.activeNav === 'Database' && (
        <>
          <DatabaseSelection selectedDatabase={state.selectedDatabase} onDatabaseChange={handleDatabaseChange} />
       
          <ClusterIDInput
          selectedDatabase={state.selectedDatabase}
          clusterIDs={state.clusterIDs}
          selectedClusterID={state.selectedClusterID}
          
          onClusterIDChange={(clusterID) => setState((prevState) => ({ ...prevState, selectedClusterID: clusterID }))}
        />
        <KeyspaceInput
          selectedClusterID={state.selectedClusterID}
          keyspaces={state.keyspaces} // Implement logic to fetch and update keyspaces
          selectedKeyspace={state.selectedKeyspace}
          onKeyspaceChange={(keyspace) => setState((prevState) => ({ ...prevState, selectedKeyspace: keyspace }))}
        />
        <TableList
          selectedKeyspace={state.selectedKeyspace}
          tables={state.tables} // Implement logic to fetch and update tables
          selectedTables={state.selectedTables}
          onTableChange={(table, isChecked) => {
            setState((prevState) => {
              const updatedTables = isChecked ? [...prevState.selectedTables, table] : prevState.selectedTables.filter((t) => t !== table);
              return { ...prevState, selectedTables: updatedTables };
            });
          }}
        />
        {state.selectedTables.length > 0 && (
          <div>
            {renderSelectedTables()}
            {Object.entries(state.selectedColumns).map(([table, columns]) => (
              <div key={table}>
                <h3>Table: {table}</h3>
                <ColumnSelection
                  selectedTable={table}
                  columns={["col1","col2"]}
                  // columns={state.tables.find((t) => t === table)?.columns || []} // Assuming 'columns' property exists in table data
                  selectedColumns={columns}
                  onColumnChange={(column) => handleColumnChange(table, column)}
                />
                {columns.length > 0 && (
                  <RuleSelection
                    selectedColumn={columns[columns.length - 1]} // Assuming rule selection for the last selected column
                    rules={["rule1","rule2"]}
                    onRuleChange={(rule) => handleRuleChange(table, columns[columns.length - 1], rule)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </>
    )} */}
  </div>
);
};

export default App;
