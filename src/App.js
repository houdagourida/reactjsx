
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from "./imager/image1.png"

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black;max-width:100vw'}}>

          <h1 class="title red">Your name here</h1>
         <div className="cloor">
           <img src={myImage} className="image" alt="profile" />
           <img src="/téléchargement.jpg" alt="myimage" />
         </div>
      
          
        <div className="grid-item">
          <iframe width="640" height="360" src="https://www.youtube.com/embed/IeL7iq7Lb90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
     </div>  
    </div>
  );
}

export default App;
