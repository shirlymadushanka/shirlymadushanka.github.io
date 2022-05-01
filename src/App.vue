<template>
  <div class="app">
    <div class="app-container">
      <div class="app-profile-info">
        <div class="app-profile-info-wrapper">
          <div class="app-profile-info-header">
            <div class="profile-avatar">
              <img src="/img/avatar.webp" alt="" />
            </div>
            <h6>Shirly Madushanka</h6>
            <div class="app-profile-profession">
              <p>Undergraduate,</p>
              <p>Freelancer,</p>
              <p>Full-stack Developer</p>
            </div>
          </div>
          <div id="sidebar-scrollbar">
            <div class="px-3">
              <ul class="basic-details">
                <li>
                  <span>Residence:</span>
                  <span>SriLanka</span>
                </li>
                <li>
                  <span>City:</span>
                  <span>Matara</span>
                </li>
                <li>
                  <span>Age:</span>
                  <span>25yrs</span>
                </li>
              </ul>
              <hr />
              <p>
                I'm final year computer engineering undergraduate of university
                of peradeniya, SriLanka.
              </p>
              <p>
                I'm currently following a intership programme at 99X technology
                as Trainee Software Engineer.
              </p>
              <hr />
              <ul class="knowledge-details">
                <li>
                  <span>Programming Languages</span>
                  <p>C, C#, Python, Java, Javascript, Dart</p>
                </li>
                <li>
                  <span>Web development</span>
                  <p>HTML, CSS, Javascript</p>
                </li>
                <li>
                  <span>Frontend Frameworks</span>
                  <p>React, Vue, Angular</p>
                </li>
                <li>
                  <span>Backend Frameworks</span>
                  <p>.NET CORE, Nodejs, NestJs</p>
                </li>
                <li>
                  <span>Databases</span>
                  <p>MySql, MSSql, MongoDB</p>
                </li>
                <li>
                  <span>Mobile development</span>
                  <p>Flutter</p>
                </li>
                <li>
                  <span>Procedural Programming</span>
                  <p>ARM Assembly</p>
                </li>
                <li>
                  <span>Hardware Programming</span>
                  <p>Arduino, Verilog HDL</p>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
          <div class="app-profile-social px-3">
            <a href="https://www.facebook.com/shirly.madushanka/" target="blank"><i class="fa-brands fa-facebook fa-lg" /></a>
            <a href="https://www.instagram.com/shirly_madushanka/" target="blank"><i class="fa-brands fa-instagram fa-lg" /></a>
            <a href="https://lk.linkedin.com/in/shirlyekanayake" target="blank"><i class="fa-brands fa-linkedin fa-lg" /></a>
            <a href="https://github.com/shirlymadushanka" target="blank"><i class="fa-brands fa-github fa-lg" /></a>
            <a href="https://medium.com/@shirlyekanayake" target="blank"><i class="fa-brands fa-medium fa-lg" /></a>
          </div>
      </div>
      <div class="app-content">
        <div class="app-bg" style="background-image: url('/img/bg.jpg')">
          <div class="app-bg-overlay"></div>
        </div>
        <div id="app-scrollbar" style="height: calc(100vh - 30px)">
          <div class="container-fluid">
            <div class="row pt-4">
              <div class="col-lg-12">
                <div class="hero" style="background-image: url('/img/bg.jpg')">
                  <div class="hero-overlay">
                    <div class="pa-5">
                      <div class="hero-title">
                        Hy! <br />I'm Shirly Madushanka.
                      </div>
                      <div class="hero-code-block pt-3">
                        &lt;<i>code</i>&gt; I build&nbsp;
                        <typewriter :speed="100" :words="codeTextData" />
                        &lt;<i>/code</i>&gt;
                      </div>
                      <div class="hero-profile-img">
                        <img src="/img/profile-img.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row pt-5">
              <div class="col-lg-4 counter-box">
                <span>10+</span>
                <span>Years Experience</span>
              </div>
              <div class="col-lg-4 counter-box">
                <span>143+</span>
                <span>Completed Projects</span>
              </div>
              <div class="col-lg-4 counter-box">
                <span>40</span>
                <span>Happy customers</span>
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
  name: "App",
  data() {
    return {
      codeTextData: [
        "android and ios applications.",
        "SPA   web applications using react/angular/vue.",
        "messanger/discord bots.",
        "rest APIs using .NET Core and Nodejs",
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.app-profile-social a {
  color: #8c8c8e;
  transition: all 0.2s;
  cursor: pointer;
}
.app-profile-social a:hover {
  color: #fff;
  text-shadow: 0 0 3px rgb(250 250 252 / 40%);
}

.app-profile-social {
  position: relative;
  bottom: 0;
  left: 0;
  height: 50px;
  display: flex;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
  background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
}

.knowledge-details {
  list-style: none;
  width: 100%;
  padding: 0;
}

.knowledge-details li span:first-child {
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
}

.knowledge-details li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;
}

.basic-details {
  list-style: none;
  width: 100%;
  padding: 0;
}

.basic-details li {
  padding: 5px 0;
}

.basic-details li span:first-child {
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
}

.basic-details li {
  display: flex;
  justify-content: space-between;
}

#sidebar-scrollbar .scrollbar-track.scrollbar-track-y {
  width: 0;
}

#sidebar-scrollbar {
  height: calc(100vh - 30px - 50px);
}

#sidebar-scrollbar .scroll-content {
  padding-top: 260px;
}

.profile-avatar-wrapper {
  position: relative;
}

.ring-container {
  position: relative;
}

.circle {
  width: 15px;
  height: 15px;
  background-color: #62bd19;
  border-radius: 50%;
  position: absolute;
  top: 23px;
  left: 23px;
}

.ringring {
  border: 3px solid #62bd19;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 15px;
  top: 15px;
  -webkit-animation: pulsate 1s ease-out;
  animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  opacity: 0;
}
@keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

.profile-avatar {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.profile-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
}
.profile-avatar:after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: #ffc107;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 15px;
}

.profile-avatar:before {
  content: "";
  border: 3px solid #ffc107;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  bottom: -5px;
  right: 10px;
  -webkit-animation: pulsate 1s ease-out;
  animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  opacity: 0;
  z-index: 10;
}

.app-profile-profession {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.app-profile-info-header h6 {
  padding-top: 12px;
  padding-bottom: 5px;
  color: #fff;
}

.app-profile-info-header p {
  line-height: 2px;
  font-size: 12px;
}

.app-profile-info-header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  padding: 30px;
  height: 250px;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  text-align: center;
  -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
}

.app-profile-info-wrapper {
  padding: 0 1rem;
  position: relative;
}

.counter-box {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
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

#app-scrollbar {
  height: calc(100vh - 30px);
  background: #1e1e28;
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
</style>
