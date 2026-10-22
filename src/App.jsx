import Food from './Food.jsx'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return (
    <>
      <Header />
      <Student name="John Doe" age={30} isstudent={true}/>
      <Student name="patrich" age={25} isstudent={false} />
      <Student />
      <Student/>
      <Food />
      <Food />
      <Button/>
      <Card />
      <Card />
      <Footer />
    </>
  )
}

export default App
