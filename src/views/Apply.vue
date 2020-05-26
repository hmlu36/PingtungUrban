<template>
  <div class="container-flud">
    <div class="row">
      <div class="col-2 text-right txt-label">
        <span style="color: red;">＊</span>申請人/收據抬頭
      </div>
      <input class="col-3 form-control" /> &nbsp;&nbsp;/ &nbsp;
      <input class="col-3 form-control" />
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">
        <span style="color: red;">＊</span>聯絡電話
      </div>
      <input class="col-3 form-control" /> &nbsp;&nbsp;市內電話請輸入
      例如：061234567#121，分機加#號或留手機
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">電子信箱</div>
      <input class="col-5 form-control" />
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">通訊地址</div>
      <label>郵遞區號：</label>
      <input class="col-1 form-control" />&nbsp;&nbsp;
      <label>地址</label>
      <input class="col-3 form-control" />
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">日期</div>
      <vuejs-datepicker
        format="yyyy/MM/dd"
        :language="zh"
        :bootstrap-styling="true"
        :typeable="true"
        placeholder="yyyy/MM/dd"
        class="col-1"
      ></vuejs-datepicker>
    </div>
    <div class="row">
      <div class="col-2 text-right txt-label">文號</div>
      <input class="col-2 form-control" />
    </div>

    <div class="row justify-content-center">
      <router-link :to="{name: 'Map'}">
        <button class="btn btn-sm btn-outline-dark">確定</button>
      </router-link>
      <button class="btn btn-sm btn-outline-dark">清除</button>
    </div>

    <div class="row">
      1.
      <span style="color: red;">＊</span>為必填欄位。
    </div>
    <div class="row">2.新系統必須使用IE9以上 或 Google Chrome瀏覽器才能順利運作！</div>
    <div class="row">3.領取方式若為郵寄，請填寫通訊地址。</div>
  </div>
</template>

<script>
import VuejsDatepicker from "vuejs-datepicker";
import { zh } from "vuejs-datepicker/dist/locale";

export default {
  name: "apply",
  components: {
    VuejsDatepicker
  },
  data() {
    return {
      zh: zh
    };
  },
  methods: {}
};
</script>