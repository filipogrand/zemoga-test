<template>
  <footer>
    <nav>
      <a>Terms and Conditions</a>
      <a>Privacy Policy</a>
      <a>Contact Us</a>
    </nav>
    <nav>
      <a>Folow Us</a>
      <a
        class="facebook"
        href="http://fb.com"
        target="_blank"
      >
      </a>
      <a
        class="twitter"
        href="http://twitter.com"
        target="_blank"
      >
      </a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variables.scss";

footer {
  display: flex;
  justify-content: space-between;
  margin: 39px $margin-right 39px $margin-left;
  padding-top: 34px;
  border-top: dotted #979797 1px;
  font-family: "Lato Light";
  font-size: 12px;
  color: #333333;

  nav {
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      margin-right: 18px;

      &.facebook {
        width: 25px;
        height: 25px;
        background-image: url("~@/assets/images/icon_facebook.png");
      }

      &.twitter {
        width: 30px;
        height: 25px;
        background-image: url("~@/assets/images/icon_twitter.png");
      }
    }
  }
}

@media screen and (max-width: 925px) {
  footer {
    flex-direction: column;
    margin: 39px $margin-right-tablet 39px $margin-left-tablet;
    padding-top: 16px;

    nav {
      flex-direction: column;
      a {
        margin-bottom: 8px;
      }
    }
  }
}

@media screen and (max-width: 525px) {
  footer {
    margin: 39px $margin-right-mobile 39px $margin-left-mobile;
    padding-top: 16px;
  }
}
</style>
