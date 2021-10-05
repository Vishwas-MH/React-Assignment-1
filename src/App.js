import React, { useState } from "react";
import './App.css';

function App() {

  const [inputList, setInputList] = useState([
    { firstName: "", lastName: "" }
  ]);

  const inputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  const addInput = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  }

  const deleteInput = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  return (
    <div className="Container">
      <h2>Names List</h2>
      <div className="displayNames">
        <table>
          <tbody>
            {inputList.length > 0 && inputList && inputList.map((name, index) =>
              <tr key={index}>
                <td>{name.firstName}</td>
                <td>{name.lastName}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        {inputList.map((elem, i) => {
          return (
            <div key={i} className="dynamicStates">
              <div>
                <input type="text" className="inputBox" name="firstName" placeholder="First Name Here" value={elem.firstName} onChange={e => inputChange(e, i)} />
              </div>
              <div>
                <input type="text" className="inputBox" name="lastName" placeholder="Last Name Here" value={elem.lastName} onChange={e => inputChange(e, i)} />
              </div>
              {inputList.length > 1 &&
                <input type="button" className="deleteButton" value="delete" onClick={deleteInput} />
              }
              {inputList.length - 1 === i &&
                <input type="button" className="addButton" value="add" onClick={addInput} />
              }
            </div>

          )
        })}
      </div>
    </div>
  )
}
export default App;