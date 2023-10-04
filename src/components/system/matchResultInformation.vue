<template>
    <div>
      <!-- Dropdown for Match ID -->
      <label for="matchId">Match ID:</label>
      <select v-model="selectedMatchId" id="matchId">
        <option v-for="match in matches" :key="match.id" :value="match.id">{{ match.id }}</option>
      </select>
  
      <!-- Text Inputs for Team A and Team B Scores -->
      <div>
        <label for="teamAScore">Team A Score:</label>
        <input type="number" v-model="teamAScore" id="teamAScore" />
      </div>
      <div>
        <label for="teamBScore">Team B Score:</label>
        <input type="number" v-model="teamBScore" id="teamBScore" />
      </div>
  
      <!-- Checkbox for Is Publish -->
      <div>
        <label for="isPublish">Is Publish:</label>
        <input type="checkbox" v-model="isPublish" id="isPublish" />
      </div>
  
      <!-- Dropdowns for Created By ID and Published By ID -->
      <div>
        <label for="createdById">Created By ID:</label>
        <select v-model="selectedCreatedById" id="createdById">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.id }}</option>
        </select>
      </div>
      <div>
        <label for="publishedById">Published By ID:</label>
        <select v-model="selectedPublishedById" id="publishedById">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.id }}</option>
        </select>
      </div>
  
      <!-- Button to Save Match Result -->
      <button @click="saveMatchResult">Save Match Result</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data
  const selectedMatchId = ref('');
  const teamAScore = ref('');
  const teamBScore = ref('');
  const isPublish = ref(false);
  const selectedCreatedById = ref('');
  const selectedPublishedById = ref('');
  
  // Sample data (replace with your actual data)
  const matches = [
    { id: 1 },
    { id: 2 },
    // Add more match data here
  ];
  
  const users = [
    { id: 101 },
    { id: 102 },
    // Add more user data here
  ];
  
  // Function to save the match result
  const saveMatchResult = () => {
    const matchResult = {
      match_id: selectedMatchId.value,
      team_a_score: teamAScore.value,
      team_b_score: teamBScore.value,
      is_publish: isPublish.value,
      created_by_id: selectedCreatedById.value,
      published_by_id: selectedPublishedById.value,
    };
  
    // Replace this with your code to send the match result data to your backend or perform other actions.
    console.log('Match Result:', matchResult);
  };
  </script>
  <style scoped>
    /* Common styles for form elements */
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 8px;
    }
  
    input[type="number"],
    select,
    input[type="checkbox"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 16px;
    }
  
    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  
    /* Media queries for responsiveness */
    @media screen and (max-width: 768px) {
      /* Adjust the layout for screens with a maximum width of 768px */
      label {
        font-size: 16px;
      }
  
      input[type="number"],
      select,
      input[type="checkbox"] {
        font-size: 16px;
      }
  
      button {
        font-size: 18px;
      }
    }
  
    @media screen and (max-width: 480px) {
      /* Adjust the layout for screens with a maximum width of 480px */
      label {
        font-size: 14px;
      }
  
      input[type="number"],
      select,
      input[type="checkbox"] {
        font-size: 14px;
      }
  
      button {
        font-size: 16px;
      }
    }
  </style>