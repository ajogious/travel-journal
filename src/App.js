import Nav from './components/Nav';
import { datas } from './components/Data';
import ShoweCase from './ShoweCase';
import './index.scss';

const App = () => {
  const showecase = datas.map((items) => {
    return <ShoweCase key={items.id} item={items} />;
  });

  // console.log(showecase);
  return (
    <div>
      <Nav />
      {showecase}
    </div>
  );
};

export default App;
