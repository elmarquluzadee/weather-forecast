import axios from 'axios';
import { useEffect ,useState} from 'react';
import City from './City';
import './App.css';

function App() {
 
const key = "8a33e76685420c6b950a6bc7927a7d2c";
const [search,setSearch] = useState ("america")
const [city,setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
   },[search])
   console.log( search)
  return (

    <div className="App">
      <header className="App-header">
       <input onChange={(e)=>{setSearch(e.target.value)}} className='border-8' type="text" />
       <City city={city} />
      </header>
    </div>
  );
}

export default App;
