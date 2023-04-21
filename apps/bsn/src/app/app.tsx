// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";
import NxWelcome from "./nx-welcome";
import { Dashboard } from '@mycomp/dashboard';

export function App() {
  return (
    <>
      {/* <NxWelcome title="bsn" /> */}
      <h1>BSN app</h1>
      <Dashboard title="from bsn" />
    </>
  );
}

export default App;
