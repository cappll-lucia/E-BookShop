import './App.scss';
import NavBar from './components/NavBar';
import ItemList from './containers/ItemList';

function App() {

  const myCategories = ["Novelas", "Poesía", "Biografías", "Ensayos"];

  const day = 'monday';

  return (
    <>
      <NavBar 
        categories={myCategories} 
        weekday={day} 
      />
      <ItemList/>
      <div className="App">
      </div>
    </>
  );
}

export default App;
