<template>
  <ULandingHero
    title="Democratizing dyslexia support"
    description="BlueScript developes free and open-source tools to help dyslexic individuals."
    :links="links"
  >
    <template #headline>
      <UBadge
        variant="subtle"
        size="lg"
        class="relative rounded-full font-semibold"
      >
        <NuxtLink
          to="https://github.com/BlueScript-NPO"
          target="_blank"
          class="focus:outline-none"
          tabindex="-1"
        >
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>
        Access the App
        <UIcon
          name="i-heroicons-arrow-top-right-on-square"
          class="ml-1 w-4 h-4 pointer-events-none"
        />
      </UBadge>
    </template>
  </ULandingHero>
</template>

<script setup lang="ts">
const links = ref([
  {
    label: "Get started",
    to: "/",
    trailingIcon: "i-heroicons-arrow-right",
    size: "lg",
    variant: "solid",
  },
  {
    label: "Access Source Code",
    to: "https://github.com/BlueScript-NPO",
    icon: "i-simple-icons-github",
    size: "xl",
    variant: "outline",
  },
]);
</script>
