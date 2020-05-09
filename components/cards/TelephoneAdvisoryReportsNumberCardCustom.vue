<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart-custom
      :title="$t('年代別患者数')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center-custom'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="Data.agetype_summary.date"
      :unit="$t('人')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000071'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraphCustom from '@/utils/formatGraphCustom'
import TimeBarChartCustom from '@/components/TimeBarChartCustom.vue'

export default {
  components: {
    TimeBarChartCustom
  },
  data() {
    // 相談件数
    const contactsGraph = formatGraphCustom(Data.agetype_summary.data)
    const data = {
      Data,
      contactsGraph
    }
    return data
  }
}
</script>
