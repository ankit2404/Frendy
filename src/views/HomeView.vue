<template>
<div class="container" style="padding: 0;">
    <v-app id="inspire">
        <AppNaviagtion></AppNaviagtion>

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
                        <li v-for="(val, index) in data" :key="index" class="mb-5" style = "max-width: 95%; margin: auto;">
                            <div @click="popupHandler(index)">
                                <div class="pl-2 pr-2 ">
                                    <v-card class="mx-auto printMe " >
                                        <v-img :src="val.imageAbsolutePath" :height=val.bannerImageHeight :width="val.bannerImageWidth" >
                                            <div>
                                                <v-avatar v-if="switch4" :style="{
                                                             position: 'absolute', top: val.displayField.isProfileImageShown.FromTop + temp, left: val.displayField.isProfileImageShown.FromLeft + temp,color: val.displayField.isProfileImageShown.TextColor,
                                                        }" :height=val.displayField.isProfileImageShown.ImageHeight :width="val.displayField.isProfileImageShown.ImageWidth">
                                                    <img :src="prefilUrl + user.imageAbsolutePath" alt="John">
                                                </v-avatar>
                                                <p v-if="switch1" :style="{
                                                             position: 'absolute', top: val.displayField.isNameShown.FromTop + temp, left: val.displayField.isNameShown.FromLeft + temp, color: val.displayField.isNameShown.TextColor,
                                                        }">{{user.name}}</p>
                                                <p :style="{
                                                             position: 'absolute', top: val.displayField.isMobileNumberShown.FromTop + temp, left: val.displayField.isMobileNumberShown.FromLeft + temp,color: val.displayField.isMobileNumberShown.TextColor,
                                                        }" v-if="switch2">{{user.number}}</p>
                                                <p :style="{
                                                             position: 'absolute', top: val.displayField.isAddressShown.FromTop + temp, left: val.displayField.isAddressShown.FromLeft + temp,color: val.displayField.isAddressShown.TextColor,
                                                        }" v-if="switch3">{{user.area}} {{user.cityName}} {{user.state}}</p>

                                            </div>
                                        </v-img>
                                    </v-card>
                                </div>
                                <!-- <WhatsappButton /> -->
                                <!-- <div class="my-2 d-flex justify-center pb-2">
                                    <v-btn color="success" dark @click="takeShot(index)">
                                        Share on Whatsapp
                                        <Icon icon="mdi:whatsapp" width="25" height="25" style="padding-left: 5px;" />
                                    </v-btn>
                                </div> -->
                                <Popup v-if="popupSwitch && showImage != null" :image="val.imageAbsolutePath"></Popup>
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
import AppNaviagtion from '@/components/AppNavigation.vue';
import {
    Icon
} from '@iconify/vue2';
import Popup from '@/components/Popup.vue';

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
        temp: "px",
        popupSwitch: false,
        showImage: null,
        data: [{
                "imageAbsolutePath": "https://cdn2-ahmedabad-production.frendy.in/creativeBanner/20220620_221835_0000.jpg",
                "id": 152,
                "imageUrl": "creativeBanner/20220620_221835_0000.jpg",
                "imageName": "International Yoga Day",
                "videoUrl": "",
                "festivalName": "festival",
                "type": "festival",
                "displayField": {
                    "isNameShown": {
                        "FromTop": "860",
                        "boolean": true,
                        "FromLeft": "20",
                        "TextColor": "red"
                    },
                    "isAddressShown": {
                        "FromTop": "935",
                        "boolean": true,
                        "FromLeft": "20",
                        "TextColor": "#365e75"
                    },
                    "isMobileNumberShown": {
                        "FromTop": "972",
                        "boolean": true,
                        "FromLeft": "100",
                        "TextColor": "#365e75"
                    },
                    "isProfileImageShown": {
                        "FromTop": "885",
                        "boolean": false,
                        "FromLeft": "15",
                        "TextColor": "",
                        "ImageWidth": "50",
                        "ImageHeight": "50"
                    },
                },
                "bannerImageHeight": "1000",
                "bannerImageWidth": "800",
            },
            {
                "imageAbsolutePath": "https://cdn2-ahmedabad-production.frendy.in/creativeBanner/20220620_221812_0001.jpg",
                "id": 151,
                "imageUrl": "creativeBanner/20220620_221812_0001.jpg",
                "imageName": "International Yoga Day",
                "videoUrl": "",
                "festivalName": "festival",
                "type": "festival",
                "displayField": {
                    "isNameShown": {
                        "FromTop": "860",
                        "boolean": true,
                        "FromLeft": "20",
                        "TextColor": "#365e75"
                    },
                    "isAddressShown": {
                        "FromTop": "935",
                        "boolean": true,
                        "FromLeft": "20",
                        "TextColor": "#365e75"
                    },
                    "isMobileNumberShown": {
                        "FromTop": "972",
                        "boolean": true,
                        "FromLeft": "100",
                        "TextColor": "#365e75"
                    },
                    "isProfileImageShown": {
                        "FromTop": "",
                        "boolean": false,
                        "FromLeft": "",
                        "TextColor": "",
                        "ImageWidth": "",
                        "ImageHeight": ""
                    }
                },
                "bannerImageHeight": "1000",
                "bannerImageWidth": "1000"
            }
        ]
    }),
    components: {
        Icon,
        WhatsappButton,
        AppNaviagtion,
        Popup
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
    props: {
        image: Object
    },
    methods: {
        makeImage: async function (index) {
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
            return blob;
        },
        takeShot: async function (index) {
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
            // console.log(url);
            toDataUrl(url).then((response) => {
                let appendToImage = "data:image/jpeg;base64,";
                let imageToDataUrl = appendToImage + response;

                // console.log(imageToDataUrl);

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
        },
        popupHandler(index) {
            if (this.popupSwitch) {
                this.popupSwitch = false;
                this.makeImage = null;
            } else {
                this.popupSwitch = true;
                const makeImage = async function (index) {
                    let div = document.getElementsByClassName("printMe")[index];
                    let ImageToUrl = await html2canvas(div, {
                        logging: true,
                        letterRendering: 1,
                        // useCORS: true
                    });
                    let image = ImageToUrl.toDataURL("image/png").replace(
                        "image/png",
                        "image/octet-stream"
                    );
                    // this.showImage = image;
                    
                    console.log(image)
                    return image;
                }
                this.showImage = makeImage(index)
                // console.log(makeImage(index))
            }
        }
    },

}
</script>
