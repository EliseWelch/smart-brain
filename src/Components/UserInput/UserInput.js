import React from 'react';

const UserInput = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'This magic brain can detect faces from your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div style={{backgroundColor: '#61C0BF'}} className="center pa4 br3 shadow-5">
                    <input style={{border: 'solid black 1px'}} className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                    <button onClick={onButtonSubmit} style={{backgroundColor: '#FAE3D9', marginLeft: '5px', border: 'solid black 1px'}} className="w-30 link pointer grow f4 ph3 pv2 black">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default UserInput;