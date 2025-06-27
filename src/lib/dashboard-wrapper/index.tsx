import { Navigate } from 'react-router-dom';
import { checkAuthToken } from 'utils/cookies';

function WithDashboard(Component: any) {
  return function WithDashboardComponent({ ...props }) {
    const hasAuthToken = Boolean(checkAuthToken());
    if (hasAuthToken) {
      return <Component {...props} />;
    }
    return <Navigate to="/" replace />;
  };
}

export default WithDashboard;
