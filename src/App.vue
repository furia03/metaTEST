<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "app",
      titleTemplate: "test | %s",
      meta: [
        {
          name: "title",
          content: "hana-test",
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
          content: "hana-test",
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: "",
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
