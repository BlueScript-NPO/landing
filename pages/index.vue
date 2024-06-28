<template>
  <ULandingHero
    :title="page.hero.title"
    :description="page.hero.description"
    :links="page.hero.links"
  >
    <template #headline>
      <UBadge
        v-if="page.hero.headline"
        variant="subtle"
        size="lg"
        class="relative rounded-full font-semibold"
      >
        <NuxtLink
          :to="page.hero.headline.to"
          target="_blank"
          class="focus:outline-none"
          tabindex="-1"
        >
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>

        {{ page.hero.headline.label }}

        <UIcon
          v-if="page.hero.headline.icon"
          :name="page.hero.headline.icon"
          class="ml-1 w-4 h-4 pointer-events-none"
        />
      </UBadge>
    </template>

    <ImagePlaceholder />
  </ULandingHero>
</template>

<script setup>
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>
