<script setup>
// 图片列表
defineProps({
  imageList:{
    type:Array,
    default:() =>[]
  }
})
import { useMouseInElement } from '@vueuse/core'
import { ref } from 'vue'
import { watch } from 'vue'

const imagenumber = ref(0)
const changeimage = (data) => {
  imagenumber.value = data
}
// 获取鼠标的相对位置
const target = ref(null)
const { elementX ,elementY ,isOutside} = useMouseInElement(target)

// 控制蒙层小滑块的位置,通过watch监听来实现这一个功能
const Left = ref(0)
const Top = ref(0)

// 下面的就是这个大图的一些效果
const positionx = ref(0) 
const positiony = ref(0)

watch([elementX,elementY,isOutside],()=>{
  // 在这里就可以实现对蒙块的位置
  if(isOutside.value)return
  if(elementX.value > 100 && elementX.value < 300) {
    Left.value = elementX.value - 100;
  }
  if(elementY.value > 100 && elementY.value <300) {
    Top.value = elementY.value - 100;
  }
  if(elementX.value < 100) {
    Left.value = 0
  }
  if(elementY.value < 100){
    Top.value = 0
  }
  if(elementX.value >300) {
    Left.value = 200;
  }
  if(elementY.value > 300) {
    Top.value = 200;
  }
  positionx.value =-Left.value*2
  positiony.value =-Top.value*2
})
</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[imagenumber]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" v-show="!isOutside" :style="{ left: `${Left}px`, top: `${Top}px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="changeimage(i)" :class="{ active : i === imagenumber}">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[imagenumber]})`,
        backgroundPositionX: `${positionx}px`,
        backgroundPositionY: `${positiony}px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    // position: absolute;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>