<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">بستن</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  width: 18rem;
  padding: 2.2rem 1.5rem;
  background-color: #fff;
}
p {
  text-align: center;
  font-family: "vazir";
  margin-bottom: 1rem;
}
button {
  align-self: center;
  font-family: "vazir";
}
</style>
