import { createContext, useState } from "react";

export const SearchContext = createContext()

export function SearchProvider({ children }) {
    const [search, setSearch] = useState("");
    const [displayList, setDisplayList] = useState(false);

    return (
        <SearchContext.Provider value={{
            search,
            setSearch,
            displayList,
            setDisplayList
        }}>
            {children}
        </SearchContext.Provider>
    )
}