<template>
  <div class="hello">
    <div class="sheet-header">
      <span class="back">返回</span>
      <span class="title"></span>
      <div class="sheet-header-right">
        <!-- <button class="cancel" @click="handleCancel">取消</button> -->
        <div>
          <label for="">
            工作表数量:
            <input type="number" min="1" max="10" v-model="sheet" />
          </label>
          <label for="">
            行数:
            <input type="number" min="1" max="5000" v-model="row" />
          </label>
          <label for="">
            列数:
            <input type="number" min="1" max="1000" v-model="col" />
          </label>
        </div>
        <button @click="handleSave">开始测试</button>
      </div>
    </div>
    <div
      id="luckysheet"
      style="
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        left: 0px;
        top: 45px;
        bottom: 0px;
      "
    ></div>

    <div
      v-show="isMaskShow"
      style="
        position: absolute;
        z-index: 1000000;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        font-size: 40px;
        align-items: center;
        justify-content: center;
        display: flex;
      "
    >
      Downloading
    </div>
  </div>
</template>

<script>
import LuckyExcel from "luckyexcel";
import { genData, LogX } from "./data";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      selected: "",
      isMaskShow: false,
      col: 1000,
      row: 5000,
      sheet: 1,
    };
  },
  mounted() {
    // In some cases, you need to use $nextTick
    // this.$nextTick(() => {
    window.$(function () {
      window.luckysheet.create({
        container: "luckysheet", // 设定DOM容器的id
        title: "Luckysheet Demo", // 设定表格名称
        lang: "zh", // 设定表格语言
        // plugins:['chart'],
        enableAddRow: false, // 允许添加行
        enableAddBackTop: false, // 允许回到顶部
        showinfobar: false, //  是否显示顶部信息栏
        showsheetbarConfig: {
          // add: false, //新增sheet
          // menu: false, //sheet管理菜单
          // sheet: false, //sheet页显示
        },
        hook: {
          // cellRenderBefore() {
          //   console.log('cellAllRenderBefore', +new Date())
          // },
          // cellRenderAfter() {
          //   console.log('cellRenderAfter', +new Date())
          // }
        },
        data: [
          {
            name: "Cell", //工作表名称
            color: "", //工作表颜色
            index: 0, //工作表索引
            status: 1, //激活状态
            order: 0, //工作表的下标
            hide: 0, //是否隐藏
            row: 36, //行数
            column: 18, //列数
            defaultRowHeight: 19, //自定义行高
            defaultColWidth: 73, //自定义列宽
            celldata: [], //初始化使用的单元格数据
            config: {
              merge: {}, //合并单元格
              rowlen: {}, //表格行高
              columnlen: {}, //表格列宽
              rowhidden: {}, //隐藏行
              colhidden: {}, //隐藏列
              borderInfo: {}, //边框
              authority: {}, //工作表保护
            },
            scrollLeft: 0, //左右滚动条位置
            scrollTop: 0, //上下滚动条位置
            luckysheet_select_save: [], //选中的区域
            calcChain: [], //公式链
            isPivotTable: false, //是否数据透视表
            pivotTable: {}, //数据透视表设置
            filter_select: {}, //筛选范围
            filter: null, //筛选配置
            luckysheet_alternateformat_save: [], //交替颜色
            luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
            luckysheet_conditionformat_save: {}, //条件格式
            frozen: {}, //冻结行列配置
            chart: [], //图表配置
            zoomRatio: 1, // 缩放比例
            image: [], //图片
            showGridLines: 1, //是否显示网格线
            dataVerification: {}, //数据验证配置
          },
        ],
      });
    });

    // });
  },
  methods: {
    uploadExcel(evt) {
      const files = evt.target.files;
      if (files == null || files.length == 0) {
        alert("No files wait for import");
        return;
      }

      let name = files[0].name;
      let suffixArr = name.split("."),
        suffix = suffixArr[suffixArr.length - 1];
      if (suffix != "xlsx") {
        alert("Currently only supports the import of xlsx files");
        return;
      }
      LuckyExcel.transformExcelToLucky(
        files[0],
        function (exportJson, luckysheetfile) {
          if (exportJson.sheets == null || exportJson.sheets.length == 0) {
            alert(
              "Failed to read the content of the excel file, currently does not support xls files!"
            );
            return;
          }
          window.luckysheet.destroy();
          window.luckysheet.create({
            container: "luckysheet", //luckysheet is the container id
            showinfobar: false,
            data: exportJson.sheets,
            title: exportJson.info.name,
            userInfo: exportJson.info.name.creator,
          });
        }
      );
    },
    selectExcel(evt) {
      const value = this.selected;
      const name = evt.target.options[evt.target.selectedIndex].innerText;

      if (value == "") {
        return;
      }
      this.isMaskShow = true;

      LuckyExcel.transformExcelToLuckyByUrl(
        value,
        name,
        (exportJson, luckysheetfile) => {
          if (exportJson.sheets == null || exportJson.sheets.length == 0) {
            alert(
              "Failed to read the content of the excel file, currently does not support xls files!"
            );
            return;
          }

          this.isMaskShow = false;
          window.luckysheet.destroy();

          window.luckysheet.create({
            container: "luckysheet", //luckysheet is the container id
            showinfobar: false,
            data: exportJson.sheets,
            title: exportJson.info.name,
            userInfo: exportJson.info.name.creator,
          });
        }
      );
    },
    initExecl(data) {
      window.luckysheet.destroy();
      console.time("创建工作表实列时间");
      window.luckysheet.create({
        container: "luckysheet", // 设定DOM容器的id
        title: "Luckysheet Demo", // 设定表格名称
        lang: "zh", // 设定表格语言
        // plugins:['chart'],
        enableAddRow: false, // 允许添加行
        enableAddBackTop: false, // 允许回到顶部
        showinfobar: false, //  是否显示顶部信息栏
        showsheetbarConfig: {
          // add: false, //新增sheet
          // menu: false, //sheet管理菜单
          // sheet: false, //sheet页显示
        },
        data: data,
        hook: {
          workbookCreateAfter() {
            console.log("渲染时间：%s ms", LogX.end("render"));
          },
        },
        workbookCreateBefore() {
          LogX.start("render");
        },
      });
      console.timeEnd("创建工作表实列时间");
    },
    handleSave() {
      console.time("创建数据时间");
      const cellData = genData(this.row, this.col);
      const data = [];
      for (let i = 0; i < this.sheet; i++) {
        const item = {
          name: "Cell" + i, //工作表名称
          color: "", //工作表颜色
          index: 0, //工作表索引
          status: 1, //激活状态
          order: 0, //工作表的下标
          hide: 0, //是否隐藏
          row: 36, //行数
          column: 18, //列数
          defaultRowHeight: 19, //自定义行高
          defaultColWidth: 73, //自定义列宽
          celldata: cellData, //初始化使用的单元格数据
          config: {
            merge: {}, //合并单元格
            rowlen: {}, //表格行高
            columnlen: {}, //表格列宽
            rowhidden: {}, //隐藏行
            colhidden: {}, //隐藏列
            borderInfo: {}, //边框
            authority: {}, //工作表保护
          },
          scrollLeft: 0, //左右滚动条位置
          scrollTop: 0, //上下滚动条位置
          luckysheet_select_save: [], //选中的区域
          calcChain: [], //公式链
          isPivotTable: false, //是否数据透视表
          pivotTable: {}, //数据透视表设置
          filter_select: {}, //筛选范围
          filter: null, //筛选配置
          luckysheet_alternateformat_save: [], //交替颜色
          luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
          luckysheet_conditionformat_save: {}, //条件格式
          frozen: {}, //冻结行列配置
          chart: [], //图表配置
          zoomRatio: 1, // 缩放比例
          image: [], //图片
          showGridLines: 1, //是否显示网格线
          dataVerification: {}, //数据验证配置
        };
        data.push(item);
      }
      console.timeEnd("创建数据时间");
      this.$nextTick(() => {
        this.initExecl(data);
      });
    },
    handleCancel() {
      alert("取消编辑");
    },
    downloadExcel() {
      const value = this.selected;

      if (value.length == 0) {
        alert("Please select a demo file");
        return;
      }

      var elemIF = document.getElementById("Lucky-download-frame");
      if (elemIF == null) {
        elemIF = document.createElement("iframe");
        elemIF.style.display = "none";
        elemIF.id = "Lucky-download-frame";
        document.body.appendChild(elemIF);
      }
      elemIF.src = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sheet-header {
  display: flex;
  height: 45px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
button {
  height: 32px;
  line-height: 32px;
  background: slateblue;
  padding: 0 20px;
  border: 1px solid slateblue;
  color: #fff;
  cursor: pointer;
}
.sheet-header-right {
  display: flex;
  align-items: center;
}

.sheet-header-right div {
  height: 30px;
  display: flex;
  align-items: center;
}

.sheet-header-right label {
  margin-right: 10px;
  font-size: 14px;
}
.cancel {
  color: #333;
  margin-right: 10px;
  background: #fff;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.back {
  cursor: pointer;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
