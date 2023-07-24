import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash);

    const add = (cash) => {
        dispatch({
            type: "add",
            payload: cash,
        });
    };

    const get = (cash) => {
        dispatch({
            type: "get",
            payload: cash,
        });
    };

    return (
        <div className="App">
            <h1>{cash}</h1>
            <button
                onClick={(cash) => {
                    add(Number(prompt("add")));
                }}
            >
                Set
            </button>
            <button
                onClick={(cash) => {
                    get(Number(prompt("get")));
                }}
            >
                Get
            </button>
        </div>
    );
};

export default App;
