<template>
    <v-dialog v-model="show" persistent max-width="500">
        <v-card>
            <v-card-title class="text-h6">
                Overenie veku & Cookies
            </v-card-title>

            <v-card-text>
                <p>
                    Táto stránka obsahuje cookies a je určená osobám starším ako 18 rokov.
                </p>
                <p>
                    Potvrdzujete že máte viac ako 18 rokov?
                </p>
            </v-card-text>

            <v-card-actions class="justify-end">
                <v-btn color="red" variant="text" @click="deny">
                    Nie
                </v-btn>
                <v-btn color="green" @click="accept">
                    Áno, súhlasím
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        name: 'AgeGate',
        data(){
            return{
                show: true
            }
        },
        methods: {
            accept(){
                this.show = false
                this.$emit('accepted')
            },
            deny(){
                this.$emit('denied')
            }
        }
    }
</script>