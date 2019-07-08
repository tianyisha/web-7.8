<template>
    <div>
         <dl v-for="(item,index) in list" :key="index">
             <dt>{{item.title}}</dt>
             <dd>{{item.wether}}</dd>
         </dl>
    </div>
</template>
<script>
import axios from 'axios'
import '../data/mock'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
     axios.get('/api/getlist').then((res)=>{
     console.log(res.data.data);
     this.list=res.data.data
     }) 
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>