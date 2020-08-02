<template>
  <form>
    <div>
      <label>Username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password" />
    </div>
    <div>
      <input type="submit" @click.prevent="submit" />
    </div>
    {{result}}
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      result: ''
    }
  },
  methods: {
    async submit() {
      const { username, password, $axios } = this
      const {
        data: { access_token }
      } = await $axios.post('auth/login', { username, password })
      this.result = access_token
    }
  }
}
</script>