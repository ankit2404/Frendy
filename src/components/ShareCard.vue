<template>
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
                            <p class="body-2 text-decoration-underline font-weight-black my-0 ">Aditya Dave </p>
                            <p class=" my-0" style="font-size:0.7em ;">985789456</p>
                            <p class=" my-0" style="font-size:0.7em ;">404 Purani haveli andheri kamra</p>
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
</template>

<script>

import {Icon} from '@iconify/vue2';
import '../style/style.css'
  export default {
    name: 'ShareCard',
    
    data: () => ({
    }),
    components: {
        Icon,
    },
  
  }
</script>
