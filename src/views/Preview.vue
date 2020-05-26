<template>
  <div class="container-flud">
    <div class="row">
      <div class="col-2 text-right txt-label">申請人</div>
      <div class="col-2 text-left">1</div>
      <div class="col-2 text-right txt-label">收據抬頭</div>
      <div class="col-6 text-rileftght"></div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">電話</div>
      <div class="col-10 text-left">08-1234567</div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">通訊地址</div>
      <div class="col-2 text-left"></div>
      <div class="col-2 text-right txt-label">電子信箱</div>
      <div class="col-6 text-rileftght"></div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">領取方式</div>
      <div class="col-2 text-left">申請區領件</div>
      <div class="col-2 text-right txt-label">份數</div>
      <div class="col-6 text-rileftght">1份</div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">金額</div>
      <div class="col-2 text-left">40元</div>
      <div class="col-2 text-right txt-label">
        <span style="color:red">＊</span>份數
      </div>
      <div class="col-6 text-rileftght">
        <input class="col-3" /> -
        <input class="col-2" />
        <span style="color:red">(請輸入收據編號後5碼)</span>
      </div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">上傳收據</div>
      <div class="col-10 text-left">
        <button class="btn btn-outline-dark btn-sm">選擇檔案</button>未選擇任何檔案
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button
          class="btn btn-outline-dark btn-sm"
        >上傳收據</button>
      </div>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">行政區</div>
      <div class="col-2 text-right txt-label">地段</div>
      <div class="col-2 text-right txt-label">地號</div>
      <div class="col-2 text-right txt-label">核發狀態</div>
      <div class="col-4 text-center txt-label">使用分區</div>
    </div>
    <div class="row">
      <div class="col-2 text-right">中西區</div>
      <div class="col-2 text-right">環河段</div>
      <div class="col-2 text-right">2605</div>
      <div class="col-2 text-right">「即時」「未檢核」</div>
      <div class="col-4 text-center">「油(專)36(附)加油站專用區」</div>
    </div>
    <div class="row">
      <div class="col-2 text-right">中西區</div>
      <div class="col-2 text-right">環河段</div>
      <div class="col-2 text-right">2588</div>
      <div class="col-2 text-right">「即時」「已檢核」</div>
      <div class="col-4 text-center">「河道」河道用地</div>
    </div>
    <div class="row">
      <div class="col-3 offset-9">
        <button class="btn btn-outline-dark btn-sm">修改申請人資料</button>&nbsp;
        <button class="btn btn-outline-dark btn-sm">修改申請地號資料</button>&nbsp;
        <button class="btn btn-outline-dark btn-sm">案件取消</button>&nbsp;
        <button class="btn btn-outline-dark btn-sm" v-on:click="print">確認</button>
      </div>
    </div>
    <div id="customers">
      <table id="tab_customers" class="table table-striped">
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr class="warning">
            <th>Country</th>
            <th>Population</th>
            <th>Date</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chinna</td>
            <td>1,363,480,000</td>
            <td>March 24, 2014</td>
            <td>19.1</td>
          </tr>
          <tr>
            <td>India</td>
            <td>1,241,900,000</td>
            <td>March 24, 2014</td>
            <td>17.4</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>317,746,000</td>
            <td>March 24, 2014</td>
            <td>4.44</td>
          </tr>
          <tr>
            <td>Indonesia</td>
            <td>249,866,000</td>
            <td>July 1, 2013</td>
            <td>3.49</td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>201,032,714</td>
            <td>July 1, 2013</td>
            <td>2.81</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "preview",
  data() {
    return {};
  },
  methods: {
    print() {
      var wkhtmltopdf = require("wkhtmltopdf");
      wkhtmltopdf(null, "http://google.com", "google.pdf");
    }
  }
};
</script>