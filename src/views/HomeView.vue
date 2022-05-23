<template>
<v-app id="inspire">

    <v-app-bar app class="amber lighten-1
">
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
    <v-row justify="center" style="margin: 0; position: fixed; width: 100%;">
        <v-expansion-panels accordion>
            <v-expansion-panel>
                <v-expansion-panel-header expand-icon="" class="text-decoration-underline font-weight-black subtitle-1">
                    Creative Settings
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="d-flex flex-wrap justify-space-between align-center">

                        <v-switch :label="`Your Name`" v-model="switch1"></v-switch>
                        <v-switch :label="`Your Number`" v-model="switch2"></v-switch>
                        <v-switch :label="`Your Phone`" v-model="switch4"></v-switch>
                        <v-switch :label="`Your Address`" v-model="switch3"></v-switch>
                    </div>

                </v-expansion-panel-content>
                <v-divider style="width:95%; margin: auto; background-color: black; "></v-divider>
                <div class="pl-2 pr-2">
                    <v-card class="mx-auto" max-width="344">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
                            <div class="my-2">
                                <v-btn color="warning" dark>
                                    Greetings
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>
                </div>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>

</v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
    }),
}
</script>
