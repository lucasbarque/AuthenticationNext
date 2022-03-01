import type { NextPage } from 'next';

import { AuthContext } from '../contexts/AuthContext';

import { FormEvent, useContext, useState } from 'react';
import styles from '../styles/home.module.css';


const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Home
