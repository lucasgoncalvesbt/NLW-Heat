import { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setIsSendingMessage(true)

    try {
      await api.post('message', {
        message,
      })

      setMessage('');
    } finally {
      setIsSendingMessage(false)
    }
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton} onClick={() => signOut()}>
        <VscSignOut size='32'/>
      </button>

      <header className={styles.signedUserInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size='16'/>
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button
          disabled={isSendingMessage}
          type="submit"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}