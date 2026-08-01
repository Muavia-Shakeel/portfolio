import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeedbackForm from '../components/FeedbackForm'

// Unlisted — not in Navbar links. Share the /feedback link directly with clients/colleagues.
export default function Feedback() {
  return (
    <div className="min-h-screen relative z-0">
      <Navbar />
      <main>
        <h1 className="sr-only">Feedback</h1>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  )
}
