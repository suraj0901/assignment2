import { useState } from 'react';
import useDetailStore from '../Store/useDetailStore';

export default () => {
  const { addDetail } = useDetailStore(false)[1];
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || surname.trim() === '' || age <= 0) return;
    addDetail({ name, surname, age });
    setAge('');
    setSurname('');
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="">
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="form-control"
          value={age ? age : ''}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </section>
      <button type="submit" className="btn btn-primary w-100">
        Add Detail
      </button>
    </form>
  );
};
