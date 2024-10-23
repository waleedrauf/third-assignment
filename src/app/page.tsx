import Head from 'next/head';
import Header from "./component/Header"
import Footer from "./component/Footer"

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my minimal landing page" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-3xl mb-4">Welcome to My Landing Page</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:marker:">Get Started</button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
