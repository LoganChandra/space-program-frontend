<template>
  <div class="background page">
    <div class="col text-white">
      <!-- VALUEOF PI -->
      <div class="module">
        <p class="title">VALUE OF PI</p>
        <div v-if="!!currentPiValue" class="col">
          <p class="break-all text-left">
            {{ getFormattedPiValue }}
          </p>
        </div>
      </div>

      <!-- CIRCUMFERENCE OF THE SUN -->
      <div class="module">
        <p class="title">CIRCUMFERENCE OF THE SUN</p>
        <div class="col">
          <p v-if="!!sunCircumference">{{ sunCircumference.toFixed(2) }} KM</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function () {
    return {
      currentPiValue: "",
      sunDiameter: 696340 * 2,
    };
  },
  async created() {
    const res = await this.$store.dispatch("api/get", {
      route: "pi/calculate",
    });
    this.currentPiValue = res.data;
  },
  computed: {
    sunCircumference() {
      return parseFloat(this.getFormattedPiValue) * this.sunDiameter;
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
  height: 100vh;
  width: 100vw;
}
.module {
  @apply mx-auto w-1/2 text-center my-5;
}
.title {
  @apply text-5xl font-semibold;
}
</style>
