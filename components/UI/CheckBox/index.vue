<template>
  <section class="checkbox-container" :class="checked">
    <input class="input-checkbox" type="checkbox" :id="itemTitle + '-select'" @change="toggleCheckBox" />
    <label class="form-checkbox input-checkbox--label" :for="itemTitle + '-select'">{{itemTitle}}</label>
  </section>
</template>
<script>
export default {
  props: ["itemTitle"],
  data() {
    return {
      checked: ""
    }
  },
  methods: {
    toggleCheckBox(e) {
			this.$emit("input", e.target.checked, this.itemTitle);
      this.checked = this.checked === "" ? "checked" : "";
    }
  }
};
</script>

<style>
.checkbox-container {
  display: flex;
}
.input-checkbox {
  display: none;
}
.form-checkbox.input-checkbox--label {
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  color: #7F8C8D;
}
.checked .input-checkbox--label {
  color: #2C3E50;
}
.input-checkbox--label::before {
  content: "";
  border: 2px solid #2C3E50;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  position: absolute;
  left: -20px;
  transition: background-color .2s linear;
  transition: transform .2s linear;
}
.checked .input-checkbox--label::before {
  background-color: #2C3E50;
  transform: rotate(90deg);
}
</style>

