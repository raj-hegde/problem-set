import logo from './logo.svg';
import logo192 from './logo192.png';
import './App.css';

function Logo(props) {
  const userPic = <img src={logo192} />;
  return userPic
}
function App() {
        return (
           <div>
            Hello world
            <Logo />;
           </div>
);
}


export default App;
