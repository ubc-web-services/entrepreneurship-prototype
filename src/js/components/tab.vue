<template>
  <div class="tabcordion__content-wrapper">
    <button class="tabcordion__heading" v-on:click="selectTab" :class="{ 'is-active': isActive }" :href="href">{{ name }}</button>
    <transition name="fade-alt">
    <div v-show="isActive" class="tabcordion__content" :id="id">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    props: {
      name: { required: true },
      selected: { default: false }
    },
    data() {
      return {
        isActive: false
      };
    },
    computed: {
      href() {
        return '#' + this.name.toLowerCase().replace(/ /g, '-');
      },
      id() {
        return this.name.toLowerCase().replace(/ /g, '-');
      }
    },
    methods: {
      selectTab () {
        this.$emit('update-tab', this.isActive = !this.isActive);
      }
    },
    mounted() {
      this.isActive = this.selected;
    }
  }
</script>
