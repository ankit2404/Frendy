<template>
<div class="container" style="padding: 0;">
    <v-app id="inspire">

        <v-app-bar app class="amber lighten-1">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <v-icon large>
                    mdi-chevron-left
                </v-icon>
                Back
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed temporary>
        </v-navigation-drawer>
        <v-row justify="center" style="margin: 0;  width: 100%;">
            <v-expansion-panels accordion>
                <v-expansion-panel style="position: relative;">
                    <div class="main_cont">
                        <v-expansion-panel-header expand-icon="" class="text-decoration-underline font-weight-black subtitle-1">
                            Creative Settings
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="my-0">
                            <div class="d-flex flex-wrap align-center my-0 py-0">
                                <v-switch :label="`Your Name`" v-model="switch1" class="on_off_button" @click="change1"></v-switch>
                                <v-switch :label="`Your Number`" v-model="switch2" class="on_off_button" @click="change2"></v-switch>
                                <v-switch :label="`Your Photo`" v-model="switch4" class="on_off_button" @click="change4"></v-switch>
                                <v-switch :label="`Your Address`" v-model="switch3" class="on_off_button" @click="!switch3"></v-switch>
                            </div>

                        </v-expansion-panel-content>
                    </div>
                    <v-divider style="width:95%; margin: auto; background-color: black; margin-bottom: 10px;"></v-divider>
                    <div style="overflow-y: scroll; ">
                        <li v-for="(val, index) in users">

                            <div>
                                <div class="pl-2 pr-2">
                                    <v-card class="mx-auto" max-width="344">
                                        <v-img src="https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?w=2000" height="200px">
                                            <div style="position: relative; top: 70%;" class="d-flex">
                                                <v-avatar class="ml-2" v-if="switch4">
                                                    <img  src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                                </v-avatar>
                                                <v-avatar class="ml-2" v-else></v-avatar>
                                                <div style="width: 75%; background-color: #ffffff " class="ml-2"  v-if="switch1 || switch2 || switch3">
                                                    <div class="pl-3 mb-0">
                                                        <p class="body-2 text-decoration-underline font-weight-black my-0" v-if="switch1">{{val.name.toUpperCase()}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;" v-if="switch2">{{val.number}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;" v-if="switch3">{{val.area}} {{val.state}} {{ val.pincode}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-img>
                                    </v-card>
                                </div>
                                <WhatsappButton />
                            </div>

                        </li>
                    </div>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

    </v-app>
</div>
</template>

<script>
import '../style/style.css'
import WhatsappButton from '../components/WhatsappButton.vue'
export default {

    data: () => ({
        drawer: null,
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
        users: null
    }),
    components: {
        WhatsappButton
    },

    async mounted() {
        const response = await fetch("http://localhost:8008/api/v1/user/all-user-data")
        let kk = await response.json()
        this.users = kk.data
    },

    methods: {
        change1(event) {
            !this.switch1
        },
        change2(event) {
            !this.switch2
        },
        change4(event) {
            !this.switch4
        }
    }

}
</script>
