<template>
  <div>
    <div class="search-form">
      <select v-model="searchQuery" class="select-export mx-4">
        <option value="all_participants">ລາຍງານຜູ້ເຂົ້າຮ່ວມທັງໝົດ</option>
        <option value="winning_participants">ລາຍງານຜູ້ເຂົົ້າຮ່ວມທີທວຍຖືກ</option>
        <option value="voted_participants">ລາຍງານຜູ້ເຂົ້າຮ່ວມໂຫວດ</option>
      </select>
      <button @click="searchData">ຄົ້ນຫາ</button>
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <!-- Error Message -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <br /><br />

    <button @click="exportToExcel" class="mx-4">Export to Excel</button>

    <table class="data-table">
      <thead>
        <tr>
          <th>ໄອດີຜູ້ໃຊ້</th>
          <th>ຊືຜູ້ເຂົົ້າຮ່ວມເຊຍທີມ</th>
          <th>ແມັດການແຂງຂັນ</th>
          <th>ທີມທີເຊຍ</th>
          <th>ລະຫັດທີມ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="participant in searchResults.participants" :key="participant.id">
          <td>{{ participant.id }}</td>
          <td>{{ participant.participant.facebook_name }}</td>
          <td>{{ participant.match.team_a }} vs {{ participant.match.team_b }}</td>
          <td>{{ participant.team.name }}</td>
          <td>{{ participant.facebook_post_participant.facebook_comment_value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
// import { toPdf } from "html2pdf.js";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

const loading = ref(false);
const error = ref(null);
const searchQuery = ref("all_participants");
const searchResults = ref({
  participants: [],
  total: 0,
});

const searchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      `https://backend-production-c017.up.railway.app/api/reports/?condition=${searchQuery.value}`
    );
    const data = await response.json();
    searchResults.value.participants = data.participants;
    searchResults.value.total = data.total;
  } catch (error) {
    error.value = "Error fetching data";
  } finally {
    loading.value = false;
  }
};

// Export Excel
const exportToExcel = () => {
  const data = searchResults.value.participants;
  const flatData = data.map((participant) => ({
    ລຳດັບ: participant.id,
    ຊືຜູ້ໃຊ້ເຟສບຸກ: participant.participant.facebook_name,
    ແມັດການແຂງຂັນ: `${participant.match.team_a} vs ${participant.match.team_b}`,
    ທີມທີເຊຍ: participant.team.name,
    ລະຫັດທີມ: participant.facebook_post_participant.facebook_comment_value,
  }));

  const ws = XLSX.utils.json_to_sheet(flatData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ReportData");
  XLSX.writeFile(wb, "ລາຍງານ.xlsx");
};

// Export to pdf
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
