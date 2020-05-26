

	<template>
  <div class="container">
    <div>
      <fieldset>
        <legend class="w-auto">區域設定</legend>
        <!--
					<div class="row">
						<span class="col-3 text-right">行政區</span>
						<div>
							<v-select label="name" :options="city"></v-select>
						</div>
					</div>
        -->
        <div class="row">
          <span class="col-3 text-right">地段</span>
          <input type="text" maxlength="20" size="5" />
        </div>
        <div class="row">
          <span class="col-3 text-right"></span>
          <div>
            <v-select label="name" :options="city"></v-select>
          </div>
        </div>

        <div class="row">
          <span class="col-3 text-right">母號</span>
          <input type="text" maxlength="4" size="5" />
        </div>
        <div class="row">
          <span class="col-3 text-right">子號</span>
          <input type="text" maxlength="4" size="5" />
        </div>
        <div class="row">
          <div col="d-flex justify-content-center">
            <button class="btn btn-outline-secondary btn-sm">查詢</button>
            <button class="btn btn-outline-secondary btn-sm">清除</button>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend class="w-auto">圖面選取工具</legend>
        <div>
          <button>
            <img alt="點" title="點" src="../assets/images/bpoint.png" />
          </button>
          <button>
            <img alt="線" title="線" src="../assets/images/bline.png" />
          </button>
          <button>
            <img alt="矩形" title="矩形" src="../assets/images/retangle.png" />
          </button>
          <button>
            <img alt="多邊形" title="多邊形" src="../assets/images/bpoly.png" />
          </button>
          <button>
            <img alt="清除" title="清除" src="../assets/images/bcancel.png" />
          </button>
        </div>
      </fieldset>
      <fieldset>
        <legend class="w-auto">編輯工具</legend>
        <div>
          <router-link :to="{name: 'Edit'}">
            <button>
              <img alt="編輯" title="編輯" src="../assets/images/edit.png" />
            </button>
          </router-link>
          <button>
            <img alt="註記" title="註記" src="../assets/images/delete.png" />
          </button>
          <button>
            <img alt="確認" title="確認" src="../assets/images/ok.png" />
          </button>
          <router-link :to="{name: 'preview-page'}">
            <button>
              <img alt="預覽" title="預覽" src="../assets/images/openWin.png" />
            </button>
          </router-link>
        </div>
      </fieldset>
      <fieldset>
        <legend class="w-auto">列表資訊</legend>
        <div id="listInfo">未檢核:0筆;已檢核:0筆;機關註記:0筆</div>
      </fieldset>
      <fieldset>
        <legend class="w-auto">檢核列表</legend>
        <div style="width:700px; height:200px; overflow:auto;">
          <table border="1" style="width: 2100px">
            <tr style="background-color: lightgrey;">
              <td>
                <input type="checkbox" />
              </td>
              <td>定位</td>
              <td>隱藏</td>
              <td style="width:100px">遮罩狀態</td>
              <td style="width:70px">段名</td>
              <td>段號</td>
              <td>母號</td>
              <td>子號</td>
              <td style="width:120px">分區簡稱</td>
              <td style="width:120px">分區</td>
              <td style="width:350px">現行都市計畫名稱</td>
              <td style="width:350px">開發方式</td>
              <td>建蔽率</td>
              <td>容積率</td>
              <td>地籍解鎖時間</td>
              <td>地籍更新時間</td>
              <td style="width:350px">機關註解</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" checked />
              </td>
              <td>
                <img src="../assets/images/location.jpg" />
              </td>
              <td>
                <button>隱藏</button>
              </td>
              <td>
                <span style="color:red">及時未顯示</span>
              </td>
              <td>萬年段</td>
              <td>0069</td>
              <td>0353</td>
              <td>0000</td>
              <td>油(專)36(附)</td>
              <td>加油站專用區</td>
              <td>2019/08/15 變更屏東市主要計畫(第五次通盤檢討)(第二階段)案</td>
              <td>「油(專)36(附)」屬應以市地重劃方式開發。「油(專)36(附)」屬1.得申請變更為商業區，有關變更為商業區之負擔公共設施回饋比例、回饋辦法等依「屏東市都市計畫區土地變更負擔公共公共設施審議原則」</td>
              <td>40%</td>
              <td>120%</td>
              <td>20200206</td>
              <td>2020-03-14</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img src="../assets/images/location.jpg" />
              </td>
              <td>
                <button>隱藏</button>
              </td>
              <td>
                <span style="color:red">及時未顯示</span>
              </td>
              <td>萬年段</td>
              <td>0069</td>
              <td>0353</td>
              <td>0001</td>
              <td>河道</td>
              <td>河道用地</td>
              <td>2019/08/15 變更屏東市主要計畫(第五次通盤討論)(第二階段)</td>
              <td>「河道」應屬於市地重劃方式開發</td>
              <td></td>
              <td></td>
              <td>20200108</td>
              <td>2020-03-14</td>
              <td>2014/2/17 開發方式「河道」/「河川區」屬應以市地重劃方式開發。</td>
            </tr>
          </table>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

export default {
  name: "zone",
  data() {
    return {
      city: [
        { id: "0193", name: "三山段", officeCode: "TA" },
        { id: "0004", name: "大埔段一小段", officeCode: "TA" },
        { id: "0005", name: "大埔段二小段", officeCode: "TA" },
        { id: "0006", name: "大埔段三小段", officeCode: "TA" },
        { id: "0046", name: "大連段", officeCode: "TA" },
        { id: "0052", name: "大同段", officeCode: "TA" },
        { id: "0131", name: "大湖段一小段", officeCode: "TA" },
        { id: "0134", name: "大慶段", officeCode: "TA" },
        { id: "0165", name: "大鵬段", officeCode: "TA" },
        { id: "0178", name: "大春段", officeCode: "TA" },
        { id: "0180", name: "中柳段", officeCode: "TA" },
        { id: "0021", name: "六塊厝段", officeCode: "TA" },
        { id: "0018", name: "公園段一小段", officeCode: "TA" },
        { id: "0019", name: "公園段二小段", officeCode: "TA" },
        { id: "0020", name: "公園段三小段", officeCode: "TA" },
        { id: "0022", name: "公館段", officeCode: "TA" },
        { id: "0167", name: "公勤段", officeCode: "TA" },
        { id: "0184", name: "公興段", officeCode: "TA" },
        { id: "0003", name: "文明段三小段", officeCode: "TA" },
        { id: "0044", name: "水源段一小段", officeCode: "TA" },
        { id: "0045", name: "水源段二小段", officeCode: "TA" },
        { id: "0042", name: "北勢段", officeCode: "TA" },
        { id: "0170", name: "北勢段一小段", officeCode: "TA" },
        { id: "1709", name: "北興段", officeCode: "TA" },
        { id: "0164", name: "古松段", officeCode: "TA" },
        { id: "0163", name: "正安段", officeCode: "TA" },
        { id: "0051", name: "民和段", officeCode: "TA" },
        { id: "0055", name: "民生段", officeCode: "TA" },
        { id: "0135", name: "玉成段", officeCode: "TA" },
        { id: "1715", name: "光明段", officeCode: "TA" },
        { id: "0049", name: "灰磘段", officeCode: "TA" },
        { id: "0014", name: "和平段", officeCode: "TA" },
        { id: "0148", name: "和生段", officeCode: "TA" },
        { id: "0187", name: "和興段", officeCode: "TA" },
        { id: "0147", name: "忠孝段", officeCode: "TA" },
        { id: "0048", name: "明正段", officeCode: "TA" },
        { id: "0037", name: "林子內段", officeCode: "TA" },
        { id: "0060", name: "林內段", officeCode: "TA" },
        { id: "0059", name: "花園段", officeCode: "TA" },
        { id: "0188", name: "金城段", officeCode: "TA" },
        { id: "0063", name: "長春段", officeCode: "TA" },
        { id: "0189", name: "信興段", officeCode: "TA" },
        { id: "0194", name: "信和段", officeCode: "TA" },
        { id: "0032", name: "前進段", officeCode: "TA" },
        { id: "0064", name: "建國段", officeCode: "TA" },
        { id: "0061", name: "洛陽段", officeCode: "TA" },
        { id: "0058", name: "香揚段", officeCode: "TA" },
        { id: "0191", name: "香揚段一小段", officeCode: "TA" },
        { id: "0039", name: "海豐段", officeCode: "TA" },
        { id: "0009", name: "崇蘭段", officeCode: "TA" },
        { id: "0056", name: "清溪段", officeCode: "TA" },
        { id: "0179", name: "頂柳段", officeCode: "TA" },
        { id: "0030", name: "勝興段", officeCode: "TA" },
        { id: "0047", name: "復興段", officeCode: "TA" },
        { id: "0041", name: "斯文段", officeCode: "TA" },
        { id: "0024", name: "街頭段一小段", officeCode: "TA" },
        { id: "0025", name: "街頭段二小段", officeCode: "TA" },
        { id: "0026", name: "街頭段三小段", officeCode: "TA" },
        { id: "0027", name: "街頭段四小段", officeCode: "TA" },
        { id: "0028", name: "街頭段五小段", officeCode: "TA" },
        { id: "0029", name: "街頭段六小段", officeCode: "TA" },
        { id: "0166", name: "雲鵬段", officeCode: "TA" },
        { id: "0011", name: "新街段一小段", officeCode: "TA" },
        { id: "0012", name: "新街段二小段", officeCode: "TA" },
        { id: "0013", name: "新街段三小段", officeCode: "TA" },
        { id: "0053", name: "新生段", officeCode: "TA" },
        { id: "0062", name: "新興段", officeCode: "TA" },
        { id: "0065", name: "新屏段", officeCode: "TA" },
        { id: "0185", name: "新歸來段", officeCode: "TA" },
        { id: "0192", name: "新海豐段", officeCode: "TA" },
        { id: "0199", name: "新勝興段", officeCode: "TA" },
        { id: "0007", name: "楠樹腳段一小段", officeCode: "TA" },
        { id: "0008", name: "楠樹腳段二小段", officeCode: "TA" },
        { id: "0023", name: "溝美段", officeCode: "TA" },
        { id: "0111", name: "溝美段一小段", officeCode: "TA" },
        { id: "0057", name: "瑞光段", officeCode: "TA" },
        { id: "0069", name: "萬年段", officeCode: "TA" },
        { id: "0031", name: "福光段", officeCode: "TA" },
        { id: "0175", name: "福正段", officeCode: "TA" },
        { id: "0160", name: "廣興段", officeCode: "TA" },
        { id: "1716", name: "機場段", officeCode: "TA" },
        { id: "0034", name: "頭前溪段", officeCode: "TA" },
        { id: "0182", name: "龍華段", officeCode: "TA" },
        { id: "0035", name: "檳榔腳段一小段", officeCode: "TA" },
        { id: "0036", name: "檳榔腳段二小段", officeCode: "TA" },
        { id: "0033", name: "歸來段", officeCode: "TA" },
        { id: "0054", name: "歸仁段", officeCode: "TA" },
        { id: "0176", name: "歸義段", officeCode: "TA" },
        { id: "0015", name: "舊街段一小段", officeCode: "TA" },
        { id: "0016", name: "舊街段二小段", officeCode: "TA" },
        { id: "0017", name: "舊街段三小段", officeCode: "TA" },
        { id: "1713", name: "舊酒廠段", officeCode: "TA" },
        { id: "0110", name: "豐田段", officeCode: "TA" },
        { id: "0146", name: "豐年段", officeCode: "TA" },
        { id: "0162", name: "豐田段一小段", officeCode: "TA" }
      ]
    };
  },
  methods: {}
};
</script>
