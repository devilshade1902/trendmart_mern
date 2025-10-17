import React, { useState } from 'react';


const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone_no: '',
    address: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    console.log(signupData)

    // Basic validation
    if (!signupData.name || !signupData.email || !signupData.phone_no || !signupData.address || !signupData.password || !signupData.confirm_password) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    if (signupData.password !== signupData.confirm_password) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }


  };

  return (
    <div className="signup container">
      <h3>Signup</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={signupData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone_no">Phone No</label>
        <input
          type="tel"
          id="phone_no"
          name="phone_no"
          value={signupData.phone_no}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={signupData.address}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={signupData.confirm_password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;