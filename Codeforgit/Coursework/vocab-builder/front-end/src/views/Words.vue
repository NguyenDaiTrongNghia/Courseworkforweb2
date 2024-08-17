<template>
  <div>
    <h1>Dictionary</h1>
    <div class="search_bar">
      <input type="text" v-model="search" placeholder="search"/> <br />
    </div>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>French</th>
          <th colspan="3">
          <button @click="changeSortOrder">Sort by Alphabet</button>
          </th>
        </tr>
      </thead>
      <tr v-for="(word, i) in paginatedWords" :key="i">
        <td>{{ word.english }}</td>
        <td>{{ word.german }}</td>
        <td>{{ word.french }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: word._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: word._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDelete(word._id)">
          <a :href="`/words/${word._id}`">Delete</a>
        </td>
      </tr> 
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    <button @click="exportToCSV">Export to CSV</button>
  </div>
</template>
<script>
import { api } from '../helpers/helpers';

export default {
  name: 'words',
  data() {
    return {
      words: [],
      search: '',
      sortOrder: 'asc',
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  watch: {
    search() {
      this.currentPage = 1;
    }
  },
  computed: {
    searchWords() {
      let searchWords = this.words.filter(word => {
        const searchWord = this.search.toLowerCase().trim(" ");
        return (
          word.english.toLowerCase().includes(searchWord) ||
          word.german.toLowerCase().includes(searchWord) ||
          word.french.toLowerCase().includes(searchWord)
        );
      });
      if (this.sortOrder === 'asc') {
        searchWords.sort((a, b) => a.english.localeCompare(b.english));
      } else {
        searchWords.sort((a, b) => b.english.localeCompare(a.english));
      }

      return searchWords;
    }, 
    paginatedWords() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.searchWords.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.searchWords.length / this.itemsPerPage);
    }
  },
  methods: {
    async onDelete(id) {
      const sure = window.confirm('Are you sure you want to delete? ');
      if (!sure) return;
      await api.deleteWord(id);
      this.flash('Word deleted successfully!', 'success');
      const newWords = this.words.filter(word => word._id !== id);
      this.words = newWords;
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    exportToCSV() {
      const headers = ['English', 'German', 'French'];
      const rows = this.words.map(word => [word.english, word.german, word.french]);
      let csvContent = "\uFEFF" + headers.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "words.csv");
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    },
  },
  
  async mounted() {
    this.words = await api.getWords();
  }
};
</script>
<style>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 10px;
}
</style>