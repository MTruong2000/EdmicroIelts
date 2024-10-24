import AboutUs from '../../components/aboutus'
import Banner from '../../components/banner'
import Discover from '../../components/discover'
import Feedback from '../../components/feedback'
import './style.scss'

function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Discover />
      <Feedback />
    </>
  )
}

export default Home
