<style lang="scss">
.earth-warp{
    padding: 20px 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .world-map{
        width: 1000px;
        height: 600px;
    }
}
</style>

<template>
    <div class="earth-warp">
        <upload-excel @exportJson="exportJson" v-if="userName === 'raoqi'"></upload-excel>

        <v-chart class="world-map" :options="option" theme='macarons'/>
    </div>
</template>

<script>
import UploadExcel from '@/components/uploadExcel'
import { mapGetters } from 'vuex'
import 'echarts/theme/macarons.js'
import {map_series} from './echarts_opt.js'

export default {
    name: 'earth',
    components: {
        UploadExcel
    },
    data(){
        return {
            option: {
                title : {
                    text: '世界旅游地图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item'
                },
                series: map_series
            }
        }
    },
    computed: {
        ...mapGetters({
            userName: 'getUserName'
        })
    },
    methods: {
        exportJson(arr){
            // console.log(arr[0])
            let _data = []
            arr[0].sheet.forEach(item => {
                // console.log(item)
                let _item = {}
                _item.id = item['景点id(id)']
                _item.name = item['景点名(name)']
                _item.en_name = item['英文名(en_name)']
                _item.areas = item['所在区域(areas)']
                _item.address = item['位置(address)']
                _item.lat = item['纬度(谷歌地图)(lat)']
                _item.lng = item['经度(谷歌地图)(lng)']
                _item.images = item['景点图片(images)']
                _item.summary = item['景点介绍(summary)']
                _item.phone = item['电话(phone)']
                _item.website = item['网址(website)']
                _item.duration = item['用时参考(duration)']
                _item.traffic = item['交通(traffic)']
                _item.ticket = item['门票(ticket)']
                _item.open = item['开放时间(open)']

                _data.push(_item)
               
            });

            console.log(JSON.stringify(_data))
        },
    },
}
</script>