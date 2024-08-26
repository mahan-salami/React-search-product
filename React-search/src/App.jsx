import { useState } from 'react';
import './style.css';
import data from './TemplateData.json';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <>
      <div className='templateContainer'>
        <div className='searchInput_Container'>
          <input
            id='searchInput'
            type='text'
            placeholder='search'
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="template_Container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="price">{val.price}</p>
                </div>
              );
            })
          ) : (
            <div className="not-found">
              <p>{searchTerm} not found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
