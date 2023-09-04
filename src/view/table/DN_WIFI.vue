<template>
    <a-table :columns="columns" :data-source="data" bordered :pagination="false">
    </a-table>
</template>
<script setup name="DN_WIFI">
import { ref, onMounted, defineComponent, reactive } from 'vue'
const columns = [
    {
        title: '公称直径DN(MM)',
        dataIndex: 'name',
        align:'center',
    },
    {
        title: 'DN50',
        dataIndex: 'DN50',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 9,
        }),
        align:'center',
    },
    {
        title: 'DN65',
        dataIndex: 'DN65',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN80',
        dataIndex: 'DN80',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN100',
        dataIndex: 'DN100',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN125',
        dataIndex: 'DN125',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN150',
        dataIndex: 'DN150',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN200',
        dataIndex: 'DN200',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN250',
        dataIndex: 'DN250',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN300',
        dataIndex: 'DN300',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
]
const data = [
    {
        name: '最大流量Q4(m²/h)',
        DN50: 31.25,
        DN65: 50,
        DN80: 78.75,
        DN100: 125,
        DN125: 200,
        DN150: 312.5,
        DN200: 500,
        DN250: 787.5,
        DN300: 1250,
    },
    {
        name: '常用流量Q4(m²/h)',
        DN50: 25,
        DN65: 40,
        DN80: 63,
        DN100: 100,
        DN125: 160,
        DN150: 250,
        DN200: 400,
        DN250: 630,
        DN300: 1000,
    },
    {
        name: '临街流量Q4(m²/h)',
        DN50: 0.16,
        DN65: 0.256,
        DN80: 0.403,
        DN100: 0.64,
        DN125: 1.024,
        DN150: 1.6,
        DN200: 2.56,
        DN250: 4.032,
        DN300: 6.4,
    },
    {
        name: '最小流量Q4(m²/h)',
        DN50: 0.1,
        DN65: 0.16,
        DN80: 0.252,
        DN100: 0.4,
        DN125: 0.64,
        DN150: 1,
        DN200: 1.6,
        DN250: 2.52,
        DN300: 4,
    },
    {
        name: '量程比(Q3/Q1)',
        DN50: 250/160,
    },
    {
        name: '压力损失(kPa/qp)',
        DN50: '<12',
    },
    {
        name: '准确度等级',
        DN50: '2级',
    },
    {
        name: '最大工作压力',
        DN50: '1.6MPa(2.5Mpa可定制)',
    },
    {
        name: '防护等级',
        DN50: 'IP68',
    },
    {
        name: '温度等级',
        DN50: 'T50',
    },
    {
        name: '环境类别',
        DN50: 'A类{5~55}℃或B类{-25~55}℃或D类可选',
    },
    {
        name: '供电电源',
        DN50: '3.6V锂电池(RS485可外供电.9-24DVC)',
    },
    {
        name: '电池工作时间',
        DN50: '≥8年',
    },
    {
        name: '安装方式',
        DN50: '水平或者垂直',
    },
]
</script>