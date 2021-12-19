import "./App.css";

import TableContainer from "./DataTable/TableContainer";

import playerData from "./data";

const App = () => {
    let columns = ["Player", "Rating", "Country"];

    return (
        <div className="App">
            <TableContainer columns={columns} rows={playerData} />
        </div>
    );
};

export default App;
