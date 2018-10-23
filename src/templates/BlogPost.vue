<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  blogPost (path: $path) {
    title
    content
  }
}
</page-query>
