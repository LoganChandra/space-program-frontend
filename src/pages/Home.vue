<template>
  <div class="background page">
    <div class="col text-white">
      <!-- VALUEOF PI -->
      <div class="module">
        <p class="title">VALUE OF PI</p>
        <div v-if="!!currentPiValue" class="col">
          <p class="break-all text-left text-xl">
            {{ getFormattedPiValue }}
          </p>
        </div>
      </div>

      <!-- CIRCUMFERENCE OF THE SUN -->
      <div class="module">
        <div class="flex flex-row gap-x-3 justify-center ">
          <p class="title">CIRCUMFERENCE OF THE</p>
          <Selection
            class="w-auto"
            v-model="selectedObject"
            :items="objectList"
            resetOnItemChanges
            css="px-4 text-xl font-semibold"
            ref="objectFilter"
          />
        </div>

        <div class="col">
          <p class="text-xl" v-if="!!sunCircumference">
            {{ sunCircumference.toFixed(2) }} KM
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Selection from "../components/Master/Selection.vue";
export default {
  name: "Home",
  components: { Selection },
  data: function () {
    return {
      currentPiValue: "",
      selectedObject: { label: "SUN", value: 696340 },
      objectList: [
        { label: "SUN", value: 696340 },
        { label: "MECURY", value: 2439.7 },
        { label: "VENUS", value: 6051.8 },
        { label: "EARTH", value: 6371 },
        { label: "MARS", value: 3389.5 },
        { label: "JUPITER", value: 69911 },
        { label: "SATURN", value: 58232 },
        { label: "URANUS", value: 25362 },
        { label: "NEPTUNE", value: 24622 },
      ],
    };
  },
  async created() {
    const res = await this.$store.dispatch("api/get", {
      route: "pi/calculate",
    });
    this.currentPiValue = res.data;
    this.$refs.objectFilter.selectItem(this.selectedObject);
  },
  computed: {
    sunCircumference() {
      return parseFloat(this.getFormattedPiValue) * this.selectedObject.value * 2;
    },
    getFormattedPiValue() {
      return `${this.currentPiValue[0]}.${this.currentPiValue.slice(
        1,
        this.currentPiValue.length
      )}`;
    },
  },
};
</script>
<style lang="postcss" scoped>
.background {
  @apply bg-cover bg-no-repeat;
  background-image: url("../assets/images/space.jpeg");
}
.page {
  @apply pt-10;
  height: 100vh;
  width: 100vw;
}
.module {
  @apply mx-auto w-1/2 text-center my-5;
}
.title {
  @apply text-5xl font-semibold whitespace-nowrap;
}
</style>
