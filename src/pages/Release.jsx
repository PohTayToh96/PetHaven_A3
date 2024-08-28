import React, { useState } from 'react';


export const Release = () => {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setsex] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false); 

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form:', { name, email, sex, phone });
    
    setSuccess(true);
    setname('');
    setEmail('');
    setsex('');
    setPhone('');
    };

  return (
    <div>
      <div id="release-form">
        <h1>Release</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Pet Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />   

            <label htmlFor="sex">sex:</label>
              <input 
                type="text" 
                id="sex" 
                name="sex" 
                value={sex}
                onChange={(e) => setsex(e.target.value)}
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