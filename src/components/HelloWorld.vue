<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import axios from "axios";
import { loadCheckout } from "@tiltbike/razorpay-checkout-js";

export default defineComponent({
  name: "HelloWorld",
  setup: () => {
    const state = reactive({});
    const pay = () => {
      const data = {
        amount: 1000,
        currency: "INR",
        order_id: "sdjbfsjbf",
      };
      axios({
        url: "http://localhost:7000/create",
        method: "POST",
        data: data,
      }).then(async (res) => {
        const razorpay = await loadCheckout({
          key: "rzp_test_5JLSz9GC6P48qb",
          amount: res.data.amount,
          name: "sambit",
          currency: "INR",
          description: "sdkfb", //Uncomment if you are using handler function
          prefill: {
            name: "Sambit Sahoo",
            email: "soulsam480@gmail.com",
            contact: "8917300318",
          },
          notes: {
            address: "",
          },
          theme: {
            color: "#00ffff",
          },
          order_id: res.data.id,
          callback_url: "http://localhost:7000/verify",
        });
        razorpay.open();
      });
    };
    return { state, pay };
  },
});
</script>

<template>
  <div><button @click="pay">checck</button></div>
</template>

<style lang="scss" scoped></style>
