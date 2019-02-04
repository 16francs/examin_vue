<template>
  <the-table>
    <tr slot="header">
      <th>No.</th>
      <th>講師名</th>
      <th>塾名</th>
      <th>権限</th>
      <th />
    </tr>

    <tr>
      <td>1</td>
      <td>講師1</td>
      <td>16francs</td>
      <td>管理者</td>
      <td>編集</td>
    </tr>

    <tr>
      <td>2</td>
      <td>講師2</td>
      <td>16francs</td>
      <td>講師</td>
      <td>編集</td>
    </tr>
  </the-table>
</template>

<script>
import TheTable from '~/components/common/atoms/TheTable'

export default {
  components: {
    TheTable
  }
}
</script>
