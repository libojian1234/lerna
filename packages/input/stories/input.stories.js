import LbjInput from '../'

export default {
    title: 'LbjInput',
    component: LbjInput
}

export const Text = () => ({
    components: { LbjInput },
    template: '<lbj-input v-model="value"></lbj-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})

export const Password = () => ({
    components: { LbjInput },
    template: '<lbj-input type="password" v-model="value"></lbj-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})