import { createContext, useContext } from 'react'

export const DownloadModalContext = createContext(() => {})

/** Returns a click handler that opens the "Get the app" modal. */
export function useDownloadModal() {
  return useContext(DownloadModalContext)
}
