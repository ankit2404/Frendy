<template>
<v-card flat>
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>
    <v-app-bar class="purple darken-1 top-cont " style="position: sticky; top:0px; z-index:50;" dark prominent flat>
        <div style="width: 100%;">
            <div class="d-flex justify-space-between">
                <div class="d-flex">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <div class="d-flex">
                        <v-icon large style="color: #ffffff">
                            mdi-chevron-left
                        </v-icon>

                        <div class="body-1 mt-auto mb-auto">Category</div>
                    </div>
                </div>
                <div class="body-2 mt-auto mb-auto">
                    carttotal:4345
                </div>
            </div>
            <div>
                <v-text-field outlined label="Search" append-icon=""></v-text-field>
            </div>
        </div>

    </v-app-bar>

            <div  class="d-flex flex-wrap justify-space-between pt-6">
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Food and drinks
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
                <div class="pl-3 pr-3 pb-5" style="width: 50%; border-radius: 30px;">

                    <v-card class="d-flex flex-wrap justify-center">
                        <v-img src="https://www.redpixels.in/wp-content/uploads/Die-cut-business-card-redpixel.jpg" height="200px">
                            <div style="position: relative; top: 70%;" class="d-flex">
                                <v-btn @click="$router.push('/creative/promotion')"  dark class="mx-auto caption purple darken-1" style="width: 85%; border-radius: 15px;">
                                    Promotion
                                </v-btn>
                            </div>
                        </v-img>
                    </v-card>

                </div>
            </div>

        
</v-card>
</template>

<script>
import {
    Icon
} from '@iconify/vue2';
import '../style/style.css'
import Header from '../components/Header.vue'
export default {
    name: 'Category',
    components: {
        Header,
        Icon
    },
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    }

}
</script>
