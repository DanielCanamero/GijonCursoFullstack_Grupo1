import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

// PascalCase // camelCase // snake_case // kebab-case

const root = ReactDOM.createRoot(document.getElementById('root')) //donde queremos renderizar nuestra aplicación

root.render(
  <App />
)