const Content = () => {
  const chores = ["items 1", "items 2", "items 3", "items 4"];
  return (
    <div className="container">
      <ul>
        {chores.map((chore) => (<li>{chore}</li>))}
      </ul>
    </div>
  );
};

export default Content;
