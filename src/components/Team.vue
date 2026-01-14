<script>
    export default {
      name: 'About',
      props: {
        cards: {
            type: Array,
            required: true,
            },
        },
    }
</script>

<template>
    <v-card class="mx-auto" max-width="900">
        <v-container fluid>
            <v-row dense>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                        <v-img
                                :src="card.src"
                                class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="500px"
                                cover
                        >
                        <v-card-title class="text-white">
                            {{ card.title }}
                        </v-card-title>
                        <v-card-subtitle class="text-white">
                            {{ card.subtitle }}
                        </v-card-subtitle>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>