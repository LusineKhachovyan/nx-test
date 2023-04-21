// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Dashboard } from '@mycomp/dashboard';

export function App() {
  return (
    <>
      {/* <NxWelcome title="teams" /> */}
      <h1>TEAMS app</h1>
       <Dashboard title="from teams" />
    </>
  );
}

export default App;
