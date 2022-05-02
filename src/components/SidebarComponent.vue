<template>
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
            I'm a final year computer engineering undergraduate of university of
            peradeniya, SriLanka.
          </p>
          <p>
            I'm currently following a intership programme at 99X technology as
            Trainee Software Engineer.
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
      <a href="https://www.facebook.com/shirly.madushanka/" target="blank">
        <i class="fa-brands fa-facebook fa-lg" />
      </a>
      <a href="https://www.instagram.com/shirly_madushanka/" target="blank">
        <i class="fa-brands fa-instagram fa-lg" />
      </a>
      <a href="https://lk.linkedin.com/in/shirlyekanayake" target="blank">
        <i class="fa-brands fa-linkedin fa-lg" />
      </a>
      <a href="https://github.com/shirlymadushanka" target="blank">
        <i class="fa-brands fa-github fa-lg" />
      </a>
      <a href="https://medium.com/@shirlyekanayake" target="blank">
        <i class="fa-brands fa-medium fa-lg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style>
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
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
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
</style>
