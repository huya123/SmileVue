<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
                Slide{{item}}
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5],
                swiperOption: {
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
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
        /* padding-top: 3rem; */
        height: 4rem;
        line-height: 4rem;
        /* border-bottom: 1px solid #f00; */
        text-align: center;
    }
    .swiper {
        height: 7rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
</style>