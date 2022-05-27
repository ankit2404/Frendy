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
                    <!-- <div class="main_cont">
                        <v-expansion-panel-header expand-icon="" class="text-decoration-underline font-weight-black subtitle-1">
                            Creative Settings
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="my-0">
                            <div class="d-flex flex-wrap align-center my-0 py-0">
                                <v-switch :label="`Your Name`" v-model="switch1" class="on_off_button" ></v-switch>
                                <v-switch :label="`Your Number`" v-model="switch2" class="on_off_button" ></v-switch>
                                <v-switch :label="`Your Photo`" v-model="switch4" class="on_off_button" ></v-switch>
                                <v-switch :label="`Your Address`" v-model="switch3" class="on_off_button" @click="!switch3"></v-switch>
                            </div>

                        </v-expansion-panel-content>
                    </div> -->
                    <v-divider style="width:95%; margin: auto; background-color: black; margin-bottom: 10px;"></v-divider>
                    <div style="overflow-y: scroll; " class="d-flex flex-wrap">
                        <div class="pl-2 pr-2 pb-5" style="width: 50%; border-radius: 20px;">

                            <v-card class="d-flex flex-wrap justify-center">
                                <v-img src="https://media.istockphoto.com/vectors/season-greetings-white-calligraphy-phrase-vector-illustration-vector-id1186450816?k=20&m=1186450816&s=612x612&w=0&h=ElJx_OQXInDTQTCjn0k7WHYy2aPK57b07TGvM1kA1-c=" height="200px">
                                    <div style="position: relative; top: 70%;" class="d-flex">
                                        <v-btn color="warning" @click="$router.push('/creative/greetings')" dark class="mx-auto" style="width: 85%;">
                                            Greetings
                                        </v-btn>
                                    </div>
                                </v-img>
                            </v-card>

                        </div>
                        <div class="pl-2 pr-2 pb-5" style="width: 50%; border-radius: 20px;">

                            <v-card class="d-flex flex-wrap justify-center">
                                <v-img src="https://cdn.xxl.thumbs.canstockphoto.com/promotions-in-job-or-product-sales-promotion-stock-illustrations_csp22578073.jpg" height="200px">
                                    <div style="position: relative; top: 70%;" class="d-flex">
                                        <v-btn @click="$router.push('/creative/promotion')" color="warning" dark class="mx-auto" style="width: 85%;">
                                            Promotion
                                        </v-btn>
                                    </div>
                                </v-img>
                            </v-card>

                        </div>
                        <div class="pl-2 pr-2 pb-5" style="width: 50%; border-radius: 20px;">

                            <v-card class="d-flex flex-wrap justify-center">
                                <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                                    <div style="position: relative; top: 70%;" class="d-flex">
                                        <v-btn @click="$router.push('/creative/visitingcard')" color="warning" dark class="mx-auto" style="width: 85%;">
                                            Visiting Card
                                        </v-btn>
                                    </div>
                                </v-img>
                            </v-card>

                        </div>
                        <div class="pl-2 pr-2 pb-5" style="width: 50%; border-radius: 20px;">

                            <v-card class="d-flex flex-wrap justify-center">
                                <v-img src="https://www.sanjayjangam.com/wp-content/uploads/2021/10/good-morning-images.jpg" height="200px">
                                    <div style="position: relative; top: 70%;" class="d-flex">

                                        <v-btn @click="$router.push('/creative/goodmorning')" color="warning" dark class="mx-auto" style="width: 85%;">
                                            Good Morning
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
    }),

}
</script>
