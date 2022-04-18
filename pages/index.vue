<template>
  <div class="container px-10 mx-auto">
    <div class="input">
      <input class="w-96 h-8 bg-gray-400" v-model="keyword" type="text" />
      <button class="w-32 h-8 border-2 border-black" @click="searchArticles()">
        Search
      </button>
    </div>
    <div class="wrapper" style="width: 80%; justify-content: center">
      <ul class="articles">
        <li
          v-for="article in listArticle"
          :key="article.id"
          style="list-style: none"
        >
          <div class="grid grid-cols-2 m-4">
            <div class="image">
              <img
                style="width: 450px; height: 400px"
                :src="article.urlToImage"
                alt=""
              />
            </div>
            <div>
              <div class="block ml-4">
                <a :href="article.url">
                  <h2 class="font-bold text-2xl">{{ article.title }}</h2>
                </a>
                <h3><b>Author:</b> {{ article.author }}</h3>
                <p><b>Description:</b> {{ article.description }}</p>
                <p><b>Source:</b> {{ article.source.name }}</p>
                <p><b>Published at: </b> {{ article.publishedAt }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchRepo } from "@/repositories/searchRepo.js";

export default {
  data() {
    return {
      keyword: "",
      listArticle: [],
    };
  },
  methods: {
    async searchArticles() {
      try {
        const resp = await searchRepo.getArticles(this.keyword);
        this.listArticle = resp.data.articles;
        console.log(this.listArticle);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
