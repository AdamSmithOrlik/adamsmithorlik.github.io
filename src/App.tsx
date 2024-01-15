// import  from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Sidebar from './components/Sidebar'; 
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    <Sidebar />
    <div className="main-content">
    <div id="home" className="section"> {/* Home Section */}
                <h1>Welcome to My Website</h1>
                <p>This is the Home section.</p>
    </div>
    <div id="about" className="section"> {/* Research Section */}
        <h1>About</h1>
        <p>This is my about section.</p>
    </div>
    <div id="research" className="section"> {/* Research Section */}
        <h1>Research</h1>
        <p>This is the Research section.</p>
    </div>
    <div id="blog" className="section"> {/* Blog Section */}
        <h1>Blog</h1>
        <p>This is the Blog section.</p>
    </div>
    </div>
    <Footer />
  </>
  )
}

export default App
