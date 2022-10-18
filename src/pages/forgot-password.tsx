import PasswordReset from '@/features/auth/containers/PasswordReset';
import PageLayout from '@/layout/PageLayout';
import type { NextPage } from 'next';

const ForgotPassword: NextPage = () => {
  return (
    <PageLayout>
      <PasswordReset />
    </PageLayout>
  );
};

export default ForgotPassword;
