import satData from "./satData";

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
      <div>
        {displaySats.map((satType, id) => {
          return (
            <button onClick={() => filterByType(satType)} key={id}>
              {satType} Orbit
            </button>
          );
        })}
      </div>
      <button onClick={setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
