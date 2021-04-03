import React from 'react';

function App () {
  const [user_name, setUserName] = React.useState(null);

  React.useEffect(()=>{
    fetch('http://localhost:3001/api')
          .then(res=>res.json())
          .then(data=>setUserName(data.username));
  },[])
  return (
    <div className="App">
          <header className="App-header">
            {user_name ? `Hello ${user_name}` : 'Hello World'}
          </header>
        </div>
  )
}

export default App;

