import "./App.css";
import AddWish from "./components/AddWish";
import Nav from "./components/Nav";
import WishList from "./components/WishList";
import Footer from "./components/Footer"
import {WishProvider} from "./context/WishContext";

function App() {
  
  return (
    <div className="App">
      <WishProvider>
        <Nav />
        <AddWish/>
        <WishList />
      </WishProvider>
      <Footer/>
        
    </div>
  );
}

export default App;
