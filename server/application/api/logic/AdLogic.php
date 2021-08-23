<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------

// | author: likeshop.cn.team
// +----------------------------------------------------------------------


namespace app\api\logic;

use app\common\model\Ad;
use app\common\server\UrlServer;
use think\Db;

class AdLogic
{
    public static function lists($pid, $client)
    {
        $ad_list = Db::name('ad a')
            ->join('ad_position ap', 'a.pid = ap.id')
            ->where(['pid' => $pid, 'ap.client' => $client, 'a.status' => 1, 'a.del' => 0, 'ap.status' => 1, 'ap.del' => 0])
            ->field('a.*')
            ->select();

        $list = [];
        foreach ($ad_list as $key => $ad) {
            $url = $ad['link'];
            $is_tab = 0;
            $params = [];
            switch ($ad['link_type']) {
                case 1:

                    $page = Ad::getLinkPage($ad['client'], $ad['link']);
                    $url = $page['path'];
                    $is_tab = $page['is_tab'] ?? 0;
                    break;
                case 2:
                    $goods_path = Ad::getGoodsPath($ad['client']);
                    $url = $goods_path;
                    $params = [
                        'id' => $ad['link'],
                    ];
                    break;
            }
            $list[] = [
                'image'     => UrlServer::getFileUrl($ad['image']),
                'link'      => $url,
                'link_type' => $ad['link_type'],
                'params'    => $params,
                'is_tab'    => $is_tab,
            ];
        }
        return $list;
    }
}