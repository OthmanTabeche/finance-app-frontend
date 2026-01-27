import { Outlet } from 'react-router';

// Layout component for authentication routes (comparten logica)
export function AuthLayout() {
  //const isAuthenticated = true;

  // if (isAuthenticated) {
  //   return <Navigate to="/home" replace />;
  // }

  return (
    <div className="auth-container">
      <h1>My Finance App</h1>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
