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
                            <div class="d-flex flex-wrap justify-space-between align-center my-0 py-0">
                                <v-switch :label="`Your Name`" v-model="switch1" class="on_off_button"></v-switch>
                                <v-switch :label="`Your Number`" v-model="switch2" class="on_off_button"></v-switch>
                                <v-switch :label="`Your Photo`" v-model="switch4" class="on_off_button"></v-switch>
                                <v-switch :label="`Your Address`" v-model="switch3" class="on_off_button"></v-switch>
                            </div>

                        </v-expansion-panel-content>
                    </div>
                    <v-divider style="width:95%; margin: auto; background-color: black; margin-bottom: 10px;"></v-divider>
                    <div style="overflow-y: scroll; ">
                        <li v-for="(val, index) in users">


                            <div>
                                <div class="pl-2 pr-2">
                                    <v-card class="mx-auto" max-width="344">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
                                            <div style="position: relative; top: 70%;" class="d-flex">
                                                <v-avatar class="ml-2">
                                                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                                </v-avatar>
                                                <div style="background-color: #D3D3D3; width: 75%; " class="ml-2">
                                                    <div class="pl-3 mb-0">
                                                        <p class="body-2 text-decoration-underline font-weight-black my-0 ">{{val.name}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;">{{val.number}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;">{{val.address}}, {{val.state}}, {{val.pincode}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-img>
                                    </v-card>
                                </div>
                                <div class="my-2 d-flex justify-center pb-2">
                                    <v-btn color="success" dark>
                                        Share on Whatsapp
                                        <Icon icon="mdi:whatsapp" width="25" height="25" style="padding-left: 5px;" />
                                    </v-btn>
                                </div>
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
import {
    Icon
} from '@iconify/vue2';
import '../style/style.css'
import ShareCard from '../components/ShareCard.vue'
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
        Icon
    },

    async created() {
        const response = await fetch("http://localhost:8008/api/v1/user/all-user-data")
        let kk = await response.json()
        this.users = kk.data
    },

}
</script>
