import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';	


import AppRoutes from './routes/Routes';
import Layout from './layout/Layout';


function App() {
  return (
    <Router>
        <Layout>
          <AppRoutes />
        </Layout>
    </Router>
  );
}

export default App;
