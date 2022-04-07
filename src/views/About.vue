<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  metaInfo() {
    return {
      title: "About",
      titleTemplate: "test | %s",
      meta: [
        {
          name: "title",
          content: "About-test",
        },
        {
          name: "description",
          content: "About",
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
          content: "About-test",
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: "About About About",
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
