<template>
  <div class="container-flud">
    <div
      style="width: 100%; height: 100%; margin: 0 auto"
      data-zoom="1"
      data-scale="250000"
      data-loaded
    >
      <div style="display: block; position: absolute; z-index: 1; right: 20px;" v-show="isShow">
        <table
          style="float: right; border-collapse: separate; border-spacing: 10px;"
          height="100%"
          cellspacing="0"
          cellpadding="0"
        >
          <tbody style="display: table-row-group;">
            <tr>
              <td id="ltd5" class="tdHeader" align="center">
                <img
                  alt="地圖操作"
                  src="../assets/images/ManualDownload.png"
                  id="img1"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="手冊下載"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">手冊下載</span>
                </div>
              </td>
              <td id="ltd4" class="tdHeader" align="center">
                <router-link :to="{name: 'Zone'}">
                  <img
                    alt="測量工具"
                    src="../assets/images/ZoneCheck.png"
                    class="imgOptions"
                    style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                    title="分區檢核"
                  />
                </router-link>
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">分區檢核</span>
                </div>
              </td>
              <td id="td3" class="tdHeader" align="center">
                <img
                  alt="定位查詢"
                  src="../assets/images/MapOperation.png"
                  id="img3"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="地圖操作"
                  v-on:click="isShowMapOperation = !isShowMapOperation"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">地圖操作</span>
                </div>
              </td>
              <td id="td2" class="tdHeader" align="center">
                <img
                  alt="圖層顯示"
                  src="../assets/images/MeasuringTools.png"
                  id="img2"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="測量工具"
                  v-on:click="isShowMeasuringTools = !isShowMeasuringTools"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">測量工具</span>
                </div>
              </td>
              <td id="ltdM" class="tdHeader" style="display: none" align="center">
                <img
                  alt="操作說明"
                  src="../assets/images/LocationQuery.png"
                  id="imgM"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="定位查詢"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">定位查詢</span>
                </div>
              </td>
              <td id="ltd1" class="tdHeader" align="center">
                <img
                  alt="圖層管理"
                  src="../assets/images/MapInfo.png"
                  id="limg1"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="圖層資訊"
                  v-on:click="isShowMapInfo = !isShowMapInfo"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">圖層資訊</span>
                </div>
              </td>
              <td id="td5" class="tdHeader" align="center">
                <img
                  alt="地圖輸出"
                  src="../assets/images/PrintMap.png"
                  id="img5"
                  class="imgOptions"
                  style="cursor: pointer; box-shadow: 0 0 5px 3px #999999;"
                  title="地圖輸出"
                  v-on:click="isShowPrintMap = !isShowPrintMap"
                />
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">地圖輸出</span>
                </div>
              </td>
              <td align="center">
                <router-link :to="{name: 'Login'}">
                  <img
                    alt="登出"
                    id="signOutBtn"
                    src="../assets/images/exit.svg"
                    title="登出"
                    style="cursor: pointer; width: 44px; height: 44px; box-shadow: 0 0 5px 3px #999999; background-color: #fff;"
                  />
                </router-link>
                <div>
                  <span style="background-color: rgba(255,255,255,0.6);">登出</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row d-flex justify-content-end">
        <span
          class="noprint"
          style="display: block; position: absolute; z-index: 1; right: 2px; margin-top: 20px"
        >
          <img
            id="hidetool"
            alt="隱藏工具列"
            style="height: 30px !important; width: 15px !important; box-shadow: 0 0 5px 3px #999999; display: inline;"
            src="../assets/images/hide.png"
            class="imgOptions2"
            title="隱藏工具列"
            v-show="isShow"
            @click="toggleShowHide"
          />
          <img
            id="showtool"
            alt="顯示工具列"
            style="height: 30px !important; width: 15px !important; box-shadow: 0 0 5px 3px #999999; display: none;"
            src="../assets/images/show.png"
            class="imgOptions2"
            title="顯示工具列"
            v-show="!isShow"
            @click="toggleShowHide"
          />
        </span>
      </div>
      <div
        style="width: 200px; position: absolute; top: 90px; left: 1700px; height: 170px; opacity: 1; visibility: visible; z-index: 112;"
        v-show="isShowMapOperation"
      >
        <img
          src="../assets/images/MapOperation2.png"
          v-on:click="isShowMapOperation = !isShowMapOperation"
        />
      </div>

      <div
        style="width: 250px; position: absolute; top: 150px; left: 120px; height: 220px; opacity: 1; visibility: visible; z-index: 112;"
        v-show="isShowMeasuringTools"
      >
        <img
          src="../assets/images/MeasuringTools2.png"
          v-on:click="isShowMeasuringTools = !isShowMeasuringTools"
        />
      </div>

      <div
        style="width: 250px; position: absolute; top: 200px; left: 120px; height: 220px; opacity: 1; visibility: visible; z-index: 112;"
        v-show="isShowMapInfo"
      >
        <img src="../assets/images/MapInfo2.png" v-on:click="isShowMapInfo = !isShowMapInfo" />
      </div>

      <div
        style="width: 250px; position: absolute; top: 400px; left: 1600px; height: 220px; opacity: 1; visibility: visible; z-index: 112;"
        v-show="isShowPrintMap"
      >
        <img src="../assets/images/PrintMap2.png" v-on:click="isShowPrintMap = !isShowPrintMap" />
      </div>
      <div class="map_gc"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isShowMapOperation: false,
      isShowMeasuringTools: false,
      isShowMapInfo: false,
      isShowPrintMap: false
    };
  },
  methods: {
    toggleShowHide() {
      this.isShow = !this.isShow;
      console.log(this.isShow);
    }
  }
};
</script>
<style>
.map_gc {
  background: url(../assets/images/basemap.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 1024px;
  min-width: 1024px;

  width: 100%;
  height: auto;
}
</style>