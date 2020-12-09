import LbjForm from '../'
import LbjFormItem from '../../formitem'
import LbjInput from '../../input'
import LbjButton from '../../button'

export default {
    title: 'LbjForm',
    component: LbjForm
}

export const Login = () => ({
    components: {
        LbjForm,
        LbjFormItem,
        LbjInput,
        LbjButton
    },
    template: `
        <lbj-form class="form" ref="form" :model="user" :rules="rules">
            <lbj-form-item label="用户名" prop="username">
            <lbj-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"></lbj-input>
            </lbj-form-item>
            <lbj-form-item label="密码" prop="password">
            <lbj-input type="password" v-model="user.password"></lbj-input>
            </lbj-form-item>
            <lbj-form-item>
            <lbj-button type="primary" @click="login">登 录</lbj-button>
            </lbj-form-item>
        </lbj-form>
    `,
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名'
                }],
                password: [{
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    },
    methods: {
        login() {
            console.log('button')
            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    }
})