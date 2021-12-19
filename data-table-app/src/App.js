import "./App.css";

import TableContainer from "./DataTable/TableContainer";

const App = () => {
    let columns = ["Player", "Rating", "Coach"];
    let rows = [
        {
            Player: "Magnus Carlsen",
            Rating: "2890",
            Coach: "Barstad",
        },
        {
            Player: "Alireza Firuza",
            Rating: "2790",
            Coach: "Barstad",
        },
        {
            Player: "Anand Vishwanath",
            Rating: "2700",
            Coach: "Barstad",
        },
        {
            Player: "Anish Giri",
            Rating: "2700",
            Coach: "Vidit Gujrati",
        },
    ];

    return (
        <div className="App">
            <TableContainer columns={columns} rows={rows} />
        </div>
    );
};

export default App;
