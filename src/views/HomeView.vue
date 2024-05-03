<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current = $event" />
    <div v-if="jobs.length">
      <div v-for="job in filteredJobs" :key="job.id">
      <SingleJobVue :job="job" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import SingleJobVue from '@/components/SingleJob.vue'

export default {
  name: 'Home',
  components: { SingleJobVue, FilterNav },
  data() {
    return {
      jobs: [],
      current: 'all',
    };
  },
  mounted() {
    console.log(new Date().toLocaleDateString('fr'))
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err))
  },
  methods: {
    handleDelete(id) {
      this.jobs = this.jobs.filter(job => {
        return job.id !== id
      })
    }
  },
  computed: {
    filteredJobs() {
      if (this.current === 'completed') {
        return this.jobs.filter(job => job.dueDate < new Date().toLocaleDateString('fr'))
      }
      if (this.current === 'ongoing') {
        return this.jobs.filter(job => job.dueDate > new Date().toLocaleDateString('fr'))
      }
      return this.jobs
    }
  },
}
</script>
