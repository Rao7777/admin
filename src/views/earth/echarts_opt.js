import {worldTouristAttr } from '@/assets/data/tourist.js'


const map_series = [{
    type: 'map',
    mapType: 'world',
    roam: true,
    itemStyle:{
        emphasis:{label:{show:true}}
    },
    data: worldTouristAttr,
    tooltip: {
        trigger: 'item',
        triggerOn:"mousemove", 
        showContent:true, 
        confine: true,
        extraCssText:'max-width:300px;white-space:pre-wrap;',
        formatter: (params) => {
            if(!(params && params.data)) return '-'
            let {sp_name, en_name, summary} =params.data
            let res = `${sp_name} | ${en_name} <p>${summary}</p>` 
            // let images = '~@/assets/imgs/paris.jpg'
            // let res = `${sp_name} | ${en_name}` + "<img style='width:250px;height:150px;display:block;' src='" + images + "'/>" 
            return res
        }
    }
}]

export {
    map_series,
}