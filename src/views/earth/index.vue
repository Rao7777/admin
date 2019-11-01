<template>
    <div>
        <upload-excel @exportJson="exportJson"></upload-excel>
    </div>
</template>

<script>
import UploadExcel from '@/components/uploadExcel'
export default {
    name: 'earch',
    components: {
        UploadExcel
    },
    methods: {
        exportJson(arr){
            console.log(arr)
        }
    }
}
</script>