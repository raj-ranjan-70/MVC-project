import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useEffect } from 'react';
import useAuthStore from './store/useAuthStore';

function App() {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
