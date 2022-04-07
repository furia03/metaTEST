<template>
  <div class="about">
    <h1>This is an about page {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "about view",
      titleTemplate: "about view | %s",
      meta: [
        {
          name: "title",
          content: "about view-test",
        },
        {
          name: "description",
          content: "home",
        },
        {
          name: "keywords",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "about view-test",
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: "about view about view",
          vmid: "og:description",
        },
        {
          property: "og:image",
          content: process.env.VUE_APP_URL + "images/share1.png",
          vmid: "og:image",
        },
        {
          property: "og:url",
          content: process.env.VUE_APP_URL,
          vmid: "og:url",
        },
      ],
    };
  },
};
</script>
