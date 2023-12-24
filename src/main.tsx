import ReactDOM from 'react-dom/client';
import ActionsBar from './ActionsBar';

setTimeout(() => {
  ReactDOM.createRoot(document.getElementById('tabsContainer')!).render(
    <ActionsBar />
  );
}, 10000);
