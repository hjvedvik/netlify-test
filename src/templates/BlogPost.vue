<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <p>
      <span>{{ $page.blogPost.timeToRead }} min read</span> - 
      <span>{{ $page.blogPost.date }}</span>
    </p>
    <img :src="$page.blogPost.fields.thumbnail" :alt="$page.blogPost.title">
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    content
    timeToRead
    fields {
      thumbnail
    }
  }
}
</page-query>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
