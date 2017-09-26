<template>
    <div class="content">
        <mu-card>
            <mu-card-header title="Myron Avatar" subTitle="sub title">
                <mu-avatar icon="home" slot="avatar"/>
            </mu-card-header>
            <mu-card-media subTitle="Image Sub Title">
                <img src="./img/01.png"/>
            </mu-card-media>
            <mu-card-title title="Content Title" subTitle="Content Title"/>
            <mu-card-text>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
            <mu-card-actions>
                <mu-flat-button label="Action 1" to="/zero" class="btn"/>
                <mu-flat-button label="Action 2" to="/zero"/>
            </mu-card-actions>
        </mu-card>
    </div>
    
</template>
<style scoped>
    .btn{
        display: inline-block;
    }
    .content{
        margin-top: 0.55rem;
    }
</style>
