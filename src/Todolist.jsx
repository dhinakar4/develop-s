import React from "react";

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [state,{id: Date.now(), text: action.payload, completed:false}];
    }
}