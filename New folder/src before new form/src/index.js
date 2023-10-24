import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ExpenseProvider } from './Contexts/expenseContext';
import { UserProvider } from './Contexts/userContext';
import { FilterProvider } from './Contexts/filterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserProvider>        
    <ExpenseProvider>
        <FilterProvider>
            <App />
        </FilterProvider>
    </ExpenseProvider>
</UserProvider>
);
  