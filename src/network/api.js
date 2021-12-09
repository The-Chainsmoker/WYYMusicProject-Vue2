import {request} from './request'

// mv 排行
// 说明 : 调用此接口 , 可获取 mv 排行
// 可选参数 : limit: 取出数量 , 默认为 30
// area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
// 接口地址 : /top/mv
// 调用例子 : /top/mv?limit=10
export function getTopMv(area){
    return request({
        url:'/top/mv',
        params:{
            area
        }
    })
}

// 相似 mv
// 说明 : 调用此接口 , 传入 mvid 可获取相似 mv
// 必选参数 : mvid: mv id
// 接口地址 : /simi/mv
// 调用例子 : /simi/mv?mvid=5436712
export function getSimiMv(mvid){
    return request({
        url:'/simi/mv',
        params:{
            mvid
        }
    })
}

// mv 数据
// 获取 mv 点赞转发评论数数据
// 说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
// 必选参数 : mvid: mv 的 id
// 接口地址 : /mv/detail/info
// 调用例子 : /mv/detail/info?mvid=5436712
export function getMvCommentInfo(mvid){
    return request({
        url:'/mv/detail/info',
        params:{
            mvid
        }
    })
}

// 全部 mv
// 说明 : 调用此接口 , 可获取全部 mv
// 可选参数 :
// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// 接口地址 : /mv/all
// 调用例子 : /mv/all?area=港台
export function getAllMv(area,type,order,limit,offset){
    return request({
        url:'/mv/all',
        params:{
            area,limit,type,order,offset
        }
    })
}

// 最新 mv
// 说明 : 调用此接口 , 可获取最新 mv
// 可选参数 : area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
// 可选参数 : limit: 取出数量 , 默认为 30
// 接口地址 : /mv/first
// 调用例子 : /mv/first?limit=10
export function getNewMv(area){
    return request({
        url:'/mv/first',
        params:{
            area
        }
    })
}

// 搜索
// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 
//          offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
//          type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
// 接口地址 : /search 或者 /cloudsearch(更全)
// 调用例子 : /search?keywords= 海阔天空 /cloudsearch?keywords= 海阔天空
export function getCloudSearch(keywords,type){
    return request({
        url:'/cloudsearch',
        params:{
            keywords,
            type
        }
    })
}

/* 推荐新音乐 */
export function getPersonalizedNewSong(limit){
    return request({
        url:`/personalized/newsong?limit=${limit}`
    })
}

// 说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
// 必选参数 : id: 歌手 id
// 可选参数 : limit: 取出数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// 接口地址 : /artist/album
// 调用例子 : /artist/album?id=6452&limit=30 ( 周杰伦 )
export function getArtistAlbum(id,limit){
    return request({
        url:'/artist/album',
        params:{
            id,
            limit
        }
    })
}



// mv 地址
// 说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
// 必选参数 : id: mv id
// 可选参数 : r: 分辨率,默认1080,可从 /mv/detail 接口获取分辨率列表
// 接口地址 : /mv/url
// 调用例子 :
// /mv/url?id=5436712 /mv/url?id=10896407&r=1080
export function getMvUrl(id){
    return request({
        url:'/mv/url',
        params:{
            id
        }
    })
}


// 获取 mv 数据
// 说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
// 必选参数 : mvid: mv 的 id
// 接口地址 : /mv/detail
// 调用例子 : /mv/detail?mvid=5436712
export function getMvDetail(mvid){
    return request({
        url:'/mv/detail',
        params:{
            mvid
        }
    })
}


// 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
// 必选参数 : id: mv id
// 可选参数 : limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
// 接口地址 : /comment/mv
// 调用例子 : /comment/mv?id=5436712
export function getMvComment(id,limit){
    return request({
        url:'/comment/mv',
        params:{
            id,
            limit,
        }
    })
}



// 推荐 mv
// 说明 : 调用此接口 , 可获取推荐 mv
// 接口地址 : /personalized/mv
// 调用例子 : /personalized/mv
export function getRecommentMv(){
    return request({
        url:'/personalized/mv'
    })
}
