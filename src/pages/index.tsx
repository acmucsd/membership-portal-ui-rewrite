import PageLayout from '@/layout/PageLayout';
import { parseCookies } from '@/lib/utils';
import { GetServerSideProps } from 'next';

const Home = ({ user }: any) => {
  return <PageLayout>Welcome Back, {`${user.firstName} ${user.lastName}`}</PageLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: '/login' });
      res.end();
    }
  }

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
