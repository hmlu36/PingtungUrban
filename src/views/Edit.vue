<template>
  <div class="container">
    <div class="row">
      <button>新增1欄</button>
      <button>刪除1欄</button>
      <router-link :to="{name: 'Zone'}">
        <button>修改送出</button>
      </router-link>
      <button>圖面點選</button>
    </div>
    <table border="1" style="width:700px">
      <tr style="background-color: lightgrey;">
        <td>分區簡稱</td>
        <td>使用分區</td>
        <td>建蔽率</td>
        <td>容積率</td>
        <td>開發規定編號</td>
        <td>計劃案編號</td>
        <td>發布實施日期</td>
      </tr>
      <tr>
        <td>油(專)36(附)</td>
        <td>加油站專用區</td>
        <td>40%</td>
        <td>120%</td>
        <td>0000-01、0....</td>
        <td>0505</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {};
  },
  methods: {}
};
</script>