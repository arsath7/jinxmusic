import { useContext} from 'react';
import {Songcontext} from '../songContext';
import { FaRegTimesCircle } from 'react-icons/fa';


const SearchBar = () =>{

    const { searchh,songss } = useContext(Songcontext);
    const[search, setsearch] = searchh;

    const updateSearch = e =>{
        setsearch(e.target.value);
    }

    const clearSearchText = e =>{
         setsearch("");
    }

    return(
        <div className='searchform'>
        <div className="search-bar">
            <input type="text"
            className="search-box"
            value={search}
            onChange={updateSearch}
            placeholder="Search by song name"
            />
            <FaRegTimesCircle onClick={clearSearchText} className='closeicon' />
        </div>
            
        </div>
        
      );
}

export default SearchBar;