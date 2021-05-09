import "./App.css";
import Header from './Components/Header';
import SearchBar from "./Components/Search_bar";
import {Songprovider} from './songContext';
import Song from './Components/song';

function Dashb() {


    return(
      <Songprovider>
        <div className ="app">
          <div className='titlecompo'>
          <Header />
          </div>
          <div className='searchbarcompo'>
          <SearchBar />
          </div>
          <Song />
        </div>
        </Songprovider>
        );
    }
    export default Dashb;