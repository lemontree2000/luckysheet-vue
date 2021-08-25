export function genSheetKeyMap(rawData = {}) {
  const mapObject = {};
  Object.keys(rawData).map((v, i) => {
    mapObject[v] = i;
  });
  return mapObject;
}
/**
 * r => row
 * c => column
 * v => value
 */
export function genSheetHead(headKeys = []) {
  return Object.keys(headKeys).map((v, i) => {
    return {
      r: 0,
      c: i,
      v: {
        ct: { fa: "General", t: "g" },
        m: v,
        v: v,
        bl: 1,
      },
    };
  });
}

export function genSheetRows(rawData = [], keyMap) {
  const rowDatas = [];
  rawData.forEach((v, i) => {
    Object.keys(v).forEach((key) => {
      rowDatas.push({
        r: i + 1,
        c: keyMap[key],
        v: {
          ct: { fa: "General", t: "g" },
          m: v[key],
          v: typeof v[key] === "object" ? JSON.stringify(v[key]) : v[key], // 注意: 不是string的值需要转换一下， 要不然编辑的时候会报错
          bl: 1,
        },
      });
    });
  });
  return rowDatas;
}
