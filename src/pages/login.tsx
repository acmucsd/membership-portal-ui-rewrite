import Login from '@/features/auth/containers/Login';
import PageLayout from '@/layout/PageLayout';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
