<template>
<div class="my-2 d-flex justify-center pb-2">
    <v-btn color="success" dark>
        Share on Whatsapp
        <Icon icon="mdi:whatsapp" width="25" height="25" style="padding-left: 5px;" />
    </v-btn>
</div>
</template>

<script>
import {
    Icon
} from '@iconify/vue2';
import '../style/style.css'
export default {
    name: 'WhatsappButton',

    data: () => ({}),
    components: {
        Icon,
    },

}
</script>
