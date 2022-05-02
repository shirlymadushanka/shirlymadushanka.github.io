<template>
  <div class="container-fluid">
    <div class="row pt-4">
      <div class="col-lg-12">
        <div class="hero" style="background-image: url('/img/bg.jpg')">
          <div class="hero-overlay">
            <div class="pa-5">
              <div class="hero-title">Hy! <br />I'm Shirly Madushanka.</div>
              <div class="hero-code-block pt-3">
                &lt;<i>code</i>&gt; I build&nbsp;
                <typewriter :speed="100" :words="codeTextData" />
                &lt;<i>/code</i>&gt;
              </div>
              <a href="/Shirly_Madushanka_CV.pdf" class="app-button" download>Download CV</a>
              <div class="hero-profile-img">
                <img src="/img/profile-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
  data() {
    return {
      codeTextData: [
        "android and ios applications.",
        "Web applications using react/angular/vue.",
        "messanger/discord bots.",
        "rest APIs using .NET Core and Nodejs",
      ],
    };
  },
};
</script>

<style scoped>
.app-button {
  text-transform: uppercase;
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  color: #20202a;
  background: #ffc107;
  letter-spacing: 1.5px;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 35px;
  width: max-content;
  margin-top: 1rem;
}

.hero-profile-img {
  position: absolute;
  flex: 1;
  width: 175px;
  right: 163px;
  top: -166px;
  transform: scale(0.75);
}

.hero-code-block {
  color: white;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  font-family: "Courier Prime", monospace !important;
  align-items: center;
}

.hero-code-block i {
  color: #ffc107;
  font-style: normal;
}

.hero-title {
  color: white;
  font-weight: 800;
  font-size: 2.5rem;
}
</style>
