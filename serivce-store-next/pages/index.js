import Navigation from '../components/LandingPage/Navigation/navigation'
import Landing from '../components/LandingPage/landing'
import Services from '../components/LandingPage/services/services'
import WhoAreWe  from '../components/LandingPage/whoarewe/whoarewe'
import Feedback from '../components/LandingPage/feedback/feedback'
export default function Home() {




  return (
    <div style= {{textAlign: "center"}}>
      <Navigation></Navigation>
      <Landing></Landing>
      <Services></Services>
      <WhoAreWe></WhoAreWe>
      <Feedback></Feedback>
    </div>

  )
}
