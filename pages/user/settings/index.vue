<template>
  <div class="user-account-setting">
    <div class="container">
      <div class="row">
        <!-- LEFT -->
        <div class="col-sm-3" id="myScrollspy">
          <div class="list-group">
            <!-- sidebar menu -->
            <nuxt-link
              v-for="link in links"
              :key="link.route"
              :to="link.route"
              class="list-group-item list-group-item-action"
            >
              {{ link.title }}
            </nuxt-link>
          </div>
        </div>
        <!-- RIGHT -->
        <div class="col-sm-9">
          <!-- render of dashboard - profile - team -->
          <router-view></router-view>
        </div>
        <!-- END RIGHT -->
      </div>
    </div>
    <!-- END CONTAINER -->
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      links: [
        {
          title: 'Dashboard',
          route: 'dashboard'
        },
        {
          title: 'Update Profile',
          route: 'profile'
        }
      ]
    };
  }
};
</script>
