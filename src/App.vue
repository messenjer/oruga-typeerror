<script setup lang="ts">
import { ref } from 'vue'
import { useOruga } from '@oruga-ui/oruga-next'

const oruga = useOruga()

const elementRef = ref<HTMLElement | null>(null)

function openLoading() {
  oruga.loading.open({
    fullPage: false,
    container: elementRef.value
  })
}
</script>

<template>
  <section>
    <o-field>
      <o-button label="Launch loading" size="medium" variant="primary" @click="openLoading" />
    </o-field>

    <p ref="elementRef" style="position: relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin
      sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </p>
  </section>
</template>
