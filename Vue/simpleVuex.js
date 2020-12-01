const Vue = require('../js/vue');

function createStore({state, mutations}) {
    return new Vue({
        data: {
            state
        },
        methods: {
            commit(mutationType) {
                mutations[mutationType](this.state)
            }
        }
    })
}
