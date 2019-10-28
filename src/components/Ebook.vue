<template>
    <div class="ebook">
        <div class="title-wrapper">
            <div class="left">
                <span class="icon">back</span>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="icon">car</span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon">person</span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon">more</span>
                </div>
            </div>
        </div>
        <div class="read-wrapper">
            <img src="../assets/timg.jpg" alt="" >
        </div>
        <div class="menu-warpper">
            <div class="icon-wrapper">a</div>
            <div class="icon-wrapper">b</div>
            <div class="icon-wrapper">c</div>
            <div class="icon-wrapper">d</div>
        </div>
    </div>
</template>
<script>

</script>
<style lang='scss' scoped>
@import "../assets/global.scss";
    .ebook{
        position: relative;
        height:100%;
        .title-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            z-index: 101;
            width: 100%;
            height: px2rem(48);
            background-color: #fff;
            box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.2);

            .left {
                flex: 0 0 px2rem(80);
            @include center;
            }

            .right {
                flex: 1;
                display: flex;
                justify-content: space-around;
            }

}
        .read-wrapper{
            display: flex;
            justify-content: flex-end;
        }
        .menu-warpper{
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 101;
            width: 100%;
            height: px2rem(48);
            background-color: #fff;
            display: flex;
            justify-content: space-around;
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,0.2);

        }
    }
</style>