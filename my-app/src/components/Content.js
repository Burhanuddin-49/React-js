import Listitem from "./Listitem";

const Content = () => {
  const chores = ["items 1", "items 2", "items 3", "items 4"];
  return (
    <div className="container">
      <ul>
        <Listitem chore="I'm soring" />
      </ul>
    </div>
  );
};

export default Content;
