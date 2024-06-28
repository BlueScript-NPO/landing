<script setup>
import { computed } from "vue";

const { activeHeadings } = useScrollspy();
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

const links = computed(() => {
  const headings = page.value?.links || []; // Provide a fallback empty array
  return headings.map((heading) => ({
    label: heading.title,
    to: `#${heading.slug}`,
    icon: heading.icon || "i-heroicons-default-icon", // Provide a default icon or handle as needed
    active: activeHeadings.value.includes(heading.slug),
  }));
});
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
