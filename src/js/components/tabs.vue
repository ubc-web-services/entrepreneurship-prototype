<template>
  <div class="tabcordion" :class="{ 'tabs-only': tabsonly }">
    <div class="tabs tabcordion__tabs">
      <ul class="tabcordion__links">
        <li v-for="tab in tabs" class="tabcordion__tab" :class="{ 'is-active': tab.isActive }" @update-tab="selectTab(tab)" v-bind:key="tab">
          <button :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</button>
        </li>
      </ul>
    </div>
    <div class="tabs-details tabcordion__content-wrapper text-formatted" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabs',
    props: {
      tabsonly: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {tabs: [] };
    },
    created() {
      this.tabs = this.$children;
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
  }
</script>
