import { createContext, useState } from 'react';




const first = createContext(null);


function AuthentificationProvider({ children }) {
    const [user, setUser] = useState(null);
    const [entreprise, setEntreprise] = useState(null);
    
    return <first.Provider value={{
        user
    }}>{children}</first.Provider>;
}


export { AuthentificationProvider };