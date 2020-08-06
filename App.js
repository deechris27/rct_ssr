import React, { useState } from 'react';
import './App.scss';

function App() {
    const [names, setNames] = useState(["Deepak", "Mytidbit", "SSR", "SEO"])
    return (
        <React.Fragment>
            <h2>Service side rendered</h2>
            <div style={{ textAlign: 'center', fontSize: '20px', position: 'relative', top: '300px' }}>
                {names.map(name => (
                    <div key={name}>{name}</div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default App;