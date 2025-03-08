<script setup>
import { ref } from 'vue';

// To-Do App
const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false });
    newTask.value = '';
  }
};

const toggleTask = (task) => {
  task.done = !task.done;
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};

// Counter
const counter = ref(0);
const increment = () => counter.value++;
const decrement = () => counter.value--;
</script>

<template>
  <div class="container">
		<img src="./pgn.jpg" />
    <h2>Simple Counter</h2>
    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ counter }}</span>
      <button @click="increment">+</button>
    </div>
    
    <h2>To-Do App</h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task">
    <button @click="addTask">Add</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ done: task.done }">
        <span @click="toggleTask(task)">{{ task.text }}</span>
        <button @click="removeTask(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<style>
/* General Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background: linear-gradient(to bottom right, #4A90E2, #50E3C2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

h2 {
	margin-top: 2rem;
}

/* Container */
.container {
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Logo */
.logo {
  width: 100px;
  margin: 0 auto 20px;
  display: block;
}

/* Card UI */
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

/* To-Do List */
.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #4A90E2;
  color: white;
  font-size: 16px;
}

button:hover {
  background: #357ABD;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  transition: 0.3s;
}

li.done span {
  text-decoration: line-through;
  color: gray;
}

/* Counter */
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 24px;
}

.counter button {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
</style>
