import { Outlet } from 'react-router';

// Layout component for authentication routes (share logic)
export function AuthLayout() {
  //const isAuthenticated = true;

  // TODO: Redirect to home if already authenticated

  return (
    <div className="auth-container">
      <h1>My Finance App</h1>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
