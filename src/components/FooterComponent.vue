<template>
  <div class="container-fluid">
    <footer>
      <div class="app-copyright-text">© 2021 Shirly Madushanka</div>
      <div>
        Template author:&nbsp;
        <a
          href="https://themeforest.net/user/millerdigitaldesign"
          target="_blank"
          data-no-swup=""
          >Nazar Miller</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
footer {
  padding: 17px 30px 7px;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  font-size: 11px;
  color: #8c8c8e;
  transition: 0.55s ease-in-out;
  z-index: 9;
}
</style>
