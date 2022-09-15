import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault" />
      </div>
      <h3>go shopping</h3>
      <button type="button" className="btn btn-info">X</button>
    </div>
  );
}

export default Todo;
