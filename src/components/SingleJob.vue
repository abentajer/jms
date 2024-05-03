<template>
    <div class="job">
        <p>Company ID : <strong>{{ job.company.companyId }}</strong> - Company name : <strong>{{ job.company.companyName }}</strong></p>
      <div class="actions">
        <h3 @click="showDetails = !showDetails">{{ job.jobTitle }}</h3>
        <div class="icons">
          <span @click="deleteJob" class="material-icons">delete</span>
          <router-link :to="{ name: 'EditJob', params: { id: job.id }}">
            <span class="material-icons">edit</span>
          </router-link>
        </div>
      </div>
      <div v-if="showDetails" class="details">
        <p><strong>Job ID : </strong> {{ job.id }}</p>
        <p><strong>Job Descrition : </strong> {{ job.description }}</p>
        <p><strong>Salary : </strong>{{ job.salary }}</p>
        <p><strong>Date :</strong>{{ job.dueDate }}</p>
        <p><strong>Address : </strong>{{ job.formattedAddress }}</p>
        <div>
            <p><strong>Skills : </strong><span class="skill" v-for="skill in job.skills" :key="skill">{{ skill }}</span></p>
            
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['job'],
    data() {
      return {
        showDetails: false,
        uri: 'http://localhost:3000/jobs/' + this.job.id
      }
    },
    methods: {
      deleteJob() {
        const validate = confirm('Do you want to delete the job : '+this.job.jobTitle)
        if(validate){
            alert("Delete job id : "+this.job.id)
            fetch(this.uri, { method: 'DELETE' })
                .then(() => this.$emit('delete', this.job.id))
                .catch(err => console.log(err))
        }
        
      }
    }
    
  };
  </script>
  
  <style scoped>
    .job {
      margin: 20px auto;
      background: white;
      padding: 10px 20px;
      border-radius: 4px;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
      border-left: 4px solid #e90074;
    }
    h3 {
      cursor: pointer;
    }
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .material-icons {
      font-size: 24px;
      margin-left: 10px;
      color: #bbb;
      cursor: pointer;
    }
    .material-icons:hover {
      color: #777;
    }
    .skill{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
  </style>