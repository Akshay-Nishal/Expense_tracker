import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ExpenseProvider } from './Contexts/expenseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ExpenseProvider>
    <App />
</ExpenseProvider>
);
  