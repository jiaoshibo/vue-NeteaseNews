<template>
    <div>
        <div class="yaowen">
            <p>
                要闻
            </p>
        </div>
        <mu-card>
            <mu-card-media subTitle="阿尔托蕾娅和莫德雷德" subTitleClass="saber">
                <img src="../home/img/saber02.jpg" />
            </mu-card-media>
        </mu-card>
        <div class="importantNews">
            <div class="import-in">
                <p>今日要闻</p>
            </div>
        </div>
        <div class="newsList">
            <div class="list">
                <div class="list-in">
                    <p>
                        新闻
                    </p>
                    <img src="../home/img/01.png">
                </div>
            </div>
            <div class="list">
                <div class="list-in">
                    <p>
                        新闻
                    </p>
                    <img src="../home/img/01.png">
                </div>
            </div>
            <div class="list">
                <div class="list-in">
                    <p>
                        新闻
                    </p>
                    <img src="../home/img/01.png">
                </div>
            </div>
            <div class="list">
                <div class="list-in">
                    <p>
                        新闻
                    </p>
                    <img src="../home/img/01.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less">
body{
    background: #f5f5f5;
    margin-bottom: 0.65rem;
}
.b{
    margin-bottom: 0.65rem;
}
.yaowen{
    height: 0.5rem;
    background: #d50000;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.22rem;
}
.yaowen p{
    margin: 0;
}
.importantNews{
    height: 0.7rem;
    padding: 0.1rem;
    background: #fff;
}
.import-in{
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
   
}
.import-in  p{
        margin: 0;
        font-size: 0.2rem;
}
.newsList{
    margin-top: 0.1rem;
    background-color: #fff;
}
.list{
    height: 0.7rem;
    padding: 0.05rem;
    border-bottom:0.01rem solid #eee;
    .list-in{
        height: 0.6rem;
        background-color: #fff;
        p{
            width: 70%;
            margin: 0;
            text-align: center;
            line-height: 0.6rem;
            float: left;
        }
        img{
            height: 0.6rem;
            float: right;
        }
    }
}
</style>

