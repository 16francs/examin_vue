<template>
  <section class="container">
    生徒向けページ
    <card/>
  </section>
</template>

<script>
import Card from '../../components/common/atoms/Card'
export default {
  components: { Card },
  layout: 'students/default'
}
</script>
