import photoye from './yasak_elma.jpg';
import photomm from './Murder_Mystery.png';
import photoy from './you.jpg';
import { v4 as uuidv4 } from 'uuid';

const movies =[
    {id: uuidv4(), title:"Yasak elma", imageMovie:photoye , 
    description:"Yasak Elma is a Turkish television series created by Medyapım, starring Şevval Sam and Eda Ece. It was written by Melis Civelek and Zeynep Gür, and directed by Neslihan Yeşilyurt for 3 seasons, by Murat Öztürk in the 4th season and by Ece Erdek Koçoğlu from the 5th season", 
    posterURL:"https://www.imdb.com/title/tt8045936/", rating:4, 
    trailer:"https://www.youtube.com/embed/Dcs-WeVBIl4"},
    
    {id: uuidv4(), title:"Murder Mystery", imageMovie:photomm , 
    description:"A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.", 
    posterURL:"https://www.netflix.com/tn-fr/title/80242619", rating:5, 
    trailer:"https://www.youtube.com/embed/5YEVQDr2f3Q"},
  
    {id: uuidv4(), title:"You", imageMovie:photoy , 
    description:"A recent widower struggles to balance raising his daughter on his own, while overcoming the grief of losing his wife and keeping her memory alive.", 
    posterURL:"https://www.imdb.com/title/tt7335184/", rating:3, 
    trailer:"https://www.youtube.com/embed/0r2SYuL9wWo"}
  ]
  export default movies