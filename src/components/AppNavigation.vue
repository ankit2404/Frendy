<template>
<div>
    <v-card class="mx-auto overflow-hidden" height="" width="">
        <!-- <v-app-bar :color="color.purple" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-content class="subtitle-1 font-weight-bold">FRENDY</v-content>
            <v-spacer></v-spacer>

            <v-btn small color="#6a1b9a" v-on:click="partnerRoute(index)">
                SELECT PARTNER
            </v-btn>
        </v-app-bar> -->
        <v-app-bar app :color="color.purple" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <v-icon large @click="$router.push('/')">
                    mdi-chevron-left
                </v-icon>
                Back
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :color="color.purple" fixed temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-spacer></v-spacer>
                        <img src="https://shop.frendy.in/img/logo.c17bae98.png" height="50" alt="" />
                        <v-spacer></v-spacer>
                    </v-list-item>
                    <v-list-item>
                        <v-spacer></v-spacer>
                        <v-avatar elevation="5" color="#963ACE" class="text-center align-center" size="75" >
                            <v-img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" contain height="60"></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>
                    </v-list-item>
                    <v-list-item>
                        <v-spacer></v-spacer>
                        <v-content class="text-center white--text font-weight-bold">{{
                user.name
              }}</v-content>
                        <v-spacer></v-spacer>
                    </v-list-item>
                    <v-divider color="#963ACE"></v-divider>
                    <v-list-item v-for="(item, index) in appNavigation" :key="item.name" v-on:click="navigationRoute(index)">
                        <v-list-item-title class="pt-n4 pb-n4 white--text font-weight-light">
                            <v-list-item-avatar>
                                <v-icon size="25" :color="color.yellow">
                                    {{ item.icon }}
                                </v-icon>
                            </v-list-item-avatar>
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider :color="color.lightPurple"></v-divider>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</div>
</template>

<script>
import Account from "../components/Account.vue";
import Category from "../components/Category.vue";
import Creative from "../views/Creative.vue";
export default {
  name: 'AppNaviagtion',
    components: {
        Account,
        Category,
        Creative,
    },
    data: () => ({
        drawer: false,
        group: null,
        user: {
            name: "User",
            image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            isLoggedIn: "true",
        },
        loginBtnContent: "",
        color: {
            purple: "#6a1b9a",
            yellow: "#ffeb3b",
            lightPurple: "#963ACE",
        },
        appNavigation: [{
                name: "Categories",
                icon: "mdi-tshirt-crew-outline",
            },
            {
                name: "Account",
                icon: "mdi-cart",
            },
            {
                name: "Creative",
                icon: "mdi-heart-outline",
            },

        ],
        routeIndex: [],
    }),

    watch: {
        group() {
            this.drawer = false;
        },
    },
    methods: {
        navigationRoute(passedIndex) {

            this.routeIndex = this.appNavigation[passedIndex];

            if (passedIndex == 1) {
                this.$router.push("/category");
            } else if (passedIndex == 0) {
                this.$router.push("/account");
            } else if (passedIndex == 2) {
                this.$router.push("/");
            }
        },
        // goToProfilePage() {
        //     this.$router.push("/profilePage");
        // },
        // partnerRoute() {
        //     this.$router.push("/partnerpincode");
        // },
    },
};
</script>
