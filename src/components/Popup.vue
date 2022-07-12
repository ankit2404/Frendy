<template>
<div  id="popup">
    <div id="main">
        <div id="img-cont">
            <img :src= "image" alt="img">
        </div>
        <div id="btn-cont">
            <div>Share on whatsapp</div>
        </div>
        <div id="cross">
            <Icon icon="gridicons:cross-circle" width="30" height="30" />
        </div>

    </div>
</div>
</template>

<script>
import {
    Icon
} from '@iconify/vue2';
import '../style/popup.css'
export default {
    name: 'Popup',
    data: () => ({
        popupSwitch: true,
    }),

    props:{
    image:String
  },
    components: {
        Icon,
    },

}
</script>
