<template>
    <div>
        <swiper>
            <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
                Slide{{item}}
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5]
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .swiper-slide {
        padding-top: 3rem;
        height: 4rem;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
</style>