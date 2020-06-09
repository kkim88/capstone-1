import React, { useState } from 'react';
import data from './data.json'

const inventory = data;

function Search() {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(inventory);

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(inventory);
        else {
            const filteredData = inventory.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    }

    return (
        <div className="search">
            Search Products: <input
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
            />
            <div className="box-container">
                {data.map((d, i) => {
                    return <div key={i} className="box">
                        <b>Name: </b>{d.name}<br />
                        <b>Serial: </b>{d.serial}<br />
                        <b>Price: </b>{d.price}<br />
                        <b>Manufacturer: </b>{d.manfuacturer}<br />
                        <b>Category: </b>{d.category}<br />
                        <b>In Stock: </b>{d.quantity}<br />
                        <button>Add to Cart</button>
                    </div>
                })}
                <div className="clearboth"></div>
                {data.length === 0 && <span>No products match your search</span>}
            </div>
        </div>
    );
}



export default Search;
