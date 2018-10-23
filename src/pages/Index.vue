<template>
  <Layout>
    <h1>Hello, world!</h1>
    <Pager :info="$page.allBlogPost.pageInfo"/>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <h2 v-html="node.title"/>
        <router-link :to="node.path">Read more</router-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allBlogPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },

  mounted () {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          })
        }
      })
    }
  }
}
</script>
