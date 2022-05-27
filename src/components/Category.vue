<template>
<v-card flat>
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>
    <v-app-bar class="purple darken-1 top-cont" dark prominent flat>
        <div style="width: 100%;">
            <div class="d-flex justify-space-between">
                <div class="d-flex">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <div class="d-flex">
                        <v-icon large style="color: #ffffff" >
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
                <v-text-field
            outlined
            label="Search"
            append-icon=""
          ></v-text-field>
            </div>
        </div>

    </v-app-bar>
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
