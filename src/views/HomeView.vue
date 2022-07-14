<template>
  <div class="container" style="padding: 0">
    <v-app id="inspire">
      <AppNaviagtion></AppNaviagtion>

      <v-row justify="center" style="margin: 0; width: 100%">
        <v-expansion-panels accordion>
          <v-expansion-panel style="position: relative">
            <div class="main_cont">
              <v-expansion-panel-header
                expand-icon=""
                class="text-decoration-underline font-weight-black subtitle-1"
              >
                Creative Settings
              </v-expansion-panel-header>
              <v-expansion-panel-content class="my-0">
                <div class="d-flex flex-wrap align-center my-0 py-0">
                  <v-switch
                    :label="`Your Name`"
                    v-model="switch1"
                    class="on_off_button"
                    @click="change1"
                  ></v-switch>
                  <v-switch
                    :label="`Your Number`"
                    v-model="switch2"
                    class="on_off_button"
                    @click="change2"
                  ></v-switch>
                  <v-switch
                    :label="`Your Photo`"
                    v-model="switch4"
                    class="on_off_button"
                    @click="change4"
                  ></v-switch>
                  <v-switch
                    :label="`Your Address`"
                    v-model="switch3"
                    class="on_off_button"
                    @click="!switch3"
                  ></v-switch>
                </div>
              </v-expansion-panel-content>
            </div>
            <v-divider
              style="
                width: 95%;
                margin: auto;
                background-color: black;
                margin-bottom: 10px;
              "
            ></v-divider>
            <div style="overflow-y: scroll">
              <li
                v-for="(val, index) in data"
                :key="index"
                class="mb-5"
                style="max-width: 95%; margin: auto"
              >
                <div @click="popupHandler(index)">
                  <div class="pl-2 pr-2">
                    <v-card class="mx-auto printMe">
                      <v-img :src="val.imageAbsolutePath">
                        <div>
                          <v-avatar
                            v-if="switch4"
                            :style="{
                                    position: 'absolute', top: (val.displayField.isProfileImageShown.FromTop*100)/val.bannerImageHeight + temp, left: (val.displayField.isProfileImageShown.FromLeft*100)/val.bannerImageWidth + temp,color: val.displayField.isProfileImageShown.TextColor,marginTop: mt, marginBottom: mb 
                                    }"
                            :height="(val.displayField.isProfileImageShown.ImageHeight*(screenWidth*(val.bannerImageHeight/val.bannerImageWidth)*0.9))/val.bannerImageHeight + px"
                            :width="(val.displayField.isProfileImageShown.ImageWidth*(screenWidth*(val.bannerImageHeight/val.bannerImageWidth)*0.9))/val.bannerImageHeight + px"
                          >
                            <img
                              :src="prefilUrl + user.imageAbsolutePath"
                              alt="John"
                            />
                          </v-avatar>
                          <p
                            v-if="switch1"
                            :style="{
                                    position: 'absolute', top: (val.displayField.isNameShown.FromTop*100)/val.bannerImageHeight + temp, left: (val.displayField.isNameShown.FromLeft*100)/val.bannerImageWidth + temp, color: val.displayField.isNameShown.TextColor, marginTop: mt, marginBottom: mb, fontSize: (val.displayField.isNameShown.FontSize*(screenWidth*(val.bannerImageHeight/val.bannerImageWidth)*0.9))/val.bannerImageHeight + px
                                    }"
                          >
                            {{user.name}}
                          </p>
                          <p
                            :style="{
                                    position: 'absolute', top: (val.displayField.isMobileNumberShown.FromTop*100)/val.bannerImageHeight + temp, left: (val.displayField.isMobileNumberShown.FromLeft*100)/val.bannerImageWidth + temp,color: val.displayField.isMobileNumberShown.TextColor,marginTop: mt, marginBottom: mb,fontSize: (val.displayField.isMobileNumberShown.FontSize*(screenWidth*(val.bannerImageHeight/val.bannerImageWidth)*0.9))/val.bannerImageHeight + px
                                    }"
                            v-if="switch2"
                          >
                            {{user.number}}
                          </p>
                          <p
                            :style="{
                                    position: 'absolute', top: (val.displayField.isAddressShown.FromTop*100)/val.bannerImageHeight + temp, left: (val.displayField.isAddressShown.FromLeft*100)/val.bannerImageWidth + temp,color: val.displayField.isAddressShown.TextColor,marginTop: mt, marginBottom: mb,fontSize: (val.displayField.isAddressShown.FontSize*(screenWidth*(val.bannerImageHeight/val.bannerImageWidth)*0.9))/val.bannerImageHeight + px
                                    }"
                            v-if="switch3"
                          >
                            {{user.area}} {{user.cityName}} {{user.state}}
                          </p>
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
                  <Popup
                    v-if="popupSwitch && showImage != null"
                    :image="val.imageAbsolutePath"
                  ></Popup>
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
        temp: "%",
        px : "px",
        popupSwitch: false,
        showImage: null,
        mt : '-12px',
        mb: '0px',
        screenWidth: null,
        data: [
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/1-maharan.jpg",
    "id": 128,
    "imageUrl": "creativeBanner/1-maharan.jpg",
    "imageName": "Maharana Pratap",
    "videoUrl": null,
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "860",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isAddressShown": {
        "FromTop": "932",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isMobileNumberShown": {
        "FromTop": "975",
        "boolean": true,
        "FromLeft": "105",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isProfileImageShown": {
        "FromTop": null,
        "boolean": false,
        "FromLeft": null,
        "TextColor": null,
        "ImageWidth": null,
        "ImageHeight": null
      }
    },
    "bannerImageHeight": "1000",
    "bannerImageWidth": "1000"
  },
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/2-maharan.jpg",
    "id": 127,
    "imageUrl": "creativeBanner/2-maharan.jpg",
    "imageName": "Maharana Pratap",
    "videoUrl": null,
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "860",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isAddressShown": {
        "FromTop": "932",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isMobileNumberShown": {
        "FromTop": "975",
        "boolean": true,
        "FromLeft": "105",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isProfileImageShown": {
        "FromTop": null,
        "boolean": false,
        "FromLeft": null,
        "TextColor": null,
        "ImageWidth": null,
        "ImageHeight": null
      }
    },
    "bannerImageHeight": "1000",
    "bannerImageWidth": "1000"
  },
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/3-maraha.jpg",
    "id": 126,
    "imageUrl": "creativeBanner/3-maraha.jpg",
    "imageName": "Maharana Pratap",
    "videoUrl": null,
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "860",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isAddressShown": {
        "FromTop": "932",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isMobileNumberShown": {
        "FromTop": "975",
        "boolean": true,
        "FromLeft": "105",
        "TextColor": "#9A0803",
        "FontSize": "30"
      },
      "isProfileImageShown": {
        "FromTop": null,
        "boolean": false,
        "FromLeft": null,
        "TextColor": null,
        "ImageWidth": null,
        "ImageHeight": null
      }
    },
    "bannerImageHeight": "1000",
    "bannerImageWidth": "1000"
  },
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/Quote 3.png",
    "id": 125,
    "imageUrl": "creativeBanner/Quote 3.png",
    "imageName": "Quotes",
    "videoUrl": null,
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "680",
        "boolean": true,
        "FromLeft": "350",
        "TextColor": "#000000",
        "FontSize": "40"
      },
      "isAddressShown": {
        "FromTop": "760",
        "boolean": true,
        "FromLeft": "350",
        "TextColor": "#000000",
        "FontSize": "40"
      },
      "isMobileNumberShown": {
        "FromTop": "720",
        "boolean": true,
        "FromLeft": "350",
        "TextColor": "#000000",
        "FontSize": "40"
      },
      "isProfileImageShown": {
        "FromTop": "500",
        "boolean": true,
        "FromLeft": "55",
        "TextColor": null,
        "ImageWidth": "150",
        "ImageHeight": "150"
      }
    },
    "bannerImageHeight": "810",
    "bannerImageWidth": "1440"
  },
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/aditya-main-2.png",
    "id": 124,
    "imageUrl": "creativeBanner/aditya-main-2.png",
    "imageName": "Aditya",
    "videoUrl": null,
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "720",
        "boolean": true,
        "FromLeft": "1180",
        "TextColor": "#000000",
        "FontSize": "30"
      },
      "isAddressShown": {
        "FromTop": "780",
        "boolean": true,
        "FromLeft": "1120",
        "TextColor": "#000000",
        "FontSize": "30"
      },
      "isMobileNumberShown": {
        "FromTop": "750",
        "boolean": true,
        "FromLeft": "1200",
        "TextColor": "#000000",
        "FontSize": "30"
      },
      "isProfileImageShown": {
        "FromTop": "566",
        "boolean": true,
        "FromLeft": "55",
        "TextColor": null,
        "ImageWidth": "260",
        "ImageHeight": "260"
      }
    },
    "bannerImageHeight": "810",
    "bannerImageWidth": "1440"
  },
  {
    "imageAbsolutePath": "https://cdn2-ahmedabad-staging.frendy.in/creativeBanner/rakesh (2).png",
    "id": 118,
    "imageUrl": "creativeBanner/rakesh (2).png",
    "imageName": "Happy Hanuman Jayanti",
    "videoUrl": "",
    "festivalName": "festival",
    "type": "festival",
    "displayField": {
      "isNameShown": {
        "FromTop": "860",
        "boolean": true,
        "FromLeft": "15",
        "TextColor": "#C80000",
        "FontSize": null
      },
      "isAddressShown": {
        "FromTop": "930",
        "boolean": true,
        "FromLeft": "15",
        "TextColor": "#C80000",
        "FontSize": null
      },
      "isMobileNumberShown": {
        "FromTop": "975",
        "boolean": true,
        "FromLeft": "105",
        "TextColor": "#000000",
        "FontSize": null
      },
      "isProfileImageShown": {
        "FromTop": "10",
        "boolean": true,
        "FromLeft": "20",
        "TextColor": "",
        "ImageWidth": "40",
        "ImageHeight": "40"
      }
    },
    "bannerImageHeight": null
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
        this.screenWidth = window.innerWidth;
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
