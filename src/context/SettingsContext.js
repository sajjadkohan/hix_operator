import React, { createContext } from 'react'

const SettingsWrapper = ({children}) => {
    const SettingsContext = createContext();
  return (
    <SettingsContext.Provider value ={{'test':'g'}}>
        {children}
    </SettingsContext.Provider>
  )
}

export default SettingsWrapper