<template>
  <section>
    <h3><span>My panels</span> ▶ {{ name }}</h3>
    <input
      type="text"
      placeholder="Add a new list"
      v-model="listName"
      v-on:keyup.enter="add()"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
      >
      </column>
    </div>
  </section>
</template>

<script>
import Column from "@/components/Column";

export default {
  name: "board-view",
  components: { Column },
  props: {
    name: String,
    id: String
  },
  data: function() {
    return {
      listName: "",
      boardList: [
        { id: '1', name: "Todo" },
        { id: '2', name: "In process" },
        { id: '3', name: "Done" }
      ]
    };
  },
  methods: {
    add: function() {
      this.boardList.push({name: this.listName})
    }
  }
};
</script>

<style scoped>
section {
  text-align: left;
}

h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}

span {
  color: #546e7a;
}
input {
  box-sizing: border-box;
  background-color: #7e715f;
  border: 2px solid #7e715f;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
  margin-left: 1rem;
}

input:active,
input:focus {
  background-color: #fafafa;
}
input::placeholder {
  color: #fafafa;
}
</style>
