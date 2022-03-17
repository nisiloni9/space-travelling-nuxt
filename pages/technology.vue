<template>
  <div class="container flow flex technology">
    <h1 class="numbered-title"><span>03</span> Space Launch</h1>
    <div id="content" v-if="technology">
      <img :src="technology['image-landscape'].guid" />
      <ul class="dot-indicators flex">
        <li
          v-for="(item, index) in technologies"
          :key="item['technology-name']"
          @click="setTechnology(index)"
          class="tech-number"
        >
          {{ index + 1 }}
        </li>
      </ul>
      <div class="vehicle-info">
        <h3 class="uppercase fs-200 ff-sans-cond">The Terminology...</h3>

        <h2 class="uppercase tech-name ff-serif">
          {{ technology['technology-name'] }}
        </h2>
        <p class="tech-description ff-sans-normal">
          {{ technology.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [],
      activeTechnologyIndex: 0,
    }
  },
  methods: {
    async loadData() {
      const response = await fetch(
        'https://space.wp.seiwald.hak-stjo.schulwebspace.at/wp-json/wp/v2/technology'
      )
      this.technologies = await response.json()
    },
    setTechnology(index) {
      this.activeTechnologyIndex = index
    },
  },
  mounted() {
    this.loadData()
    document.body.style.backgroundImage =
      "url('background-technology-mobile.jpg')"
  },
  computed: {
    technology() {
      return this.technologies[
        this.technologies.length - 1 - this.activeTechnologyIndex
      ]
    },
  },
}
</script>

<style scoped>
.technology {
  flex-direction: column;
  align-items: center;
}
.vehicle-info {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
img {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  max-width: 125%;
  width: auto;
}

.numbered-title {
  font-size: 16px;
}

.dot-indicators {
  list-style-type: none;
  justify-content: center;
  margin-left: -10vw;
  padding-top: 1vh;
}

.dot-indicators > *:hover {
  background-color: white;
  color: black;
}

.tech-number {
  padding: 10px 20px 10px 20px;

  border: solid white 1px;
  background: none;
}

.tech-name {
  font-size: 1.5rem;
  padding-bottom: 1vh;
}

.tech-description {
  font-size: 0.94rem;
}
</style>
