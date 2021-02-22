<template>
  <component :is="layout">
    <div v-if="this.$store.state.alert.message" class="bg-gray-200 text-center text-red-600 pt-10 text-xl">
      {{ this.$store.state.alert.message }}
    </div>
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "default";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();    
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    return {
      layout,
    };
  },
  
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.$store.dispatch('alert/clear');
    },
  },
});
</script>
