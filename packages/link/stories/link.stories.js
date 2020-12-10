import LbjLink from '../src/link.vue'

export default {
  title: 'LbjLink',
  component: LbjLink
}

export const Link = _ => ({
  components: { LbjLink },
  template: `
    <div>
      <Lbj-link :disabled="true" href="http://www.baidu.com">baidu</Lbj-link>
    </div>
  `
})