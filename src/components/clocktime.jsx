let time = new Date();

function Clocktime() {
  return (
    <p>
      This the current time {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
}

export default Clocktime;
