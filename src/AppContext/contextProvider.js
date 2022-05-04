import React, { useState } from 'react'
import AppContext from './AppContext'

const ContextProvider = ({children}) => {
    const [hidden, setHidden] = useState(true)
  return (
    <AppContext.Provider value={{hidden, setHidden}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider