import AboutUs from '../../components/aboutus'
import Banner from '../../components/banner'
import Discover from '../../components/discover'
import Feedback from '../../components/feedback'
import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";

import './style.scss'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Discover />
      <Feedback />
    <Footer />

    </>
  )
}

export default Home
