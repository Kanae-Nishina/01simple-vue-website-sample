<template>
  <header>
      <v-app-bar color="black">
        <template v-slot:prepend><v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon></template>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
        <v-tabs>
          <v-tab 
            v-for="(menuItem, index) in menuItems" 
            :key="index"
            :to="menuItem.url">
              {{ menuItem.name }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav danse>
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :to="menuItem.url">
                <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>
  
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          name: 'HOME',
          url: '/'
        },
        {
          name: 'ABOUT',
          url: '/about'
        },
        {
          name: 'WORK',
          url: 'work'
        },
        {
          name: 'SERVICE',
          url: '/service'
        },
        {
          name: 'BLOG',
          url: '/blog'
        },
        {
          name: 'ACCESS',
          url: '/access'
        }
      ]
    }
  }
}
</script>
  
<style lang="css">
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-toolbar__prepend {
  display: none !important;
}

.v-btn--icon.v-btn--density-default {
  height: 100%;
}

@media only screen and (max-width:1024px) {
  .v-toolbar__prepend {
    display: block !important;
  }
}</style>