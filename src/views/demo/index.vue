<template>
  <div class="hello">
    <div class="sheet-header">
      <span class="back">返回</span>
      <span class="title">商品数据批量编辑</span>
      <div class="">
        <button class="cancel" @click="handleCancel">取消</button>
        <button @click="handleSave">保存</button>
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
import cellData from "./data";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      selected: "",
      isMaskShow: false,
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
        //   add: false, //新增sheet
        //   menu: false, //sheet管理菜单
        //   sheet: false, //sheet页显示
        },
        data:  cellData,
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
    handleSave() {
      alert("提交到后端保存");
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
</style>
