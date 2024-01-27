const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showParagraph: false,
            bgColor: ''
        }
    },
    methods: {
        applyClass(userInput) {
            if (userInput === 'user1') {
                return 'user1'
            } else if (userInput === 'user2') {
                return 'user2'
            }
        },
        toggleParagraph() {
            this.showParagraph = !this.showParagraph
        },
        applyParagraphStyle(){
            if (this.showParagraph === true) {
                return 'visible'
            }else {
                return 'hidden'
            }
        },
        applyBackgroundColor(userInput2) {
            // if (userInput2 === 'green') {
            //     return 'green'
            // } else if (userInput2 === 'red') {
            //     return 'red'
            // } else if (userInput2 === 'blue') {
            //     return 'blue'
            // }
            return userInput2
        }
    },
})
app.mount('#assignment')