import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="full_image" />
      <Header />
      <Content />
    </div>
  );
}

export default App;
