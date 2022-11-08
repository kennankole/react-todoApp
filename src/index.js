import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import TodoContainer from './functionBased/components/TodoContainer'
import "./functionBased/App.css"

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<TodoContainer /> 
		</BrowserRouter>
	</React.StrictMode>,
)
