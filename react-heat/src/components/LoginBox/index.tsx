import { useContext, useEffect } from 'react';
import { VscGithubInverted} from 'react-icons/vsc';
import { AuthContext, useAuth } from '../../contexts/auth';

import styles from './styles.module.scss';



export function LoginBox() {

  const { signInUrl } = useAuth();

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a> 
    </div>
  )
}