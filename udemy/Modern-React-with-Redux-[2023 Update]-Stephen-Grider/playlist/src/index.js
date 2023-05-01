import 'bulma/css/bulma.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
