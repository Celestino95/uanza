import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Hero} from '@/components';
import { PrimaryLayout } from '@/layouts';
import Modal_Login from '../components/modals/login';
import ContactPage from './contactos';
import AboutUs from '@/components/sobre';






export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Home: NextPageWithLayout = () => {

  return (
    <>
     
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    
    <PrimaryLayout seo={{ title: 'Uanza', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};

export default Home;
