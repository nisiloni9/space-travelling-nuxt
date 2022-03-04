<template>
  <div class="container flow flex crew">
    <h1 class="numbered-title"><span>02</span> Meet your Crew</h1>
    <div v-if="member" class="img-container flex">
      <img class="member-picture" :src="member['webp-image'].guid" alt="" />
    </div>
    <div class="dot-indicators flex">
      <button
        v-for="(item, index) in crew"
        :key="index"
        @click="setMember(index)"
      ></button>
    </div>
    <div class="container flex member-info" v-if="member">
      <div class="uppercase ff-serif member-role">{{ member['role'] }}</div>
      <div class="uppercase ff-serif fs-700 member-name">
        {{ member['crew-name'] }}
      </div>
      <p class="text-accent">{{ member.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crew: [],
      active: 0,
    }
  },
  computed: {
    member() {
      return this.crew[this.crew.length - 1 - this.active]
    },
  },
  methods: {
    async loadData() {
      const response = await fetch(
        'https://space.wp.seiwald.hak-stjo.schulwebspace.at/wp-json/wp/v2/crew'
      )
      this.crew = await response.json()
    },
    setMember(value) {
      this.active = value
    },
  },
  mounted() {
    this.loadData()
    document.body.style.backgroundImage = "url('background-crew-mobile.jpg')"
  },
}
</script>

<style scoped>
.crew {
  flex-direction: column;
  align-items: center;
}
.member-info {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
img {
  height: 224px;
}
.member-role {
  font-size: 16px;
  color: hsl(var(--clr-white) / 0.25);
}
.member-name {
  font-size: 24px;
}

.img-container {
  width: 90vw;
  border-bottom: 2px solid hsl(var(--clr-white) / 0.25);
  justify-content: center;
}

.numbered-title {
  font-size: 16px;
}
</style>
