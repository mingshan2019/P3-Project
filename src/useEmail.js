import { useState } from 'react';

export default function useEmail() {

  const getEm = () => {
    const tokenString = localStorage.getItem('email');
    const userEmail = JSON.parse(tokenString);
    return userEmail?.email
  };

  const [Em, setEm] = useState(getEm());

  const saveEm = userEmail => {
    localStorage.setItem('email', JSON.stringify(userEmail));
    setEm(userEmail.email);
  };

  return {
    setEm: saveEm,
    Em
  }
}