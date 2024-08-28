import React, { useState } from 'react';


export const Release = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false); 

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form:', { username, email, password, phone });
    
    setSuccess(true);
    setUsername('');
    setEmail('');
    setPassword('');
    setPhone('');
    };

  return (
    <div>
      <div id="release-form">
        <h1>Release</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />   

          <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
      
          <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input 
              type="text" 
              id="phone" 
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          <input type="submit" value="Submit" />
        </form>

        {success && <div className="alert-success">Sign-up successful!</div>}
      </div>
    </div>
  );
}

export default Release;