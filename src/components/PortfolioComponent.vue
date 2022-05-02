<template>
  <BlockWithTitleComponent title="Work I have done">
    <div class="row">
      <div
        v-for="(project, index) in projects"
        class="col-lg-4 col-sm-12 mb-4"
        :key="index"
      >
        <div class="app-portfolio-card">
          <a
            :href="project.imgSrc"
            data-fancybox="gallery"
            :data-caption="project.title"
          >
            <img :src="project.imgSrc" alt="" style="width: 100%" />
          </a>
          <div class="app-portfolio-card__details">
            <h6>{{ project.title }}</h6>
            <p>{{ project.description }}</p>
            <a
              v-if="project.readMoreLink"
              :href="project.readMoreLink"
              target="blank"
            >
              <span>Read More <i class="fa-solid fa-angle-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </BlockWithTitleComponent>
</template>

<script>
import BlockWithTitleComponent from "./BlockWithTitleComponent.vue";
export default {
  name: "PortfolioComponent",
  components: {
    BlockWithTitleComponent,
  },
  data: () => {
    return {
      projects: [
        {
          imgSrc: "/img/portfolio/itourist.png",
          title: "Itourist - Travel partner app",
          description:
            "A platform to manage your day to day tours. Contributed with implementing the backend using NestJ framework and deploying the full application in google cloud.",
          readMoreLink: "",
        },
        {
          imgSrc: "/img/portfolio/waiterbot.png",
          title: "WaiterBot System - A smart food ordering system with waiter bots",
          description:
            "A System of waiter robots with smart food ordering for a restaurant. Contributed with implementing the backend using NodeJs, ExpressJs and Socket.IO",
          readMoreLink: "https://cepdnaclk.github.io/e16-3yp-waiterbot-system/",
        },
        {
          imgSrc: "/img/portfolio/no-image.jpg",
          title: "MyStore - Inventory management system",
          description:
            "A platform for a small and medium scale business to manage their inventory and to sell their products online. MyStore includes a web, mobile application and a desktop application.",
        },
        {
          imgSrc: "/img/portfolio/dvote.png",
          title: "Dvote - Decentralized voting platform",
          description:
            "A Decentralized platform for voting. Contributed with implementing the frontend using VueJs and interacting with ethereum network using Web3 framework.",
        },
        {
          imgSrc: "/img/portfolio/no-image.jpg",
          title: "Crypto info Bot - A messanger bot",
          description:
            "A System for automatically handling the client requests. Implemented using Nodejs.",
        },
      ],
    };
  },
};
</script>

<style>
.app-portfolio-card__details a {
  text-decoration: none;
}

.app-portfolio-card__details a span {
  display: flex;
  align-items: center;
  color: #ffc107;
  gap: 0.25rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

.app-portfolio-card__details i {
  transition: all 0.5s ease-in-out;
}

.app-portfolio-card__details a:hover {
  text-shadow: 0 0 3px rgb(250 250 252 / 40%);
}

.app-portfolio-card__details a:hover i {
  transform: translateX(5px);
}

.app-portfolio-card:hover .app-portfolio-card__details {
  transform: translateY(0%);
}

.app-portfolio-card__details h6 {
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  padding-bottom: 16px;
}

.app-portfolio-card__details p {
  font-weight: 300;
  font-size: 12px;
  color: #8c8c8e;
}

.app-portfolio-card__details {
  position: absolute;
  z-index: 999;
  height: max-content;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.98) 0%,
    rgba(43, 43, 53, 0.98) 100%
  );
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;
}

.app-portfolio-card {
  position: relative;
  overflow: hidden;
}
.app-portfolio-card a img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
  -webkit-filter: brightness(85%) blur(0);
  filter: brightness(85%) blur(0);
  -webkit-transition: 0.55s ease-in-out;
  transition: 0.55s ease-in-out;
}

.app-portfolio-card:hover img {
  filter: brightness(100%) blur(0);
  transform: scale(1.1);
}
</style>
