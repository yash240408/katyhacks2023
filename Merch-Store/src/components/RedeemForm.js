import React, { useState } from 'react';
import './RedeemForm.css';

function RedeemForm({ onCodeRedeemed }) {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const redeemCode = () => {
    // Simulated code verification
    if (code === 'EXAMPLE123') {
      onCodeRedeemed();
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  return (
    <div>
      <label htmlFor="code">Enter your code:</label>
      <input
        type="text"
        id="code"
        value={code}
        onChange={handleCodeChange}
        placeholder="Enter your code"
      />
      <button onClick={redeemCode}>Redeem</button>
    </div>
  );
}

export default RedeemForm;
