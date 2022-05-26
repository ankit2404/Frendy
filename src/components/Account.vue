<template>
<v-card flat class="mt-9">
    <Header />
    <div class="d-flex justify-center flex-column align-center">
        <v-avatar size="62">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <p class="mb-3 mt-2 font-weight-bold text-decoration-underline" style="color: #8E24AA;">Anuradha Gamot</p>
    </div>
    <div class="d-flex flex-column ml-auto mr-auto" style="border: 4px solid #00C853; width: 90%;">

        <p class="justify-center font-weight-bold text-decoration-underline ml-auto mr-auto" style="color: #00C853
;">Partner Komal</p>
        <v-card class="d-flex justify-space-around mb-1" flat >
            <v-row class="text-center">
                <v-col cols="4">
                    <Icon icon="eva:phone-call-fill" width="46" height="46" color='#ffffff' style="border: 10px solid #00C853; background-color: #00C853; border-radius: 50%;" />
                </v-col>
                <v-col cols="4">
                    <Icon icon="fluent:contact-card-16-regular" width="46" height="46" color='#ffffff' style="border: 10px solid #00C853; background-color: #00C853; border-radius: 50%;" />
                </v-col>
                <v-col cols="4" >
                    <Icon icon="akar-icons:whatsapp-fill" width="46" height="46" color='#ffffff' style="border: 10px solid #00C853; background-color: #00C853; border-radius: 50%;" />
                </v-col>
            </v-row>
        </v-card>
        <v-card class="d-flex justify-space-around" flat>
            <v-row no-gutters class="text-center">
                <v-col cols="3">
                    <p class=" font-weight-medium " style="color: #00C853"> <span style="font-size: 14px;">Call</span></p>
                </v-col>
                <v-col cols="6">
                    <p class=" font-weight-medium" style="color: #00C853"><span style="font-size: 14px;">Pickup @Komal</span></p>
                </v-col>
                <v-col cols="3">
                    <p class=" font-weight-medium" style="color: #00C853"><span style="font-size: 14px;">Whatsapp</span></p>
                </v-col>
            </v-row>
        </v-card>
    </div>

    <v-card class="mt-8 mr-auto ml-auto" style="width: 90%;">
        <v-card flat class="d-flex justify-start">
            <Icon icon="mdi:google-translate" width="46" height="46" color='#ffffff' style="border: 8px solid #8E24AA; background-color: #8E24AA; border-radius: 50%;" class="ml-5 mt-3" />
            <v-card flat class="ml-4 mt-2">
                <p style="color:#8E24AA" class=" font-weight-bold title font-italic mb-0">Language: en</p>
                <p style="color:#8E24AA" class=" font-weight-bold caption font-italic">Select from Hindi, English or Gujrati</p>
            </v-card>
        </v-card>
    </v-card>
    <v-card class="mt-6 mr-auto ml-auto" style="width: 90%;">
        <v-card flat class="d-flex justify-start">
            <Icon icon="bi:cart-check" width="46" height="46" color='#ffffff' style="border: 8px solid #8E24AA; background-color: #8E24AA; border-radius: 50%;" class="ml-5 mt-3" />
            <v-card flat class="ml-4 mt-2">
                <p style="color:#8E24AA" class=" font-weight-bold title font-italic mb-0">Language: en</p>
                <p style="color:#8E24AA" class=" font-weight-bold caption font-italic">Select from Hindi, English or Gujrati</p>
            </v-card>
        </v-card>
    </v-card>
    <v-card class="mt-6 mr-auto ml-auto" style="width: 90%;">
        <v-card flat class="d-flex justify-start">
            <Icon icon="gg:profile" width="46" height="46" color='#ffffff' style="border: 8px solid #8E24AA; background-color: #8E24AA; border-radius: 50%;" class="ml-5 mt-3" />
            <v-card flat class="ml-4 mt-2">
                <p style="color:#8E24AA" class=" font-weight-bold title font-italic mb-0">Language: en</p>
                <p style="color:#8E24AA" class=" font-weight-bold caption font-italic">Select from Hindi, English or Gujrati</p>
            </v-card>
        </v-card>
    </v-card>
    <v-card class="mt-6 mr-auto ml-auto" style="width: 90%;">
        <v-card flat class="d-flex justify-start">
            <Icon icon="bxs:heart-circle" width="46" height="46" color='#ffffff' style="border: 8px solid #8E24AA; background-color: #8E24AA; border-radius: 50%;" class="ml-5 mt-3" />
            <v-card flat class="ml-4 mt-2">
                <p style="color:#8E24AA" class=" font-weight-bold title font-italic mb-0">Language: en</p>
                <p style="color:#8E24AA" class=" font-weight-bold caption font-italic">Select from Hindi, English or Gujrati</p>
            </v-card>
        </v-card>
    </v-card>
    <v-card class="mt-6 mr-auto ml-auto mb-6" style="width: 90%;">
        <v-card flat class="d-flex justify-start">
            <Icon icon="akar-icons:location" width="46" height="46" color='#ffffff' style="border: 8px solid #8E24AA; background-color: #8E24AA; border-radius: 50%;" class="ml-5 mt-3" />
            <v-card flat class="ml-4 mt-2">
                <p style="color:#8E24AA" class=" font-weight-bold title font-italic mb-0">Language: en</p>
                <p style="color:#8E24AA" class=" font-weight-bold caption font-italic">Select from Hindi, English or Gujrati</p>
            </v-card>
        </v-card>
    </v-card>



</v-card>
</template>

<script>
import {
    Icon
} from '@iconify/vue2';
import Header from '../components/Header.vue'
export default {
    name: 'Account',
    components: {
        Header,
        Icon
    },
    data: () => ({
        drawer: null
    }),
}
</script>
