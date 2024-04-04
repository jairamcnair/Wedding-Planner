import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.css'
/*import './App.css'
import './index.css'
import './components/Form.css'*/
import './components/SideMenu.css'
import './components/Budget.css'
/* go to getbootstrap.com/docs - on left side under components section, find code there*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
