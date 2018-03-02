<template>
    <div>
        <scroller class="wrapper">
            <div class="pic">
                <image class="m-image" :style="{ width, height }" @load="resize" :src="bigImage"></image>
                <div class="top-mask">
                    <image class="mask_top_img" :src="maskTopImg"></image>
                </div>
                <div class="bottom-mask">
                    <image class="mask_img" :src="maskImg"></image>
                </div>
                <div class="play-wrap">
                    <image class="play-btn" :src="playImg"></image>
                </div>
                <div class="movie_info">
                    <text class="movie_name">红海行动</text>
                    <text class="e_name">Operation Red Sea</text>
                </div>
                <!-- <div class="percent-wrap p-wrap-1">
                    <div class="percent percent-left"></div>
                </div>
                <div class="percent-wrap p-wrap-2">
                    <div class="percent percent-right"></div>
                </div> -->
            </div>
            <div class="recomand">
                <div class="top top1">
                    <text class="text1">2017-12-08 上映 喜剧 / 动画 / 家庭</text>
                </div>
                <div class="top top2">
                    <text class="text2">4.3W 粉丝 · 423 动态</text>
                </div>
                <div class="top top3">
                    <image class="bqpf" :src="bqpf"></image>
                    <div class="b-btn">
                        <image class="tj" :src="tj"></image>
                    </div>
                    <div class="b-btn">
                        <image class="btj" :src="btj"></image>
                    </div>
                </div>
            </div>
            <!-- 动态/影评/影片介绍 -->
            <div class="tab">
                <div class="br-top"></div>
                <div class="middle">
                    <text class="t-btn t-btn1">动态</text>
                    <text class="t-btn t-btn1">影评</text>
                    <div class="ypjs">
                        <text class="t-btn t-btn-selected">影片介绍</text>
                        <div class="tab-seleted"></div>
                    </div>
                </div>
                <div class="br-top"></div>
            </div>
            <!-- 剧情 -->
            <div class="juqing">
                <text class="title">剧情</text>
                <text class="store" @click="showAll" :style="{lines:lines}">{{story}}</text>
            </div>
            <!-- 影人 -->
            <div class="yingren">
                <text class="yr-title">影人</text>
                <scroller class="yr-list" scroll-direction="horizontal">
                    <div class="yr" v-for="yr in actors">
                        <image class="yr-head" :src="yr.img" resize="cover"></image>
                        <text class="yr-name">{{yr.name}}</text>
                        <text class="yr-type">{{yr.roleName}}</text>
                        <image class="yr-opt" :src="yrOpt"></image>
                    </div>
                </scroller>
            </div>
            <div class="split-line"></div>
            <!-- 想着电影 -->
            <div class="xgdy">
                <text class="dy-title">相关电影</text>
                <scroller class="dy-list" scroll-direction="horizontal">
                    <div class="xgdy-item" v-for="mo in movies">
                        <image class="dy-pic" :src="mo.img"></image>
                        <text class="dy-name">{{mo.name}}</text>
                        <text class="dy-gz">{{mo.followCount}}人关注</text>
                        <image :src="yrOpt" class="yr-opt"></image>
                    </div>
                </scroller>
            </div>
            <div class="blank"></div>
        </scroller>
        <div class="opt">
            <text class="opt-btn opt-btn1">+ 关注</text>
            <text class="opt-btn opt-btn2">发影评</text>
            <text class="opt-btn opt-btn3">购票</text>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [
                {
                    followCount: 0,
                    followCountDesc: '',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2016/09/14/094845.13018759_1280X720X2.jpg',
                    movieId: 228345,
                    name: '湄公河行动'
                },
                {
                    followCount: 201,
                    followCountDesc: '201',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2018/01/30/102123.92074166_1280X720X2.jpg',
                    movieId: 218085,
                    name: '黑豹'
                },
                {
                    followCount: 175,
                    followCountDesc: '175',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2018/02/24/120406.34154207_1280X720X2.jpg',
                    movieId: 108482,
                    name: '古墓丽影：源起之战'
                },
                {
                    followCount: 402,
                    followCountDesc: '402',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2018/02/05/093619.43082530_1280X720X2.jpg',
                    movieId: 234873,
                    name: '唐人街探案2'
                },
                {
                    followCount: 241,
                    followCountDesc: '241',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2018/01/05/175658.82351501_1280X720X2.jpg',
                    movieId: 237182,
                    name: '捉妖记2'
                },
                {
                    followCount: 0,
                    followCountDesc: '',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2018/01/23/173037.53017905_1280X720X2.jpg',
                    movieId: 254330,
                    name: '刀尖'
                },
                {
                    followCount: 0,
                    followCountDesc: '',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2017/07/24/114801.63514023_1280X720X2.jpg',
                    movieId: 215122,
                    name: '鲛珠传'
                },
                {
                    followCount: 2,
                    followCountDesc: '2',
                    followStatus: false,
                    img: 'https://img5.mtime.cn/mt/2017/07/11/183729.97294820_1280X720X2.jpg',
                    movieId: 228267,
                    name: '绣春刀II修罗战场'
                },
                {
                    followCount: 0,
                    followCountDesc: '',
                    followStatus: false,
                    img: 'https://img31.mtime.cn/mt/2014/04/24/153221.47085622_1280X720X2.jpg',
                    movieId: 172743,
                    name: '魔警'
                },
                {
                    followCount: 0,
                    followCountDesc: '',
                    followStatus: false,
                    img: 'https://img31.mtime.cn/mt/2013/07/26/073349.71633383_1280X720X2.jpg',
                    movieId: 181912,
                    name: '激战'
                }
            ],
            width: 750,
            height: 1200,
            lines: 4,
            yrOpt: 'http://192.168.215.159:8196/img/yr-opt.png',
            tj: 'http://192.168.215.159:8196/img/tj.png',
            btj: 'http://192.168.215.159:8196/img/btj.png',
            bqpf: 'http://192.168.215.159:8196/img/bqpf.png',
            playImg: 'http://192.168.215.159:8196/img/play.png',
            maskImg: 'http://192.168.215.159:8196/img/mask.png',
            maskTopImg: 'http://192.168.215.159:8196/img/mask_top.png',
            bigImage: 'https://img5.mtime.cn/mg/2018/02/03/145913.46518961.jpg',
            actors: [
                { actorId: 892901, img: 'https://img31.mtime.cn/ph/2014/03/18/162315.35570292_1280X720X2.jpg', name: '林超贤', nameEn: 'Dante Lam', roleName: '导演' },
                { actorId: 1311848, img: 'https://img5.mtime.cn/ph/2017/02/17/093429.48679538_1280X720X2.jpg', name: '张译', nameEn: 'Yi Zhang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120817.38191951.jpg', roleName: '杨锐--“蛟龙突击队”队长' },
                { actorId: 2189621, img: 'https://img5.mtime.cn/ph/2018/02/19/170530.59964405_1280X720X2.jpg', name: '黄景瑜', nameEn: 'Johnny Huang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120823.72480722.jpg', roleName: '顾顺--“蛟龙突击队”狙击手' },
                { actorId: 1258273, img: 'https://img31.mtime.cn/ph/2014/03/14/153731.67413091_1280X720X2.jpg', name: '海清', nameEn: 'Christina Hai', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120830.36249943.jpg', roleName: '夏楠' },
                { actorId: 1819380, img: 'https://img5.mtime.cn/ph/2018/02/28/142409.19372397_1280X720X2.jpg', name: '杜江', nameEn: 'Jiang Du', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120837.67649781.jpg', roleName: '徐宏--“蛟龙突击队”副队长、爆破手' },
                { actorId: 1551279, img: 'https://img5.mtime.cn/ph/2018/02/22/140518.94796280_1280X720X2.jpg', name: '蒋璐霞', nameEn: 'Luxia Jiang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120843.67316538.jpg', roleName: '佟莉--“蛟龙突击队”机枪手' },
                { actorId: 1806167, img: 'https://img5.mtime.cn/ph/2018/02/26/115240.33757959_1280X720X2.jpg', name: '尹昉', nameEn: 'Fang Yin', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120851.58572668.jpg', roleName: '李懂--“蛟龙突击队”狙击手观察员' },
                { actorId: 2113992, img: 'https://img5.mtime.cn/ph/2018/02/28/113414.58213175_1280X720X2.jpg', name: '郭家豪', nameEn: 'Jiahao Guo', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120857.29054689.jpg', roleName: '陆琛--“蛟龙突击队”医疗兵' },
                { actorId: 2288590, img: 'https://img5.mtime.cn/ph/2017/08/15/104152.80179323_1280X720X2.jpg', name: '王雨甜', nameEn: 'Yutian Wang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120904.99423540.jpg', roleName: '张天德"石头"--“蛟龙突击队”机枪手' },
                { actorId: 2288591, img: 'https://img5.mtime.cn/ph/2017/08/15/104624.52461310_1280X720X2.jpg', name: '麦亨利', nameEn: 'Henry Prince Mak', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/120913.58344446.jpg', roleName: '庄羽--“蛟龙突击队”通信兵' },
                { actorId: 1250877, img: 'https://img31.mtime.cn/ph/2016/01/08/102820.24124767_1280X720X2.jpg', name: '张涵予', nameEn: 'Hanyu Zhang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/121106.57852280.jpg', roleName: '舰长（特别出演）' },
                { actorId: 1177407, img: 'https://img31.mtime.cn/ph/2016/08/24/160128.95518465_1280X720X2.jpg', name: '王强', nameEn: 'Qiang Wang', roleImg: 'http://img5.mtime.cn/mg/2018/02/19/121034.35668560.jpg', roleName: '政委' },
                { actorId: 916259, img: 'https://img31.mtime.cn/ph/2015/10/30/100837.70157999_1280X720X2.jpg', name: '任达华', nameEn: 'Simon Yam', roleImg: '', roleName: '报社老板' },
                { actorId: 2154055, img: 'https://img31.mtime.cn/ph/2015/09/15/101530.78270659_1280X720X2.jpg', name: '王彦霖', nameEn: 'Yanlin Wang', roleImg: '', roleName: '罗星' }
            ],
            story:
                '索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都， 当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。　　蛟龙突击队八人，整装待发。时间紧迫，在“撤侨遇袭可反击，相反则必须避免交火，以免引起外交冲突”的大原则下，海军战舰及蛟龙突击队深入伊维亚，在恶劣的环境下，借助海陆等多种装备，成功转移等候在码头的中国侨民，并在激烈的遭遇战之后，营救了被恐怖分子追击的中国领事馆巴士。　　然而事情尚未完结，就在掩护华侨撤离之际，蛟龙突击队收到中国人质被恐怖分子劫持的消息。众人深感责任重大，义无反顾地再度展开营救行动。前方路途险恶，蛟龙突击队即将遭遇的，远不止人质营救那么简单,恐怖分子的惊天阴谋即将浮出水面……',
            director: { directorId: 892901, img: 'http://img31.mtime.cn/ph/2014/03/18/162315.35570292_1280X720X2.jpg', name: '林超贤', nameEn: 'Dante Lam' }
        }
    },
    methods: {
        resize(event) {
            console.log(event.size.naturalWidth)
            console.log(event.size.naturalHeight)
        },
        showAll() {
            if (this.lines == 4) {
                this.lines = 0
            } else {
                this.lines = 4
            }
        }
    }
}
</script>

<style scoped>
.percent-wrap {
    width: 80px;
    height: 160px;
    position: absolute;

    bottom: 12px;
    border-width: 2px;
    border-style: solid;
    border-color: fuchsia;
    overflow: hidden;
}
.p-wrap-1 {
    right: 120px;
}
.p-wrap-2 {
    right: 40px;
}
.percent {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    border-width: 10px;
    border-style: solid;
    border-right-color: #fec435;
    border-top-color: green;
}

.percent-left {
    transform: rotate(-135deg);
}
.percent-right {
    transform: rotate(45deg);
}

.xgdy {
    width: 750px;
    height: 476px;
    padding-left: 30px;
    margin-top: 40px;
}
.dy-list {
    flex-direction: row;
    margin-top: 30px;
    width: 750px;
    height: 396px;
}
.xgdy-item {
    width: 160px;
    height: 396px;
    align-items: center;
    margin-right: 40px;
}
.dy-pic {
    width: 160px;
    height: 240px;
    border-radius: 10px;
}
.dy-gz {
    color: #b0adac;
    font-size: 22px;
    margin-top: 10px;
}
.dy-title {
    font-size: 36px;
    color: #ffffff;
}
.dy-name {
    color: #ffffff;
    font-size: 30px;
    margin-top: 10px;
    lines: 1;
    text-overflow: ellipsis;
}
.split-line {
    width: 750px;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.1;
    margin-top: 60px;
}
.yingren {
    width: 750px;
    height: 392px;
    padding-left: 30px;
    margin-top: 40px;
}
.yr-opt {
    width: 92px;
    height: 50px;
    margin-top: 12px;
}
.yr-name {
    width: 160px;
    height: 42px;
    color: #ffffff;
    font-size: 30px;
    margin-top: 10px;
    text-align: center;
    lines: 1;
    text-overflow: ellipsis;
}
.yr-type {
    font-size: 22px;
    color: #b0adac;
    text-align: center;
    lines: 1;
    text-overflow: ellipsis;
}
.yr-list {
    margin-top: 40px;
    width: 750px;
    height: 312px;
    flex-direction: row;
}
.yr {
    width: 160px;
    height: 312px;
    margin-right: 70px;
    align-items: center;
}
.yr-head {
    width: 160px;
    height: 160px;
    border-radius: 80px;
}
.yr-title {
    font-size: 36px;
    color: #ffffff;
}
.juqing {
    width: 750px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 40px;
}
.title {
    color: #ffffff;
    font-size: 36px;
}
.store {
    margin-top: 20px;
    font-size: 30px;
    color: #b0adac;
    text-overflow: ellipsis;
}
.tab {
    width: 750px;
    height: 102px;
}
.br-top {
    width: 750px;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.1;
}
.middle {
    flex-direction: row;
    width: 750px;
    height: 100px;
}
.t-btn {
    width: 250px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #b0adac;
}
.t-btn-selected {
    color: #ffffff;
    font-weight: bold;
}
.ypjs {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.tab-seleted {
    width: 28px;
    height: 6px;
    border-radius: 3px;
    background-color: #ffffff;
    margin-top: -20px;
}
.pic {
    width: 750px;
    height: 928px;
    /* height: 50px; */
    overflow: hidden;
}
.blank {
    width: 750px;
    height: 120px;
}
.opt-btn {
    width: 250px;
    height: 100px;
    line-height: 100px;
    color: #ffffff;
    font-size: 28px;
    text-align: center;
}
.opt-btn3 {
    background-color: #fec435;
}
.opt {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750px;
    height: 100px;
    flex-direction: row;
    background-color: #161514;
}
.e_name {
    font-size: 30px;
    color: #ffffff;
    opacity: 0.4;
}
.movie_info {
    margin-left: 30px;
    position: absolute;
    left: 0;
    bottom: 12px;
}

.movie_name {
    font-size: 60px;
    color: #ffffff;
}
.wrapper {
    background-color: #161514;
}
.recomand {
    width: 750px;
    height: 280px;
}
.top {
    margin-left: 30px;
}
.top1 {
    width: 457px;
    height: 37px;
}
.top2 {
    width: 457px;
    height: 37px;
    margin-top: 14px;
}
.text1 {
    opacity: 0.4;
    font-size: 26px;
    color: #ffffff;
}
.text2 {
    font-size: 26px;
    color: #ffffff;
}

.top3 {
    width: 690px;
    height: 99px;
    margin-top: 40px;
    flex-direction: row;
}

.bqpf {
    width: 80px;
    height: 99px;
}

.b-btn {
    width: 270px;
    height: 90px;
    margin-left: 30px;
}

.tj {
    width: 270px;
    height: 90px;
}
.btj {
    width: 270px;
    height: 90px;
}

.play-wrap {
    position: absolute;
    left: 320px;
    top: 443px;
}
.play-btn {
    width: 110px;
    height: 110px;
    opacity: 0.8;
}

.top-mask {
    position: absolute;
    top: 0;
    left: 0;
}

.mask_top_img {
    width: 750px;
    height: 228px;
}

.bottom-mask {
    position: absolute;
    top: 228;
    left: 0;
    width: 750px;
    height: 700px;
}
.mask_img {
    width: 750px;
    height: 700px;
}
</style>
