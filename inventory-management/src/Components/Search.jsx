import React, { useState } from 'react';
import data from './data.json'

const inventory = data;

export default function Search(props) {

    // props

    const { cart, setCart } = props;

    React.useEffect(() => {
        console.log("cart props <Search />", props.cart)
    })

    // search function

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

    // add to cart button functionality, currently does not work

    const addCart = (i) => {

        console.log("clicked, current item: ", data[i]);
        const purchasedItem = { ...data[i], quantity: 1 };

        setCart([...cart, purchasedItem]);

        const updatedItem = { ...data[i], quantity: data[i].quantity - 1 };

        const dataCopy = { ...data };

        dataCopy.splice(i, 1, updatedItem);

        console.log("updated items", dataCopy)

        setData(dataCopy);
    }

    return (

        // search box

        <div className="search">
            Search Products: <input
                type="text"
                placeholder="Search for products"
                value={searchText}
                onChange={e => handleChange(e.target.value)}
            />
            <p></p>
            <div className="box-container">
                {data.map((d, i) => {
                    return <div key={i} className="box">
                        <img src={d.image} height="150px" width="150px"></img>
                        <b>Name: </b>{d.name}<br />
                        <b>Serial: </b>{d.serial}<br />
                        <b>Price: </b>{d.price}<br />
                        <b>Manufacturer: </b>{d.manfuacturer}<br />
                        <b>Category: </b>{d.category}<br />
                        <b>In Stock: </b>{d.quantity}<br />
                        <button onClick={addCart}>Add to Cart</button>
                    </div>
                })}
                <div className="clearboth"></div>
                {data.length === 0 && <span>No products match your search</span>}
            </div>
        </div>
    );
}
