<template>
  <div class="container-fluid">
    <div class="pt-3">
      <div class="app-block">
        <h6 class="app-block__title">{{title}}</h6>
        <div class="app-block__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockWithTitleComponent",
  props: ['title']
};
</script>

<style scoped>
.app-block__title {
  font-weight: 600;
  font-size: 17px;
  color: #fff;
  padding-bottom: 1rem;
}
</style>
