const rowNum = 5000;
const colNum = 1000;

// export default [
//     {
//       "r": 0,
//       "c": 0,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "m": "Drop Down List",
//         "v": "Drop Down List",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 1,
//       "v": {
//         "m": "Checkbox",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Checkbox",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 2,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Number between 1-10",
//         "bl": 1,
//         "m": "Number between 1-10"
//       }
//     },
//     {
//       "r": 0,
//       "c": 3,
//       "v": {
//         "m": "Text content include Luckysheet",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Text content include Luckysheet",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 4,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Text length between 1-5",
//         "m": "Text length between 1-5",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 5,
//       "v": {
//         "m": "Date",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Date",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 6,
//       "v": {
//         "m": "Identification Number",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Identification Number",
//         "bl": 1
//       }
//     },
//     {
//       "r": 0,
//       "c": 7,
//       "v": {
//         "m": "Phone Number",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Phone Number",
//         "bl": 1
//       }
//     },
//     {
//       "r": 1,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Fix", "m": "Fix" }
//     },
//     {
//       "r": 1,
//       "c": 1,
//       "v": { "m": "Fail", "ct": { "fa": "General", "t": "g" }, "v": "Fail" }
//     },
//     {
//       "r": 1,
//       "c": 2,
//       "v": { "v": 1, "ct": { "fa": "General", "t": "n" }, "m": "1" }
//     },
//     {
//       "r": 1,
//       "c": 3,
//       "v": {
//         "m": "Luckysheet is good",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Luckysheet is good"
//       }
//     },
//     {
//       "r": 1,
//       "c": 4,
//       "v": { "m": "Welcome", "ct": { "fa": "General", "t": "g" }, "v": "Welcome" }
//     },
//     {
//       "r": 1,
//       "c": 5,
//       "v": {
//         "m": "2020-09-24",
//         "ct": { "fa": "yyyy-MM-dd", "t": "d" },
//         "v": 44098
//       }
//     },
//     {
//       "r": 1,
//       "c": 6,
//       "v": {
//         "v": "311414199009138910",
//         "ct": { "fa": "@", "t": "s" },
//         "m": "311414199009138910"
//       }
//     },
//     {
//       "r": 1,
//       "c": 7,
//       "v": {
//         "v": 13678765439,
//         "ct": { "fa": "General", "t": "n" },
//         "m": "13678765439"
//       }
//     },
//     {
//       "r": 2,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Done", "m": "Done" }
//     },
//     {
//       "r": 2,
//       "c": 1,
//       "v": { "m": "Pass", "ct": { "fa": "General", "t": "g" }, "v": "Pass" }
//     },
//     {
//       "r": 2,
//       "c": 2,
//       "v": { "v": 2, "ct": { "fa": "General", "t": "n" }, "m": "2" }
//     },
//     {
//       "r": 2,
//       "c": 3,
//       "v": {
//         "m": "I am Luckysheet",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "I am Luckysheet"
//       }
//     },
//     {
//       "r": 2,
//       "c": 4,
//       "v": { "m": "Good", "ct": { "fa": "General", "t": "g" }, "v": "Good" }
//     },
//     {
//       "r": 2,
//       "c": 5,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Time", "m": "Time" }
//     },
//     {
//       "r": 2,
//       "c": 6,
//       "v": {
//         "v": "31141419900913891",
//         "ct": { "fa": "@", "t": "s" },
//         "m": "31141419900913891"
//       }
//     },
//     {
//       "r": 2,
//       "c": 7,
//       "v": {
//         "v": 1367876544,
//         "ct": { "fa": "General", "t": "n" },
//         "m": "1367876544"
//       }
//     },
//     {
//       "r": 3,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Develop", "m": "Develop" }
//     },
//     {
//       "r": 3,
//       "c": 1,
//       "v": { "m": "Fail", "ct": { "fa": "General", "t": "g" }, "v": "Fail" }
//     },
//     {
//       "r": 3,
//       "c": 2,
//       "v": { "v": 5, "ct": { "fa": "General", "t": "n" }, "m": "5" }
//     },
//     {
//       "r": 3,
//       "c": 3,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "v": "I am luckyDemo",
//         "m": "I am luckyDemo"
//       }
//     },
//     {
//       "r": 3,
//       "c": 4,
//       "v": { "m": "Nice", "ct": { "fa": "General", "t": "g" }, "v": "Nice" }
//     },
//     {
//       "r": 3,
//       "c": 5,
//       "v": {
//         "m": "2020-09-26",
//         "ct": { "fa": "yyyy-MM-dd", "t": "d" },
//         "v": 44100
//       }
//     },
//     {
//       "r": 3,
//       "c": 6,
//       "v": {
//         "v": "3114141990091389102",
//         "ct": { "fa": "@", "t": "s" },
//         "m": "3114141990091389102"
//       }
//     },
//     {
//       "r": 3,
//       "c": 7,
//       "v": {
//         "v": 136787654412,
//         "ct": { "fa": "##0", "t": "n" },
//         "m": "136787654412"
//       }
//     },
//     {
//       "r": 4,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Doing", "m": "Doing" }
//     },
//     {
//       "r": 4,
//       "c": 1,
//       "v": { "m": "Fail", "ct": { "fa": "General", "t": "g" }, "v": "Fail" }
//     },
//     {
//       "r": 4,
//       "c": 2,
//       "v": { "v": 11, "ct": { "fa": "General", "t": "n" }, "m": "11" }
//     },
//     {
//       "r": 4,
//       "c": 3,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Luckysheet Documentation",
//         "m": "Luckysheet Documentation"
//       }
//     },
//     {
//       "r": 4,
//       "c": 4,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Morning", "m": "Morning" }
//     },
//     {
//       "r": 4,
//       "c": 5,
//       "v": {
//         "m": "2020-09-27",
//         "ct": { "fa": "yyyy-MM-dd", "t": "d" },
//         "v": 44101
//       }
//     },
//     {
//       "r": 4,
//       "c": 6,
//       "v": {
//         "v": "31141419900913891X",
//         "ct": { "fa": "@", "t": "s" },
//         "m": "31141419900913891X"
//       }
//     },
//     {
//       "r": 4,
//       "c": 7,
//       "v": {
//         "v": 49865342456,
//         "ct": { "fa": "General", "t": "n" },
//         "m": "49865342456"
//       }
//     },
//     {
//       "r": 5,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Develop", "m": "Develop" }
//     },
//     {
//       "r": 5,
//       "c": 1,
//       "v": { "m": "Fail", "ct": { "fa": "General", "t": "g" }, "v": "Fail" }
//     },
//     {
//       "r": 5,
//       "c": 2,
//       "v": { "v": 3, "ct": { "fa": "General", "t": "n" }, "m": "3" }
//     },
//     {
//       "r": 5,
//       "c": 3,
//       "v": {
//         "m": "Luckyexcel",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Luckyexcel"
//       }
//     },
//     {
//       "r": 5,
//       "c": 4,
//       "v": {
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Tomorrow",
//         "m": "Tomorrow"
//       }
//     },
//     {
//       "r": 5,
//       "c": 5,
//       "v": {
//         "ct": { "fa": "yyyy-MM-dd", "t": "d" },
//         "v": 44071,
//         "m": "2020-08-28"
//       }
//     },
//     {
//       "r": 5,
//       "c": 6,
//       "v": { "v": "Number", "ct": { "fa": "@", "t": "s" }, "m": "Number" }
//     },
//     {
//       "r": 5,
//       "c": 7,
//       "v": { "v": "Number", "ct": { "fa": "General", "t": "g" }, "m": "Number" }
//     },
//     {
//       "r": 6,
//       "c": 0,
//       "v": { "ct": { "fa": "General", "t": "g" }, "v": "Done", "m": "Done" }
//     },
//     {
//       "r": 6,
//       "c": 1,
//       "v": { "m": "Pass", "ct": { "fa": "General", "t": "g" }, "v": "Pass" }
//     },
//     {
//       "r": 6,
//       "c": 2,
//       "v": { "v": 0, "ct": { "fa": "General", "t": "n" }, "m": "0" }
//     },
//     {
//       "r": 6,
//       "c": 3,
//       "v": {
//         "m": "Luckysheet Online",
//         "ct": { "fa": "General", "t": "g" },
//         "v": "Luckysheet Online"
//       }
//     },
//     {
//       "r": 6,
//       "c": 4,
//       "v": { "m": "Three", "ct": { "fa": "General", "t": "g" }, "v": "Three" }
//     },
//     {
//       "r": 6,
//       "c": 5,
//       "v": {
//         "m": "2020-09-29",
//         "ct": { "fa": "yyyy-MM-dd", "t": "d" },
//         "v": 44103
//       }
//     },
//     {
//       "r": 6,
//       "c": 6,
//       "v": {
//         "v": "311414199301118910",
//         "ct": { "fa": "@", "t": "s" },
//         "m": "311414199301118910"
//       }
//     },
//     {
//       "r": 6,
//       "c": 7,
//       "v": {
//         "v": 23309873564,
//         "ct": { "fa": "General", "t": "n" },
//         "m": "23309873564"
//       }
//     },
//     {
//       "r": 7,
//       "c": 8,
//       "v": { "v": null, "ct": { "fa": "General", "t": "g" }, "bl": 1 }
//     }
//   ]

export const genData = (row, col) => {
  const result = [];
  for (let i = 0; i < col; i++) {
    result.push({
      r: 0,
      c: i,
      v: {
        ct: { fa: "General", t: "g" },
        m: "Drop Down List",
        v: "Drop Down List",
        bl: 1,
      },
    });
    for (let j = 0; j < row; j++) {
      result.push({
        r: j + 1,
        c: i,
        v: {
          v: "311414199301118910",
          ct: { fa: "@", t: "s" },
          m: "311414199301118910",
        },
      });
    }
  }
  return result;
};
const data = [];

export class LogX {
  static timeMap = {};
  static start(key) {
    LogX.timeMap[key] = +new Date();
  }
  static end(key) {
    return +new Date() - LogX.timeMap[key];
  }
}

export default [...data];
