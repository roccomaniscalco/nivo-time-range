import { TimeRange } from "@nivo/calendar";

const data = [
  {
    value: 125,
    day: "2018-06-29",
  },
  {
    value: 140,
    day: "2018-06-10",
  },
  {
    value: 213,
    day: "2018-07-10",
  },
  {
    value: 207,
    day: "2018-06-18",
  },
  {
    value: 310,
    day: "2018-04-14",
  },
  {
    value: 385,
    day: "2018-04-20",
  },
  {
    value: 54,
    day: "2018-05-17",
  },
  {
    value: 195,
    day: "2018-04-15",
  },
  {
    value: 350,
    day: "2018-07-25",
  },
  {
    value: 134,
    day: "2018-04-29",
  },
  {
    value: 291,
    day: "2018-04-24",
  },
  {
    value: 398,
    day: "2018-04-27",
  },
  {
    value: 392,
    day: "2018-05-04",
  },
  {
    value: 200,
    day: "2018-05-24",
  },
  {
    value: 372,
    day: "2018-07-14",
  },
  {
    value: 244,
    day: "2018-05-18",
  },
  {
    value: 165,
    day: "2018-07-31",
  },
  {
    value: 364,
    day: "2018-06-09",
  },
  {
    value: 360,
    day: "2018-08-03",
  },
  {
    value: 274,
    day: "2018-04-18",
  },
  {
    value: 287,
    day: "2018-05-11",
  },
  {
    value: 264,
    day: "2018-05-02",
  },
  {
    value: 164,
    day: "2018-07-04",
  },
  {
    value: 283,
    day: "2018-06-06",
  },
  {
    value: 177,
    day: "2018-05-21",
  },
  {
    value: 258,
    day: "2018-07-30",
  },
  {
    value: 249,
    day: "2018-07-06",
  },
  {
    value: 132,
    day: "2018-04-21",
  },
  {
    value: 312,
    day: "2018-08-05",
  },
  {
    value: 35,
    day: "2018-04-13",
  },
  {
    value: 259,
    day: "2018-07-13",
  },
  {
    value: 46,
    day: "2018-06-15",
  },
  {
    value: 287,
    day: "2018-04-04",
  },
  {
    value: 225,
    day: "2018-07-18",
  },
  {
    value: 375,
    day: "2018-06-16",
  },
  {
    value: 245,
    day: "2018-07-28",
  },
  {
    value: 327,
    day: "2018-08-02",
  },
  {
    value: 237,
    day: "2018-06-28",
  },
  {
    value: 137,
    day: "2018-07-22",
  },
  {
    value: 154,
    day: "2018-07-09",
  },
  {
    value: 218,
    day: "2018-08-09",
  },
  {
    value: 21,
    day: "2018-05-27",
  },
  {
    value: 68,
    day: "2018-06-05",
  },
  {
    value: 65,
    day: "2018-06-22",
  },
  {
    value: 48,
    day: "2018-05-13",
  },
  {
    value: 328,
    day: "2018-07-26",
  },
  {
    value: 147,
    day: "2018-08-01",
  },
  {
    value: 372,
    day: "2018-06-30",
  },
  {
    value: 305,
    day: "2018-07-29",
  },
  {
    value: 214,
    day: "2018-07-16",
  },
  {
    value: 297,
    day: "2018-06-07",
  },
  {
    value: 189,
    day: "2018-08-06",
  },
  {
    value: 389,
    day: "2018-05-23",
  },
  {
    value: 120,
    day: "2018-04-12",
  },
  {
    value: 17,
    day: "2018-05-29",
  },
  {
    value: 162,
    day: "2018-05-05",
  },
  {
    value: 15,
    day: "2018-04-19",
  },
  {
    value: 222,
    day: "2018-05-06",
  },
  {
    value: 328,
    day: "2018-07-27",
  },
  {
    value: 59,
    day: "2018-07-07",
  },
  {
    value: 154,
    day: "2018-06-11",
  },
  {
    value: 305,
    day: "2018-05-09",
  },
  {
    value: 289,
    day: "2018-04-22",
  },
  {
    value: 202,
    day: "2018-04-26",
  },
  {
    value: 86,
    day: "2018-06-19",
  },
  {
    value: 305,
    day: "2018-06-02",
  },
  {
    value: 277,
    day: "2018-04-06",
  },
  {
    value: 340,
    day: "2018-06-21",
  },
  {
    value: 310,
    day: "2018-05-22",
  },
  {
    value: 310,
    day: "2018-04-09",
  },
  {
    value: 310,
    day: "2018-06-27",
  },
  {
    value: 91,
    day: "2018-04-11",
  },
  {
    value: 324,
    day: "2018-06-04",
  },
  {
    value: 55,
    day: "2018-06-12",
  },
];

function App() {
  return (
    <div>
      <h1>Missing Month Legend 😢❌</h1>
      <h2>
        <code>from="2018-04-01"</code>
      </h2>
      <TimeRange
        height={200}
        width={500}
        data={data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        minValue={8}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
      />
      <h1>Has Month Legend 😃✅</h1>
      <h2>
        <code>from="2018/04/01"</code>
      </h2>
      <TimeRange
        height={200}
        width={500}
        data={data}
        from="2018/04/01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        minValue={8}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
      />
    </div>
  );
}

export default App;
