import sheetStyle from "./BudgetViewer.module.scss";

const Day = ({ date, day }) => {
  return <div>{date}</div>;
};

const Week = ({ week, days }) => {
  return (
    <>
      {days.map((day, i) => (
        <Day key={day.title} date={day.date} />
      ))}
    </>
  );
};

const Month = ({ weeks }) => {
  const days = [
    {
      day: "monday",
      date: "2021-03-11",
    },
    {
      day: "tuesday",
      date: "2021-03-12",
    },
    {
      day: "wednesday",
      date: "2021-03-13",
    },
    {
      day: "thursday",
      date: "2021-03-14",
    },
    {
      day: "friday",
      date: "2021-03-15",
    },
    {
      day: "saturday",
      date: "2021-03-16",
    },
    {
      day: "sunday",
      date: "2021-03-17",
    },
  ];
  return (
    <div className={sheetStyle.week}>
      <Week days={days} />
    </div>
  );
};

const BudgetViewer = () => {
  const playData = [
    {
      title: "Awesome game",
      category: "game",
      value: "27",
      note: "I wanted it",
      person: "ch",
      date: "2021-06-08",
    },
    {
      title: "Awesome game",
      category: "food",
      value: "345",
      note: "Normal expenditure",
      person: "ch",
      date: "2021-06-01",
    },
  ];
  const food = playData.filter((category) => category === "food");
  return (
    <>
      <div className={sheetStyle.calendar}>
        <Month />
        <Month />
        <Month />
      </div>
      <div className={sheetStyle.stickDiagram}>
        <div className={sheetStyle.category}>
          <h5>{food} data here</h5>
        </div>
      </div>
    </>
  );
};

export default BudgetViewer;
