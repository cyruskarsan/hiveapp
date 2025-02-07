import Dropdown from "./components/Dropdown.jsx";

export default function App() {
    return (
        <div className="app-container">
            <h2>Single Selection Dropdown</h2>
            <Dropdown options={["Apple", "Banana", "Cherry"]} />

            <h2>Multiple Selection Dropdown</h2>
            <Dropdown options={["Apple", "Banana", "Cherry"]} multiple />
        </div>
    );
}
