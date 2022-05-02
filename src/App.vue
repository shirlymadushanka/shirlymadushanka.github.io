<template>
  <div class="app">
    <div class="app-container">
      <SidebarComponent />
      <div class="app-content">
        <div class="app-bg" style="background-image: url('/img/bg.jpg')">
          <div class="app-bg-overlay"></div>
        </div>
        <div id="app-scrollbar" style="height: calc(100vh - 30px)">
          <HeroComponent />
          <ExperienceBoxComponent />
          <MyServicesComponent />
          <PortfolioComponent />
          <ContactInfoComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./components/SidebarComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import ExperienceBoxComponent from "./components/ExperienceBoxComponent.vue";
import MyServicesComponent from "./components/MyServicesComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";
import ContactInfoComponent from "./components/ContactInfoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SidebarComponent,
    HeroComponent,
    ExperienceBoxComponent,
    MyServicesComponent,
    PortfolioComponent,
    ContactInfoComponent,
    FooterComponent
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app-scrollbar {
  height: calc(100vh - 30px);
  background: #1e1e28;
}

body {
  font-family: "Poppins", sans-serif;
  color: #8c8c8e;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.5px;
  overflow: hidden;
}

.app {
  width: 100vw;
  height: 100vh;
  background-color: #191923;
  position: relative;
  overflow: hidden;
  padding: 1rem;
}

.app-profile-info {
  background: #20202a;
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  position: relative;
  z-index: 999;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.55 ease-in-out;
}

.app-container {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.app-content {
  position: relative;
  overflow: hidden;
  width: calc(100vw - 30px - 290px);
  height: calc(100vh - 30px);
}

.app-bg {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  background-position: center;
  height: 400px;
  background-size: cover;
}

.app-bg-overlay {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(30, 30, 40, 0.93) 0%,
    rgba(30, 30, 40, 0.96) 70%,
    rgba(30, 30, 40, 0.99) 80%,
    #1e1e28 100%
  );
}

.container-fluid {
  overflow: hidden;
  padding: 0 30px;
  position: relative;
}

.hero {
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;
  background-size: cover;
  background-position: center;
  position: relative;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  z-index: 999;
}
.hero-overlay {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 60px;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(45, 45, 58, 0.9) 15%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(43, 43, 53, 0.7) 100%
  );
}


.fancybox__container {
  margin: 15px;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
}

.fancybox__container .fancybox__backdrop {
  background: rgba(32, 32, 42, 0.98);
}

.fancybox-is-open .fancybox__backdrop {
  opacity: 1;
}

.fancybox__toolbar {
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.88) 0%,
    rgba(43, 43, 53, 0.88) 100%
  );
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc(100vw - 30px);
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 50px;
  -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  z-index: 999999;
  padding: 0 17px;
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;
}

.fancybox__toolbar .fancybox-button {
  background: transparent;
  color: #8c8c8e;
}

.fancybox-toolbar .fancybox-button:hover {
  color: #fafafc;
}

.fancybox-toolbar .fancybox-button svg {
  width: 20px;
}

.fancybox-slide--image {
  padding: 130px 0 60px;
}

.fancybox__navigation .fancybox__button {
  background-color: transparent;
  margin: 0 15px;
}

.fancybox__infobar {
  top: 0;
  left: 0;
  font-size: 11px;
  margin-left: 5px;
  z-index: 9999999999999;
  height: 70px;
  width: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
  color: #8c8c8e;
}

.fancybox__progress {
  background: #ffc107;
  z-index: 999999999999999999;
}

.fancybox__content .fancybox__image {
  -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
}

.fancybox__thumbs {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
}

</style>
