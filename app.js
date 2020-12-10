Vue.component('click-counter',{
    template: `#counter-template`,
    data(){
        return{
            count:0,
        }
    }
})

new Vue({
    el:'#app',
})