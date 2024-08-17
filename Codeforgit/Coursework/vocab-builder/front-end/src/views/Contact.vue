<template>
  <div>
    <h1>Author: Nguyen Dai Trong Nghia</h1>
    <p>Phone number: 0399658766 (VN)</p>
    <p>Email: nghiandtgcs220565@fpt.edu.vn</p>
    <p>Address: 91/4 Long Thoi street, Lai thieu town, Binh Duong province, Viet Nam</p>
    <p>Thank you so much, Mr Prichard !!!!</p>
    <img :src="profileImg" alt="Nguyen Dai Trong Nghia" style="width: 200px; height: auto;" />
  </div>
</template>

<script>
import profileImg from '@/assets/nghia.jpg';

export default {
  data() {
    return {
      profileImg,
    };
  },
};
</script>
