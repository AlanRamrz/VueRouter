<template>
  <div class="about">
    <h1>Products</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td><button @click="goToDetails(item.id)">-></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: [
        {
          'id': 1,
          'name' : 'reloj'
        },
        {
          'id': 2,
          'name' : 'camisa'
        },
        {
          'id': 3,
          'name' : 'zapatos'
        }
      ]
    }
  },
  methods: {
    goToDetails(id){
      this.$router.push({
        name: 'detail',
        params: {
          pId: id
        }
      })
    }
  }
}
</script>
