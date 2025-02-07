import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, multiple = false }) => {
    const [selected, setSelected] = useState(multiple ? [] : null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (option) => {
        if (multiple) {
            setSelected((prev) =>
                prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
            );
        } else {
            setSelected(option);
            setIsOpen(false);
        }
    };

    const handleSelectAll = () => {
        if (selected.length === options.length) {
            setSelected([]);
        } else {
            setSelected(options);
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={toggleDropdown}>
                {multiple
                    ? selected.length > 0
                        ? selected.join(", ")
                        : "Select options"
                    : selected || "Select an option"}
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {multiple && (
                        <li className="dropdown-item" onClick={handleSelectAll}>
                            {selected.length === options.length ? "Deselect All" : "Select All"}
                        </li>
                    )}
                    {options.map((option) => (
                        <li
                            key={option}
                            className="dropdown-item"
                            onClick={() => handleSelect(option)}
                        >
                            {option} {multiple && selected.includes(option) ? "✔" : ""}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
