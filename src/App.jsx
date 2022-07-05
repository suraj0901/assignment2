import AddDetail from './Component/AddDetail';
import Detail from './Component/Detail';
import useDetailStore from './Store/useDetailStore';

function App() {
  const list = useDetailStore()[0];
  const handleClick = () => {
    console.dir(list);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between p-4">
        <h1>Details</h1>
        <button className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className="p-4">
        {list.map((detail, index) => (
          <Detail key={index} detail={detail} index={index} />
        ))}
      </div>
      <AddDetail />
    </div>
  );
}

export default App;
