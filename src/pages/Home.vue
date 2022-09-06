<template>
  <div class="row">
    <div class="col mt-5">
      <!-- VALUEOF PI -->
      <div class="col mx-auto w-1/2 text-center my-5">
        <p class="text-5xl">VALUE OF PI</p>
        <div v-if="!!currentPiValue" class="col">
          <p class="break-all text-left">
            {{ getFormattedPiValue }} 
          </p>
        </div>
      </div>
      <!-- CIRCUMFERENCE OF THE SUN -->
      <div class="col mx-auto w-1/2 text-center my-5">
        <p class="text-5xl">CIRCUMFERENCE OF THE SUN</p>
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
<style></style>
