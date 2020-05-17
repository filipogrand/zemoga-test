<template>
  <section class="message">
    <div class="message-left">
      <p>Speak out. Be heard. </p>
      <p class="bold">Be counted</p>
    </div>
    <div class="message-right">
      <p>
        Rule of Thumb is a crowd sourced court of public opinion where
        anyone and everyone can speak out and speak freely.
        It’s easy: You share your opinion, we analyze and put the data in a public report.
      </p>
      <i class="close"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variables.scss";

.message {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100px;
  margin: 33px $margin-right 0 $margin-left;
  background-color: #ebebeb;
  color: #333333;
  font-family: "Lato Light";

  .message-left {
    flex-basis: 188px;
    padding: 0 26px;
    font-size: 21.71px;

    .bold {
      font-family: "Lato";
      font-weight: bold;
      font-size: 37.1px;
    }
  }

  .message-right {
    flex-basis: calc(100% - 280px);
    font-size: 15px;
    letter-spacing: -0.2px;

    .close {
      position: absolute;
      width: 15px;
      height: 16px;
      right: 25px;
      top: calc(50% - 8px);
      background-image: url("~@/assets/images/icon_close.png");
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 925px) {
  .message {
    flex-direction: column;
    margin: 24px $margin-right-tablet 0 $margin-left-tablet;

    .message-left {
      display: flex;
      flex-basis: auto;
      align-items: center;
      padding: 0;
    }

    .message-right {
      padding: 0 40px 10px 40px;
    }
  }
}

@media screen and (max-width: 525px) {
  .message {
    margin: 16px $margin-right-mobile 0 $margin-left-mobile;

    .message-left {
      flex-direction: column;
    }
  }
}
</style>
