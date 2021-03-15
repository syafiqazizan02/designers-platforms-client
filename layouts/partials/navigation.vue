<template>
  <header class="fixed-topx">
            <nav class="navbar navbar-expand-lg navbar-dark align-items-center">
                <nuxt-link
                    :to="{name: 'index'}"
                    class="navbar-brand fw-500"
                    href="#"
                    title="Project Name"
                >
                  DesignersPlatforms
                </nuxt-link>
                <button
                    class="navbar-toggler mr-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav font-14 fw-300">
                        <li class="nav-item active">
                             <nuxt-link 
                                :to="{ name: 'designs.search' }" 
                                class="nav-link"
                            >
                              Designs
                            </nuxt-link>
                        </li>
                    </ul>
                    <!-- <div class="header-search">
                        <form action="" method="">
                            <div class="form-group">
                                <input
                                    type="text"
                                    autocomplete="OFF"
                                    name="search"
                                    class="form-control text-white font-14 fw-300"
                                    placeholder="Search"
                                />
                                <div class="search-icon text-white">
                                    <i class="fas fa-search"></i>
                                </div>
                            </div>
                        </form>
                    </div> -->
                    <div
                        class="upload-shot white-path font-14 fw-500 text-uppercase mr-auto"
                    >
                        <a href="/upload" class="primary-bg-color text-white">
                            <i class="fas fa-cloud-upload-alt"></i> Upload
                        </a>
                    </div>
                </div>

                <!-- Before Login -->
                <template v-if="!$auth.loggedIn">
                  <ul class="before-login font-14 fw-300 text-uppercase">
                      <li>
                        <nuxt-link :to="{name: 'register'}">Sign Up</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="{name: 'login'}">Sign In</nuxt-link>
                      </li>
                  </ul>
                </template>
                <!-- End Before Login -->

                <!-- After Login -->
               <template v-else>
                  <ul class="author-page white-path">
                      <!-- Profile Dropdown -->
                      <li class="dropdown">
                          <a
                              href="#"
                              class="dropdown-toggle text-white"
                              id="userDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                            <img class="user-thumb" :src="$auth.user.photo_url" />
                            <div class="usr-info">
                                  <span class="user-name font-14 fw-500"
                                      >{{ $auth.user.name }}</span
                                  >
                                  <span class="user-deg font-10 fw-300"
                                      > {{ $auth.user.tagline }}</span
                                  >
                                  <span class="down-chevron">
                                      <i class="fa fa-angle-down"></i>
                                  </span>
                            </div>
                          </a>
                          <div
                              class="dropdown-menu user-dropdown font-14 fw-500"
                              aria-labelledby="userDropdown"
                          >
                              <div class="dropdown-title-group font-12 fw-500">
                                  <span class="dropdown-title text-uppercase"
                                      >Your Account</span
                                  >
                              </div>
                              <!-- <nuxt-link to="/settings/dashboard" class="dropdown-item mt-28">
                                <i class="fas fa-tachometer-alt"></i>
                                Dashboard
                              </nuxt-link> -->
                              <nuxt-link to="/settings/profile" class="dropdown-item mt-28">
                                <i class="fas fa-tachometer-alt"></i>
                                Dashboard
                              </nuxt-link>
                              <div class="dropdown-divider"></div>
                              <a
                                class="dropdown-item"
                                href="#" @click.prevent="logout"
                                title="Sign Out"
                              >
                                  <i class="fa fa-lock"></i>
                                  Sign Out
                              </a>
                          </div>
                      </li>
                      <!-- End Profile Dropdown -->
                  </ul>
                </template>
                <!-- End After Login -->
            </nav>
      </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>
