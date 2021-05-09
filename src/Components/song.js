import {useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react';
import {Songcontext} from '../songContext';
import { FaPlay } from 'react-icons/fa';
const Song = () => {
   
    const { songss,searchh} = useContext(Songcontext);
    const[songs, setsongs] = songss;
    const[filtersongs, setfiltersongs] = songss;
    const[search, setsearch] = searchh;
    const [currentSong, setCurrentSong] = useState(0);
    let istruesearchresults;
    
    const song = songs[currentSong];

    if(!song) return null; // don't render the player when no song is available

    const getsong = (e, id) =>{
        e.preventDefault();
        setCurrentSong(id-1);
    }

    if(search != ""){
      istruesearchresults = true;
    }

    return (
      <div>
          <div className='songname'>
           {songs.filter(song =>song.name.includes(search)).map(song =>(
           <div className='songlist'>
             <div className='hiddentitle'>hello</div>
             <img  className='picture' src={song.image} />
           <h1 className='indisong'>{song.name}</h1>
           <div className='details'>
             <p><b>Album:</b> <i>{song.album}</i></p>
             <p><b>Singers:</b> <i>{song.singers}</i></p>
           </div>
           <FaPlay className='playicon' onClick={(e) => getsong(e, song.id)} />
           <div className='hiddentitle'>hello</div>
           </div>
           
           ))}
          </div>
    <div className="player">
        <AudioPlayer
          autoPlay
          src={song.song}
          showJumpControls={false}
          customAdditionalControls={[]}
          showSkipControls
          showFilledVolume
          onEnded={() => setCurrentSong(i => i + 1)}
        />
      </div>
      </div> 
    );
  };
export default Song;