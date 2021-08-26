import Navigation from '../components/LandingPage/Navigation/navigation'
import Landing from '../components/LandingPage/landing'
import Services from '../components/LandingPage/services/services'
import WhoAreWe from '../components/LandingPage/whoarewe/whoarewe'
import Feedback from '../components/LandingPage/feedback/feedback'
export default function Home() {




  return (
    <div style={{ textAlign: "center" }}>
      <Navigation></Navigation>
      <div id="home" style={{height: 750}}>
        <Landing></Landing>
      </div>
      <div id="services" style={{height: 650}}>
        <Services></Services>
      </div>
      <div id="whoarewe" style={{height: 550}}>
        <WhoAreWe></WhoAreWe>
      </div>
      <div id="feedback" style={{height: 750}}>
        <Feedback></Feedback>
      </div>


    </div>

  )
}
