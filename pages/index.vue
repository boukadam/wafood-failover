<template>
  <v-app id="login">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card-actions>
              <v-spacer></v-spacer>
              <nuxt-link v-for="item in locales" :key="item.code" :to="switchLocalePath(item.code)">
                <v-avatar size="24" class="ml-2">
                  <v-img :src="require(`../static/${item.code}-flag.jpg`)" />
                </v-avatar>
              </nuxt-link>
            </v-card-actions>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <v-img :src="require('../static/wafood-logo-128x128.png')" width="80px"></v-img>
                  <v-img :src="require('../static/wafood-text-green.png')" width="70px" class="mt-2"></v-img>
                </div>
                <v-alert
                  class="mt-12"
                  outlined
                  type="success"
                  prominent
                  border="left"
                  icon="mdi-hand-heart-outline"
                >
                  <p v-html="$t('message')"></p>
                </v-alert>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    locales() {
      return this.$i18n.locales;
    }
  }
}
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  background: #2e7d32;
}
</style>
