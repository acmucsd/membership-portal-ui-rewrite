import Register from '@/features/auth/containers/Register';
import PageLayout from '@/layout/PageLayout';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <PageLayout>
      <Register />
    </PageLayout>
  );
};

export default RegisterPage;
