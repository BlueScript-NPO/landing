<script setup lang="ts">
const { activeHeadings, updateHeadings } = useScrollspy();
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const links = computed(() => [
  {
    label: "Features",
    to: "#features",
    icon: "i-heroicons-cube-transparent",
    active:
      activeHeadings.value.includes("features") &&
      !activeHeadings.value.includes("testimonials"),
  },
  // {
  //   label: "Testimonials",
  //   to: "#testimonials",
  //   icon: "i-heroicons-academic-cap",
  //   active: activeHeadings.value.includes("testimonials"),
  // },
  {
    label: "About Us",
    to: "#about-us",
    icon: "i-heroicons-users",
    active: activeHeadings.value.includes("about-us"),
  },

  {
    label: "FAQ",
    to: "#faq",
    icon: "i-heroicons-question-mark-circle",
    active: activeHeadings.value.includes("faq"),
  },
]);
</script>

<template>
  <UHeader>
    <template #logo>
      <ClientOnly>
        <img
          src="/logo-dark.png"
          alt="BlueScript darkmode logo"
          class="h-8"
          v-if="isDark"
        />
        <img
          src="/logo.png"
          alt="BlueScript lightmode logo"
          class="h-8"
          v-else
        />
      </ClientOnly>
    </template>

    <template #center>
      <UHeaderLinks :links="links" class="hidden sm:flex" />
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" class="px-2" />
    </template>
  </UHeader>
</template>
