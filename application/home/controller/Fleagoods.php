<?php

namespace app\home\controller;

use think\Lang;

/**
 * ============================================================================
 * DSMall多用户商城
 * ============================================================================
 * 版权所有 2014-2028 长沙德尚网络科技有限公司，并保留所有权利。
 * 网站地址: http://www.csdeshang.com
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和使用 .
 * 不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * 控制器
 */
class Fleagoods extends BaseFlea {

    public function _initialize() {
        parent::_initialize(); // TODO: Change the autogenerated stub
        Lang::load(APP_PATH . 'home/lang/'.config('default_lang').'/fleacommon.lang.php');
        Lang::load(APP_PATH . 'home/lang/'.config('default_lang').'/fleagoods.lang.php');
    }

    /**
     * 单个闲置物品信息页
     */
    public function index() {
        /**
         * 地区输出
         */
        $fleaarea_model = model('fleaarea');
        $area_array = $fleaarea_model->fleaarea_show();
        $this->assign('area_one_level', $area_array['area_one_level']);
        $this->assign('area_two_level', $area_array['area_two_level']);
        /**
         * 验证goods_id
         */
        $goods_id = intval(input('param.goods_id'));
        if ($goods_id<=0) {
            $this->error(lang('miss_argument')); //"缺少参数:商品编号"
        }

        
        //留言成功调转到留言
        if (!empty(input('get.succ'))) {
            if (input('get.succ') == 'succ') {
                $succ_link = HOME_SITE_URL.'/Fleagoods/index.html?goods_id=' . $goods_id . "#flea_message";
                @header("Location: " . $succ_link);exit();
            }
        }
        /**
         * 实例化店铺商品模型
         */
        $flea_model = model('flea');
        $goods_array = $flea_model->getFleaList(array('goods_id' => $goods_id, 'goods_show' => '1'), 4);
        if (empty($goods_array))
            $this->error(lang('goods_index_no_goods')); //'商品不存在'
        /**
         * 图片路径
         */
        $goods_image_path = UPLOAD_SITE_URL . DS . ATTACH_MFLEA . '/' . $goods_array[0]['member_id'] . '/';
        //店铺商品图片目录地址
        $goods_array[0]['goods_image'] = $goods_array[0]['goods_image'] != '' ? $goods_image_path . $goods_array[0]['goods_image'] : goods_thumb();
        $goods_array[0]['goods_tag'] = explode(',', str_replace('，', ',', $goods_array[0]['goods_tag']));
        /**
         * 页面title
         */
        $this->assign('goods_title', $goods_array[0]['goods_name']);
        /**
         * 商品多图
         */
        $desc_image = $flea_model->getFleauploadList(array('store_id' => $goods_array[0]['member_id'], 'item_id' => $goods_array[0]['goods_id'], 'fleaupload_type' => 12));
        $flea_model->getThumb($desc_image, $goods_image_path);

        $image_key = 0;
        if (!empty($desc_image) && is_array($desc_image)) {//将封面图放到第一位显示
            $goods_image_1 = $goods_array[0]['goods_image']; //封面图
            foreach ($desc_image as $key => $val) {
                if ($goods_image_1 == $val['thumb_small']) {
                    $image_key = $key;
                    break;
                }
            }
            if ($image_key > 0) {//将封面图放到第一位显示
                $desc_image_0 = $desc_image[0];
                $desc_image[0] = $desc_image[$image_key];
                $desc_image[$image_key] = $desc_image_0;
            }
        }

        $this->assign('goods', $goods_array[0]);
        isset($desc_image[0]) && $this->assign('goods_image', $desc_image[0]);
        $this->assign('desc_image', $desc_image);
        $this->assign('goods_image_path', $goods_image_path);
        /**
         * 获取用户信息 
         */
        $member_model = model('member');
        $member_info = $member_model->infoMember(array('member_id' => $goods_array[0]['member_id']));
        $this->assign('flea_member_info', $member_info);
        /**
         * 闲置物品发布者的其他闲置物品
         */
        $other_flea_info2 = $flea_model->getFleaList(array('member_id' => $goods_array[0]['member_id'], 'goods_show' => '1'), '', '*');
        $this->assign('goods_commend3', $other_flea_info2);
        /**
         * 得到商品的seo信息
         */
        $html_title = $goods_array[0]['goods_name'];
        $seo_keywords = $goods_array[0]['goods_keywords'];
        $seo_description = $goods_array[0]['goods_description'];
        $this->assign('html_title', $html_title.'-'.config('site_name'));
        $this->assign('seo_keywords', $seo_keywords);
        $this->assign('seo_description', $seo_description);
        /**
         * 得到商品咨询信息
         */
        $fleaconsult_model = model('fleaconsult');
        $consult_list = $fleaconsult_model->getFleaconsultList(array('fleaconsult.goods_id' => $goods_id), '', 'seller');
        $this->assign('consult_list', $consult_list);
        /**
         * 浏览次数更新
         */
        $flea_model->editFlea(array('goods_click' => ($goods_array[0]['goods_click'] + 1)), $goods_id);
        /**
         * 推荐
         */
        $goods_commend_list = $flea_model->getFleaList(array('pic_input' => '2'), 27);
        
        $this->assign('goods_commend', $goods_commend_list);
        return $this->fetch($this->template_dir . 'flea_goods');
    }

    /**
     * 闲置物品咨询添加
     */
    public function save_consult() {
        //判断是否登录
        if (empty(session('member_id'))) {
            ds_json_encode(10001,lang('flea_consult_notice'));
        }
        /**
         * 判断商品编号的存在性和合法性
         */
        $flea_model = model('flea');
        $condition = array();
        $goods_info = array();
        if (input('post.type_name') == '') {
            $condition['goods_id'] = input('post.goods_id');
            $goods_info = $flea_model->getFleaList($condition);
        }
        if (empty($goods_info)) {
            if (input('post.type_name') == '') {
                ds_json_encode(10001,lang('goods_index_goods_not_exists'));
            }
        }
        /**
         * 咨询内容的非空验证
         */
        if (trim(input('post.content')) === "") {
            ds_json_encode(10001,lang('goods_index_input_consult'));
        }
        $member_model = model('member');
        $member_info = $member_model->infoMember(array('member_id' => input('post.goods_id')));
        /**
         * 接收数据并保存
         */
        $input = array();
        $input['seller_id'] = $member_info['member_id'];
        $input['member_id'] = input('post.hide_name') ? 0 : (empty(session('member_id')) ? 0 : session('member_id'));
        $input['goods_id'] = input('post.goods_id');
        $input['email'] = input('post.email');
        $input['consult_content'] = input('post.content');
        if (input('post.type_name') == '') {
            $input['type'] = 'flea';
        } else {
            $input['type'] = input('post.type_name');
        }
        $consult = model('fleaconsult');
        if ($consult->addFleaconsult($input)) {
            /* 	闲置物品表增加评论次数	 */
            $data = array();
            $data['flea_commentnum'] = 'flea_commentnum+1';
            $flea_model->editFlea($data, intval(input('post.goods_id')));
            ds_json_encode(10000,lang('goods_index_consult_success'));
        } else {
            ds_json_encode(10001,lang('goods_index_consult_fail'));
        }
    }

    /**
     * 取得的时间间隔 
     */
    public static function checkTime($time) {
        if ($time == '') {
            return false;
        }
        $catch_time = (time() - $time);
        if ($catch_time < 60) {
            echo $catch_time . lang('second');
        } elseif ($catch_time < 60 * 60) {
            echo intval($catch_time / 60) . lang('minute');
        } elseif ($catch_time < 60 * 60 * 24) {
            echo intval($catch_time / 60 / 60) . lang('hour');
        } elseif ($catch_time < 60 * 60 * 24 * 365) {
            echo intval($catch_time / 60 / 60 / 24) . lang('day');
        } elseif ($catch_time < 60 * 60 * 24 * 365 * 999) {
            echo intval($catch_time / 60 / 60 / 24 / 365) . lang('year');
        }
    }
}