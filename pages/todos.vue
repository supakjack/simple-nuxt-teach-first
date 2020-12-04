<template>
  <div>
    <input v-model="input" type="text" placeholder="add value" />
    <v-btn
      @click="
        $store.commit('todos/add', { text: input })
        input = ''
      "
      >click to add</v-btn
    >
    <div v-for="item in $store.state.todos.list" :key="item.id">
      {{ item.text }}
      {{ item.done }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
