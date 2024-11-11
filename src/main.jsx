import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './context/ContextProvider.jsx'
import { ReducerContextProvider } from './context/ReducerContextProvider.jsx'
createRoot(document.getElementById('root')).render(
<UserContextProvider>
<ReducerContextProvider>

    <App />
</ReducerContextProvider>
</UserContextProvider>
  
)
