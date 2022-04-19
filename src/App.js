import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
   <section>
      <div className = "container">
        <div className='row'>
          <div className='col s12 m9 m8  z-depth-1'>
            <h2>Jemiriye Boluwatifenisolae</h2>
            <div className=''>
            <a href=''>bjemiriye@gmail.com</a>
            <a href=''>LinkedIn</a>
            <a href=''>Website</a>
            </div>
          </div>

        <div className='col s12 m9 m8 z-depth-1'>
             <h4 className = "blue-text text-darken-2">Education</h4>
             <div className='col s12 m9 m8'>
                <h6 className='bold'><b>University of Lagos</b></h6>
                <span>2018 till date</span>
                <h6>B.Sc Electrical Engineering</h6>
             </div>
            
        </div>
        <div className='col s12 m9 m8 z-depth-1'>
             <h4 className = "blue-text text-darken-2">Work Experience</h4>
             <div className='col s12 m9 m8'>
                <h6 className='bold'><b>PyClas</b></h6>
                <span>May 2021- Jan 2022</span>
                <h6>UI/UX Designing</h6>

                <ul>
                  <li>Worked on Design and implementation</li>
                </ul>
             </div>
            
        </div>
        </div>
      </div>
   </section>
  );
}

export default App;
