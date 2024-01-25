// import  from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Sidebar from './components/Sidebar'; 
import Footer from './components/Footer';
import Content from './content/Content.json'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    <Sidebar />
    <div className="main-content">
    <div id="home" className="section"> {/* Home Section */}
        <h1>{Content.home.title}</h1>
        <p>{Content.home.content}</p>
    </div>
    <div id="about" className="section"> {/* Research Section */}
        <h1>{Content.about.title}</h1>
        <p>{Content.about.content}</p>
    </div>
    <div id="research" className="section"> {/* Research Section */}
        <h1>{Content.research.title}</h1>
        <p>{Content.research.content}</p>
    </div>
    <div id="blog" className="section"> {/* Blog Section */}
        <h1>{Content.blog.title}</h1>
        <p>{Content.blog.content}</p>
    </div>
    </div>
    <Footer />
  </>
  )
}

export default App
