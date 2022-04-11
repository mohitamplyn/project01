import React, { useEffect, useState } from "react";

const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch('http://192.168.29.101:5100/list');
        result = await result.json();
        setProducts(result);
    }
}
export default List;