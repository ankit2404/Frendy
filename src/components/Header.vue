<template>
<v-app id="inspire" style="height: 0px; width: 0px" >
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>

    <v-app-bar app class="purple darken-1" style="height: 50px;">
        <v-app-bar-nav-icon @click="drawer = !drawer" style="color: #ffffff" class=" mb-0 pb-0"></v-app-bar-nav-icon>
        <div>

            <v-toolbar-title >
                <div class="d-flex " style="color: #ffffff">
                    <span>
                        <v-icon large style="color: #ffffff">
                            mdi-chevron-left
                        </v-icon> Account
                    </span>
                    <v-spacer></v-spacer>
                    <span class="pl-15 pt-1 body-2">CartTotal: 2990</span>
                </div>

            </v-toolbar-title>
        </div>
    </v-app-bar>
    </v-app>
</template>


<script>
export default {
    name: 'Header',
    data: () => ({
        drawer: null
    }),
}
</script>