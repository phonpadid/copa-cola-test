<template>
  <div>
    <div class="search-form">
      <select v-model="searchQuery" class="select-export mx-4" @change="searchData">
        <option value="all_participants">ລາຍງານຜູ້ເຂົ້າຮ່ວມທັງໝົດ</option>
        <option value="winning_participants">ລາຍງານຜູ້ເຂົົ້າຮ່ວມທີທວຍຖືກ</option>
        <option value="voted_and_won">ລາຍງານຜູ້ໂຫວດຖືກ</option>
        <option value="voted_and_lost">ລາຍງານຜູ້ໂຫວດແພ້</option>
      </select>
      <!-- <button @click="searchData">ຄົ້ນຫາ</button> -->
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <!-- Error Message -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <br /><br />
    <div v-if="searchQuery === 'all_participants'">
      <button @click="exportToExcel" class="mx-4">Export to Excel</button>
      <table class="data-table">
        <thead>
          <tr>
            <th>ໄອດີຜູ້ໃຊ້</th>
            <th>ຊືຜູ້ເຂົົ້າຮ່ວມເຊຍທີມ</th>
            <th>ແມັດການແຂງຂັນ</th>
            <th>ທີມທີເຊຍ</th>
            <th>ລະຫັດທີມທີຄອມເມັ້ນເຊຍ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="participant in searchResults.participants" :key="participant.id">
            <td>{{ participant.id }}</td>
            <td>{{ participant.participant.facebook_name }}</td>
            <td>{{ participant.match.team_a }} vs {{ participant.match.team_b }}</td>
            <td>{{ participant.team.name }}</td>
            <td>{{ participant.team.code }}</td>
            <!-- <td>{{ participant.facebook_post_participant.facebook_comment_value }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <!--Winning  -->
    <div v-if="searchQuery === 'winning_participants'">
      <!-- exportWinning_participants -->
      <button @click="exportWinning_participants" class="mx-4">Export to Excel</button>
      <table class="data-table">
        <!-- Table header for voted_and_lost -->
        <thead>
          <tr>
            <th>ຜູ້ທີທວຍຖືກຫຼາຍທີສຸດ</th>
            <th>ລວມຜູ້ທີທວຍຖືກຫຼາຍທີສຸດ</th>
            <th>Top_Five_Winners</th>
            <th>ຊືຜູ້ທີທວຍຖືກທັງໝົດ</th>
            <th>ລວມຜູ້ທີທວຍຖືກທັງໝົດ</th>
            <!-- <th>total</th> -->
          </tr>
        </thead>
        <!-- Table body for voted_and_lost -->
        <tbody>
          <tr
            v-for="winner in searchResults.winning_participants"
            :key="winner.participant__facebook_name"
          >
            <td>{{ winner.participant__facebook_name }}</td>
            <td>{{ winner.total_wins }}</td>
            <td>{{ winner.participant__facebook_name }}</td>
            <td>{{ winner.participant__facebook_name }}</td>
            <td>{{ winner.total_wins }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="searchQuery === 'voted_and_won'">
      <button @click="exportVotedWin" class="mx-4">Export to Excel</button>
      <table class="data-table">
        <!-- Table header for voted_and_lost -->
        <thead>
          <tr>
            <th>ລະຫັດຜູ້ໂຫວດ</th>
            <th>ລາຍຊືຜຸ້ທີໂຫວດຖືກ</th>
            <th>ແມັດແຂ່ງຂັນ</th>
            <th>ທີມທີເຊຍ</th>
            <!-- <th>total</th> -->
          </tr>
        </thead>
        <!-- Table body for voted_and_lost -->
        <tbody>
          <tr v-for="votedWin in searchResults.voted_and_won" :key="votedWin.id">
            <td>{{ votedWin.id }}</td>
            <td>{{ votedWin.participant.facebook_name }}</td>
            <td>
              {{ `${votedWin.match.team_a} VS ${votedWin.match.team_b}` }}
            </td>
            <td>{{ `${votedWin.team.name}(${votedWin.team.code})` }}</td>
            <!-- <td>{{ participant.total }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="searchQuery === 'voted_and_lost'">
      <button @click="exportTeamLost" class="mx-4">Export to Excel</button>
      <table class="data-table">
        <!-- Table header for voted_and_lost -->
        <thead>
          <tr>
            <th>ລະຫັດຜຸ້ໂຫວດ</th>
            <th>ຊືຜູ້ໂຫວດ</th>
            <th>ແມັດການແຂງຂັນ</th>
            <th>ທີມທີໂຫວດ</th>
          </tr>
        </thead>
        <!-- Table body for voted_and_lost -->
        <tbody>
          <tr v-for="votedLose in searchResults.voted_and_lost" :key="votedLose.id">
            <td>{{ votedLose.id }}</td>
            <td>{{ votedLose.participant.facebook_name }}</td>
            <td>{{ votedLose.match.team_a }} VS {{ votedLose.match.team_b }}</td>
            <td>{{ `${votedLose.team.name}(${votedLose.team.code})` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as XLSX from "xlsx";

const loading = ref(false);
const error = ref(null);
const searchQuery = ref("all_participants");

const searchResults = ref({
  participants: [],
  winning_participants: [],
  voted_and_lost: [],
  voted_and_won: [],
});

const searchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      `https://backend-production-c017.up.railway.app/api/reports/?condition=${searchQuery.value}`
    );
    if (response.ok) {
      const data = await response.json();
      searchResults.value.participants = data.participants;
      searchResults.value.winning_participants = data.top_winner;
      searchResults.value.winning_participants = data.top_five_winners;
      searchResults.value.winning_participants = data.top_winners;
      searchResults.value.voted_and_won = data.voted_and_won;
      searchResults.value.voted_and_lost = data.voted_and_lost;
    } else {
      console.error("Error fetching data");
    }
  } catch (error) {
    error.value = "Error fetching data";
  } finally {
    loading.value = false;
  }
};

// Export Excel All_participants
const exportToExcel = () => {
  const data = searchResults.value.participants;
  const flatData = data.map((participant) => ({
    ລຳດັບ: participant.id,
    ຊືຜູ້ໃຊ້ເຟສບຸກ: participant.participant.facebook_name,
    ແມັດການແຂງຂັນ: `${participant.match.team_a} vs ${participant.match.team_b}`,
    ທີມທີໂຫວດ: participant.team.name,
    ລະຫັດທີມ: participant.facebook_post_participant.facebook_comment_value,
  }));

  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ReportData");
  XLSX.writeFile(wb, "ລາຍງານຜູ້ເຂົ້າຮ່ວມທັງໝົດ.xlsx");
};

// Export Excel winning_participants
const exportWinning_participants = () => {
  const data = searchResults.value.winning_participants;
  const flatData = data.map((winner) => ({
    ຜູ້ທີທວຍຖືກຫຼາຍທີສຸດ: winner.participant__facebook_name,
    ລວມຜູ້ທີທວຍຖືກຫຼາຍທີສຸດ: winner.total_wins,
    Top_Five_Winners: winner.participant__facebook_name,
    ຊືຜູ້ທີທວຍຖືກທັງໝົດ: winner.participant__facebook_name,
    ລວມຜູ້ທີທວຍຖືກທັງໝົດ: winner.total_wins,
  }));
  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ReportData");
  XLSX.writeFile(wb, "ລາຍງານຜູ້ເຂົົ້າຮ່ວມທີທວຍຖືກ.xlsx");
};

// Export Excel exportVotedWin
const exportVotedWin = () => {
  const data = searchResults.value.voted_and_won;
  const flatData = data.map((votedWin) => ({
    ລະຫັດຜູ້ໂຫວດ: votedWin.id,
    ລາຍຊືຜູ້ທີໂຫວດຖືກ: votedWin.participant.facebook_name,
    ແມັດການແຂງຂັນ: `${votedWin.match.team_a} vs ${votedWin.match.team_b}`,
    ທີມທີເຊຍ: `${votedWin.team.name}(${votedWin.team.code})`,
  }));

  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ReportData");
  XLSX.writeFile(wb, "ລາຍງານຜູ້ໂຫວດຖືກ.xlsx");
};

// Export to Team Lose voted_and_lost
const exportTeamLost = () => {
  const data = searchResults.value.voted_and_lost;
  const flatData = data.map((participant) => ({
    ລະຫັດຜູ້ໂຫວດ: participant.id,
    ຊືຜູ້ໃຊ້ເຟສບຸກ: participant.participant.facebook_name,
    ແມັດການແຂງຂັນ: `${participant.match.team_a} vs ${participant.match.team_b}`,
    ທີມທີເຊຍ: `${participant.team.name}(${participant.team.code})`,
  }));

  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ReportData");
  XLSX.writeFile(wb, "ລາຍງານຜູ້ໂຫວດແພ້.xlsx");
};

onMounted(searchData);
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.data-table th,
.data-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.data-table th {
  background-color: #f2f2f2;
}

.search-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-form input {
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px; /* Add some spacing between the input and button */
  font-size: 1rem;
}

.search-form button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.search-form button:hover {
  background-color: #0056b3;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.data-table {
  font-family: "Noto Sans Lao", sans-serif;
  /* Your other styles */
}
.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #333;
  animation: pulse 1s infinite; /* Apply a pulsing animation */
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.error-message {
  font-size: 1.2rem;
  background-color: #ffcccc;
  border: 1px solid #ff0000;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #ff0000;
}

/* Style the select element */
.select-export {
  width: 15%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
}

/* Style the options within the select element */
.select-export option {
  font-size: 16px;
  background-color: #fff;
  color: #333;
}

/* Style the select element when it is focused (clicked on) */
.select-export:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
