import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'
import Introduction from './components/Home/introduction'
import Pagination from './components/Home/pagination'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    
    <Pagination />
  </StrictMode>,
)
