import { reactive } from 'vue'

const store = reactive({
	movies: [],
    series: [],
	search: '',
    apiKey: '16fb72a8cb44da1ced143c419e9567a2'
})

export default store