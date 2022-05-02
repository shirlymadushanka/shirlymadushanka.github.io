<template>
  <BlockWithTitleComponent title="Contact informations">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="app-contact-card">
          <ul class="basic-details">
            <li>
              <span>Country :</span>
              <span>SriLanka</span>
            </li>
            <li>
              <span>Province :</span>
              <span>Southern province</span>
            </li>
            <li>
              <span>City :</span>
              <span>Matara</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="app-contact-card">
          <ul class="basic-details">
            <li>
              <span>Email :</span>
              <span><a href="mailto:shirlyekanayake@gmail.com" style="color: #8c8c8e; text-decoration: none">shirlyekanayake@gmail.com</a></span>
            </li>
            <li>
              <span>Skype :</span>
              <span>live:shirlyekanayake</span>
            </li>
            <li>
              <span>Mobile :</span>
              <span>+94717726169</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BlockWithTitleComponent>
</template>

<script>
import BlockWithTitleComponent from "./BlockWithTitleComponent.vue";
export default {
  name: "ContactInfoComponent",
  components: {
    BlockWithTitleComponent,
  },
};
</script>

<style>
.app-contact-card {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  padding: 30px;
  margin-bottom: 30px;
}
</style>
