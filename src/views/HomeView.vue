<template>
<div class="container" style="padding: 0;">
    <v-app id="inspire">

        <v-app-bar app class="amber lighten-1">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <v-icon large @click="$router.push('/')">
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

                        <li v-for="(val, index) in banners" :key="index">

                            <div>
                                <div class="pl-2 pr-2 ">
                                    <v-card class="mx-auto printMe ">
                                        <v-img :src="prefilUrl + val.imageUrl" height="200px">
                                            <!-- <v-img :src = '' height="200px"> -->

                                            <div style="position: relative; top: 70%;" class="d-flex">
                                                <v-avatar class="ml-2" v-if="switch4">
                                                    <img :src="prefilUrl + user.imageAbsolutePath" alt="John">
                                                </v-avatar>
                                                <v-avatar class="ml-2" v-else></v-avatar>
                                                <div style="width: 75%; background-color: #ffffff " class="ml-2" v-if="switch1 || switch2 || switch3">
                                                    <div class="pl-3 mb-0">
                                                        <p class="body-2 text-decoration-underline font-weight-black my-0" v-if="switch1">{{user.name}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;" v-if="switch2">{{user.number}}</p>
                                                        <p class=" my-0" style="font-size:0.7em ;" v-if="switch3">{{user.area}} {{user.cityName}} {{user.state}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-img>
                                    </v-card>
                                </div>
                                <!-- <WhatsappButton /> -->
                                <div class="my-2 d-flex justify-center pb-2">
                                    <v-btn color="success" dark @click="takeShot(index)">
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
import '../style/style.css'
import WhatsappButton from '../components/WhatsappButton.vue'
import html2canvas from "html2canvas";
import toDataUrl from "image-to-base64/browser";
import {
    Icon
} from '@iconify/vue2';

export default {
    name: 'HomeView',

    data: () => ({
        drawer: null,
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
        banners: null,
        prefilUrl: "http://localhost:8008/",
        bannerName: null,
        user: null,
    }),
    components: {
        Icon,
        WhatsappButton
    },

    async mounted() {
        this.bannerName = this.$route.params.id
        const res = await fetch('http://localhost:8008/api/v1/user/get-user')
        const ak = await res.json();
        this.user = ak.data
        const response = await fetch(`http://localhost:8008/api/v1/banner/show/${this.bannerName}`)
        let kk = await response.json()
        this.banners = kk.data

    },
    methods: {
        takeShot: async function (index) {
            console.log(index)
            let div = document.getElementsByClassName("printMe")[index];
            let ImageToUrl = await html2canvas(div, {
                // allowTaint:true,
                logging: true,
                letterRendering: 1,
                useCORS: true
            });
            let image = ImageToUrl.toDataURL("image/png").replace(
                "image/png",
                "image/octet-stream"
            );

            const blob = await (await fetch(image)).blob();
            const fileArray = new File([blob], 'Banner.jpeg', {
                type: "image/jpeg"
            });

            if (navigator.canShare && navigator.canShare({
                    files: [fileArray]
                })) {
                navigator.share({
                        files: [fileArray],
                        title: 'Pictures',
                        text: 'Our Pictures.',
                    })
                    .then(() => console.log('Share was successful.'))
                    .catch((error) => console.log('Sharing failed', error));
            } else {
                console.log(`Your system doesn't support sharing files.`);
            }
        },
        convertImageToDataUrl: function (url) {
            console.log(url);
            toDataUrl(url).then((response) => {
                let appendToImage = "data:image/jpeg;base64,";
                let imageToDataUrl = appendToImage + response;

                console.log(imageToDataUrl);

                return imageToDataUrl;
            });
        },

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
