<template>
  <div class="container-fluid">
    <div class="row pt-3">
      <div class="col-lg-4 counter-box">
        <span>1+</span>
        <span>Years Experience</span>
      </div>
      <div class="col-lg-4 counter-box">
        <span>5+</span>
        <span>Completed Projects</span>
      </div>
      <div class="col-lg-4 counter-box">
        <span>4</span>
        <span>Happy customers</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceBoxComponent"
};
</script>

<style scoped>
.counter-box {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.counter-box span:nth-child(1) {
  color: #ffc107;
  font-weight: bold;
  font-size: 2rem;
}
.counter-box span:nth-child(2) {
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
}
</style>
