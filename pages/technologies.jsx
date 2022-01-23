
import Head from 'next/head';
import Footer from '../components/Footer';
import Technologies from '../components/Technologies';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <main className='d-flex flex-column min-vh-100'>
      <Head>
        <title>Technologies</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container className='pt-5' >
        <div className="text-center pb-4">
          
        </div>
          <div className="row mb-2">
            <div className="col-sm-12 col-lg-4 col-md-4 mb-sm-3 mb-3">
              <Technologies altName="Python" imgPath="/python.svg"/>
            </div>
            <div className="col-sm-12 col-lg-4  col-md-4  mb-sm-3 mb-3">
              <Technologies altName="NextJs" imgPath="/nextjs.svg" />
            </div>
            <div className="col-sm-12 col-lg-4  col-md-4  mb-sm-3 mb-3">
              <Technologies altName="NestJs" imgPath="/nestjs.svg" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4  col-md-4  mb-sm-3 mb-3">
                <Technologies altName="Docker" imgPath="/docker.svg" />
            </div>
            <div className="col-sm-12 col-lg-4  col-md-4  mb-sm-3 mb-3">
                <Technologies altName="NodeJs" imgPath="/nodejs.svg" />
            </div>
            <div className="col-sm-12 col-lg-4  col-md-4  mb-sm-3 mb-3">
                <Technologies altName="Ruby On Rails" imgPath="/rails.svg" />
            </div>
          </div>
      </Container>
      <Footer />
    </main>
  );
}