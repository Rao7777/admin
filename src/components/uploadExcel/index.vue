<template>
<div>
    <el-upload
        class="upload-demo"
        :on-change="handleImportExcel"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :file-list="fileList"
        :auto-upload="false"
        accept=".xls, .xlsx"
    >
        <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
</div>
</template>

<script>
import XLSX from 'xlsx'

export default {
    name: 'c-upload-excel',
    data(){
        return{
            fileList: [],
        }
    },
    methods: {
        handleImportExcel(file){
            const types = file.name.split('.')[1]
            const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
            if (!fileType) {
                console.log('格式错误！请重新选择')
                return
            }
            this.file2Xce(file).then(tabJson => {
                if (tabJson && tabJson.length > 0) {
                    this.$emit('exportJson', tabJson)
                }
            })
        },
        file2Xce(file) {
            return new Promise(function(resolve) {
                const reader = new FileReader()
                reader.onload = function(e) {
                const data = e.target.result
                this.wb = XLSX.read(data, {
                    type: 'binary'
                })
                const result = []
                this.wb.SheetNames.forEach((sheetName) => {
                    result.push({
                        sheetName: sheetName,
                        sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
                    })
                })
                resolve(result)
                }
                reader.readAsBinaryString(file.raw)
            })
        }
    }
}
</script>