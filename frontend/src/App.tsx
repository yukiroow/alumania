import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
    const fetchAPI = async () => {
        const res = await axios.get("http://localhost:6969/api");
        console.log(res.data.fruits);
    };

    useEffect(() => {
      fetchAPI();
    }, []);

    return <div>App</div>;
};

export default App;
