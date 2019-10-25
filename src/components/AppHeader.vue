<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__logo gp-logo site-logo">
        <img
          src="@/assets/img/gp-logo-vertical.png"
          alt="Greenpeace"
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gp-logo {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 8px;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $s-green;
  @media screen and (min-width: 768px) {
    left: 8px;
  }
  img {
    padding: 2px;
    width: 100%;
    height: auto;
  }
}
</style>


