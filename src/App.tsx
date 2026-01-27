import { Route, Routes } from 'react-router';

import { AuthLayout } from '@/components/AuthLayout';
import { Budget } from '@/components/Budget';
import { Home } from '@/components/Home';
import { Login } from '@/components/Login';
import { NotFound } from '@/components/Not-found';
import { Pots } from '@/components/Pots';
import { RecurringBills } from '@/components/Recurring-bills';
import { Signup } from '@/components/Signup';
import { Transactions } from '@/components/Transactions';

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />

        <Route element={<AuthLayout />}>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Route>

        <Route element={<Transactions />} path="/transactions" />
        <Route element={<Budget />} path="/budget" />
        <Route element={<Pots />} path="/pots" />
        <Route element={<RecurringBills />} path="/recurring-bills" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
