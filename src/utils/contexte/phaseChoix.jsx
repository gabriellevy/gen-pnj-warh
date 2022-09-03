import React, { useState, createContext } from 'react'

export const PhaseChoixContexte = createContext()

export const PhaseChoixProvider = ({ children }) => {
  const [phaseChoix, majPhaseChoix] = useState(1)

  return (
    <PhaseChoixContexte.Provider value={{ phaseChoix, majPhaseChoix }}>
      {children}
    </PhaseChoixContexte.Provider>
  )
}
