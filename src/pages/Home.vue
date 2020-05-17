<template>
  <div id="home">
    <MainRuling></MainRuling>
    <Message></Message>
    <PreviousRuling></PreviousRuling>
    <Footer></Footer>
  </div>
</template>

<script>

import MainRuling from '@/components/MainRuling.vue';
import Message from '@/components/Message.vue';
import PreviousRuling from '@/components/PreviousRuling.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    MainRuling,
    Message,
    PreviousRuling,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
