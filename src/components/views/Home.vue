<template>
  <div>
    <h3>My panels</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Add a new panel"
        v-model="boardName"
        v-on:keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      >
      </board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard";

export default {
  name: "home-view",
  components: { BoardCard },
  data: function() {
    return {
      boardName: "",
      boards: [
        { id: '1', name: "Tasks" },
        { id: '2', name: "Shopping List" }
      ]
    };
  },
  methods: {
    add: function() {
      this.boards.push({ name: this.boardName });
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}

.boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
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
}

input:focus,
input:active {
  background-color: white;
  color: #546e7a;
}

input::placeholder {
  color: rgb(255, 255, 255);
}
</style>
