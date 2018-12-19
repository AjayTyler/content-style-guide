app = new Vue({
  el: '#app',
  data: {
    currentTopic: 1,
    query: '',
    topics: [
      {
        id: 1,
        title: 'This Document',
        slug: 'home',
        path: './index.html',
        content: home,
        type: 'general'
      },
      {
        id: 2,
        title: 'TL;DR',
        slug: 'tldr',
        path: './tldr.html',
        content: tldr,
        type: 'general'
      },
      {
        id: 3,
        title: 'Writing Principles',
        slug: 'principles',
        path: './writing-principles.html',
        content: writingPrinciples,
        type: 'general'
      },
      {
        id: 4,
        title: 'Voice and Tone',
        slug: 'voice',
        path: './voice-and-tone.html',
        content: voiceAndTone,
        type: 'general'
      },
      {
        id: 5,
        title: 'Grammar and Mechanics',
        slug: 'grammar',
        path: './grammar-and-mechanics.html',
        content: grammarAndMechanics,
        type: 'general'
      },
      {
        id: 6,
        title: 'Word List',
        slug: 'words',
        path: './word-list.html',
        content: wordList,
        type: 'general'
      },
      {
        id: 7,
        title: 'Writing about People',
        slug: 'people',
        path: './writing-about-people.html',
        content: writingAboutPeople,
        type: 'technical'
      },
      {
        id: 8,
        title: 'Writing about Products',
        slug: 'products',
        path: './writing-about-products.html',
        content: writingAboutProducts,
        type: 'technical'
      },
      {
        id: 9,
        title: 'Writing for Social Media',
        slug: 'social',
        path: './writing-for-social-media',
        content: writingForSocialMedia,
        type: 'technical'
      },
      {
        id: 10,
        title: 'Writing Blog Articles',
        slug: 'blog',
        path: './writing-blog-articles',
        content: writingBlogArticles,
        type: 'technical'
      },
      // {
      //   id: 11,
      //   title: 'Writing Technical Content',
      //   slug: 'technical',
      //   path: './writing-technical-content',
      //   type: 'technical'
      // }
    ]
  },
  computed: {
    active: function () {
      return this.topics.find((e) => e.id == this.currentTopic)
    },
    searchResults() {
      if (this.query == '') {
        return
      }
      let results = []
      q = new RegExp(this.query, 'igm')
      this.topics.forEach(topic => {
        let matches = topic.content.match(q)
        if (!matches) {matches = []}
        results.push({title: topic.title, score: matches.length, id: topic.id})
      })
      results.sort((a, b) => (a.score - b.score) * - 1)
      return results.filter(article => article.score > 0)
    }
  },
  methods: {
    switchTopic(topicId) {
      this.currentTopic = topicId
    },
    showHide(elementId) {
      let e = document.getElementById(elementId)
      e.classList.toggle('is-active')
    }
  }
});
