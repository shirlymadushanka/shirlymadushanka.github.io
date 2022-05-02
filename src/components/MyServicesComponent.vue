<template>
  <BlockWithTitleComponent title="My Services">
    <div class="row">
      <div
        class="col-lg-4 col-md-12 mb-4"
        v-for="(service, idx) in services"
        :key="idx"
      >
        <div class="app-card">
          <div class="app-card__title">{{ service.title }}</div>
          <div class="app-card__content">
            {{ service.content }}
          </div>
          <div class="app-card__footer">
            <a
              ><span>Order Now <i class="fa-solid fa-angle-right"></i></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </BlockWithTitleComponent>
</template>

<script>
import BlockWithTitleComponent from "./BlockWithTitleComponent.vue";
export default {
  name: "MyServicesComponent",
  components: {
    BlockWithTitleComponent,
  },
  data: () => {
    return {
      services: [
        {
          title: "Web Develpment",
          content:
            "I'll develop simple, medium & large scale web applications using any popular javascript framework like react, vue or angular.",
        },
        {
          title: "Mobile Development",
          content:
            "I can help you to develop small, medium & large scale mobile applications (both ios & android) using Flutter framework.",
        },
        {
          title: "REST/GraphQL API development",
          content:
            "I'll develop restfull APIs using .NET CORE, NestJs or Nodejs. I'll assists you to manage and deploy your API appications and databases in any cloud platform like AWS, Azure, Google.",
        },
        {
          title: "Bot development",
          content:
            "Wanna develop some cool bots to continously engague with your customer base? Let's build messanger or discord bot to improve customer enguagement!",
        },
        {
          title: "DApp development",
          content:
            "I'll help you to write smart contracts using solidity and interact with the smart contract using metamask and web3 framework.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-card__content {
  padding-top: 35px;
  height: calc(215px - 70px);
  overflow: auto;
}

.app-card__footer span {
  display: flex;
  align-items: center;
  color: #ffc107;
  gap: 0.25rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

.app-card__footer i {
  transition: all 0.5s ease-in-out;
}

.app-card__footer a:hover {
  text-shadow: 0 0 3px rgb(250 250 252 / 40%);
}

.app-card__footer a:hover i {
  transform: translateX(5px);
}

.app-card__footer {
  position: absolute;
  padding: inherit;
  bottom: 15px;
  left: 0;
  width: 100%;
  height: 30px;
}

.app-card__title {
  padding: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  font-size: 600;
  font-weight: 600;
  color: #fff;
}

.app-card {
  width: 100%;
  height: 215px;
  padding: 2rem;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  position: relative;
}
</style>
