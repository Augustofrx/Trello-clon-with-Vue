<template>
  <section>
    <header>
      <h3>
        {{ name }}
      </h3>
    </header>
    <task-list :listId="listId" :tasks="tasksList"> </task-list>
  </section>
</template>

<script>

import TaskList from './TaskList'

export default {
  name: "column",
  components: { TaskList },
  props: {
    listId: String,
    name: String
  },
  data: function() {
    return {
        tasksList: [
            { id: '1', title: 'Learn Vue', completed: false },
            { id: '2', title: 'Learn Vuex', completed: false }
        ]
    }
  }
};
</script>

<style scoped>
section {
  box-sizing: border-box;
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  margin: 1rem;
  padding: 1rem;
  width: 100%;
}

@media screen and (min-width: 600px) {
  section {
    width: calc(50% - 2rem - 2px);
  }
}

@media screen and (min-width: 1024px) {
  section {
    width: calc(33% - 2rem - 2px);
  }
}

@media screen and (min-width: 1200px) {
  section {
    width: calc(25% - 2rem - 2px);
  }
}

header {
  color: #37474f;
  margin: 0;
  padding-bottom: 1rem;
}
h3 {
  margin: 0;
}
</style>
