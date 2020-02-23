import React from 'react'

 

function CreateEvent(props){
    return(
        <div>
            <img src="" alt=""></img>
            <div>
            <h1>Create event</h1>  
            </div>
          <form  id="form-element">
              <p>Basic Information</p>
              <input type="text" name="events title" className="input" value="Event Title"></input>
              <br>0/75</br>
              <input type="text" name="events type" className="type" value="Type">
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
              </input>
              <input type="text" name="category" className="categories" value="Category">
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
              </input>
              <p id="location">Location</p><br></br>
              <input type="text" name="location"  className="location-input">
                  <option>Venue</option>
                  <option>Online Event</option>
              </input>
              <link href="">
              <button type="button" id="save-button" >Save $ Continue</button>
              </link>

          </form>  
    
           
           
           <input type="text" id={category} className={styles.category} value="Categories">
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
           </input>

        </div>
    )
};


export default CreateEvent;