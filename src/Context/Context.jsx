import {createContext, useState } from "react";

const Context = createContext()
function Provider({children}) {
    const [order, SetOrder] = useState([])
    return (
        <Context.Provider value={{order, SetOrder}}>{children}</Context.Provider>
    )
}

export {Provider, Context}