import React, { useState, useEffect ,useContext} from 'react'

// Create a Context
const AppContext = React.createContext();

// Create a Provider
const AppProvider = ({ children }) => {

    // Variables 
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('marvel');
    const [loading, setLoading] = useState(true);

    // useEffect fires when the search Term changes
    useEffect(() => {
        setLoading(true);
       fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
        .then(res => res.json())
      .then(data =>{
        setItems(data);
        setLoading(false)
      }).catch((err) => {
        setLoading(false);
      })
      },[search])

    // Return the Provider with children components
    return <AppContext.Provider value={{
        loading,
        items,
        setSearch,
    }} >
        { children}
    </AppContext.Provider>
}


// useGlobalContext return the AppContext that can be accessed easily
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// Return Provider to Wrap around the App
export { AppContext, AppProvider}