//state management
import {useState, createContext} from 'react';

export const Songcontext = createContext();

export const Songprovider = props =>{

    const [search, setsearch] = useState("");
    
    const[songs, setsongs] = useState([
        {
            id: 1,
            name: 'raanjhanaa',
            singers: 'Ar rahman',
            genre: 'folk song',
            album: 'Raanjhanaa',
            song: "songs/Raanjhanaa.mp3",
            image: "images/raanjha.jpg"
        },
        {
            id: 2,
            name: 'hasi',
            singers: 'ami mishra',
            genre: 'melody',
            album: 'Hamaari hadhuri kahani',
            song: "songs/Hasi.mp3",
            image: "images/hamari.jpg"
        },
        {
            id: 3,
            name: 'ik vaari aa',
            singers: 'arijit singh',
            genre: 'pop',
            album: 'Raabta',
            song: "songs/Ik Vaari Aa.mp3",
            image: "images/raabta.jpg"
        },
        {
            id: 4,
            name: 'kaise mujhe',
            singers: 'ami mishra',
            genre: 'melody',
            album: 'ghajini',
            song: "songs/Kaise Mujhe.mp3",
            image: "images/ghajini.jpg"
        },
        {
            id: 5,
            name: 'kar-har-maidaan',
            singers: 'lal singh',
            genre: 'motivation',
            album: 'sanju',
            song: "songs/Kar-Har-Maidaan-Fateh.mp3",
            image: "images/sanju.jpg"
        },
        {
            id: 6,
            name: 'the humma song',
            singers: 'ar rahman',
            genre: 'melody',
            album: 'ok jaanu',
            song: "songs/The Humma Song.mp3",
            image: "images/ok jaanu.jpg"
        },
        {
            id: 7,
            name: 'tum tak',
            singers: 'Javed ali',
            genre: 'melody',
            album: 'Raanjhanaa',
            song: "songs/Tum Tak.mp3",
            image: "images/raanjha.jpg"
        },
        {
            id: 8,
            name: 'ullu ka pattha',
            singers: 'Arijit singh',
            genre: 'pop',
            album: 'Jagga jasoos',
            song: "songs/Ullu Ka Pattha.mp3",
            image: "images/jagga.jpg"
        },
        {
            id: 9,
            name: 'yun hi chala chal',
            singers: 'Udit narayanan',
            genre: 'motivation',
            album: 'Swades',
            song: "songs/Yun Hi Chala Chal.mp3",
            image: "images/swades.jpg"
        }

    ]);

   return(
       <Songcontext.Provider value={{songss:[songs, setsongs],searchh:[search, setsearch]}}>
           {props.children}
       </Songcontext.Provider>
   );
}