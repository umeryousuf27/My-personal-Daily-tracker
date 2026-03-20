import { createContext, useContext } from 'react'
import { useSettings } from '../hooks/useSettings'

const SettingsCtx = createContext(null)

export function SettingsProvider({ children }) {
  const settingsAPI = useSettings()
  return <SettingsCtx.Provider value={settingsAPI}>{children}</SettingsCtx.Provider>
}

export const useSettingsCtx = () => useContext(SettingsCtx)
