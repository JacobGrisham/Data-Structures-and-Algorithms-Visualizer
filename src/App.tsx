import ControlPanel from './components/ControlPanel';
import BarChart from './components/BarChart';
import Tooltip from './components/Tooltip';
import Table from './components/Table';
import RuntimeCard from './components/RuntimeCard';
import styles from './assets/styles/app.module.scss';


export default function App() {
  return (
    <main className={styles.layout}>
      <ControlPanel></ControlPanel>
      <BarChart></BarChart>
      <Tooltip></Tooltip>
      <Table></Table>
      <RuntimeCard></RuntimeCard>
    </main>
  );
}
