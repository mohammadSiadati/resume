import { Box } from '@mui/material';
import Footer from '../src/components/organisms/footer/Footer';
import Header from '../src/components/organisms/header';
import Content from '../src/components/templates/body';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
}
