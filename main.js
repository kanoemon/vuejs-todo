const app = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        id: 1,
        comment: 'hoge',
        state: 'doing'
      }
    ]
  },
  methods: {
    doAdd: function(event, value) {
      var comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }

      this.todos.push({
        id: 3,
        comment: comment.value,
        state: 0
      })

      comment.value = ''
    }
  }
})
