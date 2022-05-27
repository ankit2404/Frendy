<template>
<div class="container" style="padding: 0;">
    <v-app id="inspire">

        <v-app-bar app class="amber lighten-1">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <v-icon large>
                    mdi-chevron-left
                </v-icon>
                Greetings
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
                    <div style="overflow-y: scroll; " class="d-flex flex-wrap" >
                        <div v-for="(val, index) in users" class="pl-2 pr-2 pb-5" style="width: 50%; border-radius: 20px;">

                                    <v-card class="d-flex flex-wrap justify-center" >
                                        <v-img src="https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?w=2000" height="200px">
                                            <div style="position: relative; top: 70%;" class="d-flex">
                                                <v-btn color="warning" dark class="mx-auto" style="width: 85%;">
                                                    Normal 
                                                </v-btn>
                                            </div>
                                        </v-img>
                                    </v-card>
                                
                        </div>
                    </div>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

    </v-app>
</div>
</template>

<script>
import '../style/style.css'
export default {
    name: 'Creative',
    data: () => ({
        drawer: null,
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
        users: null
    }),
    components: {

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
