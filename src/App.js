import "./App.css";
import AddWish from "./components/AddWish";
import Nav from "./components/Nav";
import WishList from "./components/WishList";

function App() {
  return (
    <div className="App">
        <Nav />
        <AddWish/>
        <WishList />
    </div>
  );
}

export default App;
