import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import LoadingIndicator from 'components/atoms/a-loading-indicator';
import { RootState } from './store';

const Routes = lazy(() => import('./routes'));

function App() {
  const {
    loading: { isLoading },
  } = useSelector((store: RootState) => store);
  return (
    <Suspense fallback={<LoadingIndicator />}>
      {isLoading && <LoadingIndicator />}
      <Routes />
    </Suspense>
  );
}

export default App;
