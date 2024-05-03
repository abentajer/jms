<template>
    <form @submit.prevent="handleSubmit">
        <label for="companyId">Company ID:</label>
        <input type="number" v-model="jobData.company.companyId" id="companyId" required>

        <label for="companyName">Company Name:</label>
        <input type="text" v-model="jobData.company.companyName" id="companyName" required>
    
        <label for="jobTitle">Job Title:</label>
        <input type="text" v-model="jobData.jobTitle" id="jobTitle" required>

        <label for="skills">Skills:</label>
        <input type="text" v-model="skill" @keydown.enter.prevent="addSkill" id="skills">
        <div v-for="skill in jobData.skills" :key="skill" @click="deleteSkill(skill)" class="pill">
        {{ skill }}
        </div>
        <br />

        <label for="formattedAddress">Address:</label>
        <input type="text" v-model="jobData.formattedAddress" id="formattedAddress" required>

        <label for="salary">Salary:</label>
        <input type="number" v-model.number="jobData.salary" id="salary" required>

        <label for="dueDate">Due Date:</label>
        <input type="date" v-model="jobData.dueDate" id="dueDate" required>

        <label for="description">Description:</label>
        <textarea v-model="jobData.description" id="description" rows="4"></textarea>

      <button>Update Job</button>
    </form>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        uri: 'http://localhost:3000/jobs/',
        jobData: {
            company: {
                companyId: 0,
                companyName: ''
            },
            jobTitle: '',
            skills: [],
            formattedAddress: '',
            salary: 0,
            dueDate: '',
            description: ''
      },
      }
    },
    methods: {
    addSkill($event) {
            if(this.skill.trim()) {
                if (!this.jobData.skills.includes(this.skill.toLowerCase().trim())) {
                    this.jobData.skills.push(this.skill.toLowerCase().trim())
                }else {
                    alert("Skill already added")
                }
                this.skill = ''
            }
    },
    deleteSkill(skill) {
      this.jobData.skills = this.jobData.skills.filter(item => {
        return skill !== item
      })
    },
    handleSubmit() {
        const jobData = {
            company: {
                companyId: this.jobData.company.companyId,
                companyName: this.jobData.company.companyName
            },
            jobTitle: this.jobData.jobTitle,
            skills: this.jobData.skills,
            formattedAddress: this.jobData.formattedAddress,
            salary: this.jobData.salary,
            dueDate: this.jobData.dueDate,
            description: this.jobData.description
      };
        fetch(this.uri, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.jobData)
        }).then(() => {
          this.$router.push('/')
        }).catch(err => console.log(err))
      }
    }
  }
  </script>
  
  <style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select, textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
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
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  .pill {
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