import React,{useEffect,useState} from 'react'
import './Playlist1.css'
import axios from 'axios';
function Playlist1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getsong')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='whole'>
         <div class="centered">
         <table id="songs" border={5}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
           
          </tr>
        </thead>
        {data.map((play) => {
          return (
            <>
            
              <tbody>
                <tr key={play.songid}>
                  <td>{play.songid}</td>
                  <td>{play.songname}</td>
                  <td>{play.songurl}</td>
                 
                </tr>
              </tbody>
            </>
          );
        })}
        
        </table>
    <audio width="320" height="240" controls>
 <source src="file:///G:/Ilayaraja%20Hitz/A_Kuruvi.mp3" type="audio/mp4" />
</audio>      
<br></br>
 <audio width="320" height="240" controls> 
<source src="file:///G:/Ilayaraja%20Hitz/SENBAGAME%20SENBAGAME%20THENPUTHIKAI.mp3" type="video/mp4" />
      
  </audio> 
  <br></br>
 <audio width="320" height="240" controls> 
<source src="file:///G:/Ilayaraja%20Hitz/JINGIDI%20JINGIDI.mp3" type="video/mp4" />
      
  </audio>
  </div>    
 </div>
  )
}

export default Playlist1
