import useDetailStore from '../Store/useDetailStore';

export default ({ detail: { name, surname, age }, index }) => {
  const { delteDetail } = useDetailStore(false)[1];
  return (
    <div className="row">
      <p className="col align-items-center">{name}</p>
      <p className="col align-items-center">{surname}</p>
      <p className="col align-items-center">{age}</p>
      <p className="col align-items-center" onClick={() => delteDetail(index)}>
        &times;
      </p>
    </div>
  );
};
