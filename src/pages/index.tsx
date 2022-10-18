import PageLayout from '@/layout/PageLayout';
import { parseCookies } from '@/lib/utils';
import { GetServerSideProps } from 'next';

const Home = ({ user }: any) => {
  return <PageLayout>Welcome Back, {`${user.firstName} ${user.lastName}`}</PageLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const data = parseCookies(req);

  const userObj = data.user;

  if (!userObj) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { token, ...userData } = JSON.parse(data.user || '');

  return {
    props: {
      user: userData,
    },
  };
};

export default Home;
