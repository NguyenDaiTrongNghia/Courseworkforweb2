<template>
    <div>
        <h1>New World</h1>
        <word-form @createOrUpdate="createOrUpdate"></word-form>
    </div>
  </template>
<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'new-world',
    components: {
        'word-form': WordForm
    },
    methods: {
        createOrUpdate: async function(word) {
            try {
                if (this.$route.name === 'new-word') {
                    const res = await api.createWord(word);
                    this.flash('Word created', 'success');
                    this.$router.push(`/words/${res._id}`);
                } else {
                    await api.updateWord(word);
                    this.flash('Word updated successfully', 'success');
                    this.$router.push(`/words/${word._id}`);
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data.message || 'The word already exists';
                    this.flash(errorMessage, 'error');
                } else {
                    this.flash('An unexpected error occurred', 'error');
                }
            }
        }
    }
};
</script>
