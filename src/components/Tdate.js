function Tdate() {
  const today = new Date();

  return (
    <div>
      <p>Today is {today.toDateString()}</p>
    </div>
  );
}

export default Tdate;
