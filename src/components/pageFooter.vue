<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        <span>綠色和平存在，因為脆弱的地球需要改變、需要行動。</span>
        <br />
        <span>但保護地球的使命不能僅靠綠色和平來完成，唯有結合你的力量，才能夠讓地球變得更綠色、更和平。</span>
      </p>
      <div class="footer-list">
        <a href="https://www.greenpeace.org/hongkong/">首頁</a>
        <a
          href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
          title="私隱政策與個人資料收集聲明"
        >私隱政策與個人資料收集聲明</a>
        <a
          href="https://act.greenpeace.org/page/4663/donate/1?campaign=oceans&ref=2019-supermarket-footer"
        >捐助支持</a>
      </div>
      <p class="logo-box">© GREENPEACE 2019</p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 1;
  margin: 20px auto;
  padding: 40px 0 100px;
  font-size: 13px;
  line-height: 1.5;
  border-top: 1px solid $c-border;
  background-color: rgba(255, 255, 255, 0.65);
  color: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer-list {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
      padding: 8px;
      &:first-child {
        padding-left: 0;
      }
    }
  }
  .logo-box {
    margin-top: 20px;
  }
}
</style>