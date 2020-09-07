<script>
    export default {
        name: "testRender",
        render: function (h) {
            console.log(this);
            return h('div', {class: 'test', props: ['testData'], on: {click: 'conData'}}, 'test');
        },
        props: ['testData'],
        methods: {
            conData() {
                console.log(122);
                console.log(this.testData);
            }
        },
        data() {
            return {
                age: 18
            };
        }
    };
</script>

<style scoped>
    .test {
        font-size: 18px;
        color: red;
    }
</style>
