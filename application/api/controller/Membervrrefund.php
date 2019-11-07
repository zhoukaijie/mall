<?php

namespace app\api\controller;
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
 * 虚拟退款控制器
 */
class Membervrrefund extends MobileMember
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        Lang::load(APP_PATH.'home/lang/'.config('default_lang').'/memberrefund.lang.php');
    }


    /**
     * @api {POST} api/Membervrrefund/add_refund 添加兑换码退款
     * @apiVersion 1.0.0
     * @apiGroup Membervrrefund
     *
     * @apiHeader {String} X-DS-KEY 用户授权token
     *
     * @apiParam {Int} orderId 订单id
     * @apiParam {Array} rec_id 订单商品id
     * @apiParam {String} buyer_message 买家留言
     *
     * @apiSuccess {String} code 返回码,10000为成功
     * @apiSuccess {String} message  返回消息
     * @apiSuccess {Object} result  返回数据
     */ 
    public function add_refund()
    {
        $vrrefund_model = model('vrrefund');
        $order_id = intval(input('param.order_id'));
        if ($order_id < 1) {//参数验证
            ds_json_encode(10001,lang('param_error'));
        }
        $condition = array();
        $condition['buyer_id'] = $this->member_info['member_id'];
        $condition['order_id'] = $order_id;
        $order_info = $vrrefund_model->getRightVrorderList($condition);
        $order=$order_info['order_info'];
        if (!$order['if_refund']) {//检查状态,防止页面刷新不及时造成数据错误
            ds_json_encode(10001,lang('param_error'));
        }
            $code_list = $order['code_list'];
            $refund_array = array();
            $goods_num = 0; //兑换码数量
            $refund_amount = 0; //退款金额
            $redeemcode_sn = '';
            $rec_id_array = input('post.rec_id/a');
            if (!empty($rec_id_array) && is_array($rec_id_array)) {//选择退款的兑换码
                foreach ($rec_id_array as $key => $value) {
                    $code = $code_list[$value];
                    if (!empty($code)) {
                        $goods_num += 1;
                        $refund_amount += $code['pay_price']; //实际支付金额
                        $redeemcode_sn .= $code['vr_code'] . ','; //兑换码编号
                    }
                }
            }
            if ($goods_num < 1) {
                ds_json_encode(10001,lang('param_error'));
            }
            $refund_array['redeemcode_sn'] = rtrim($redeemcode_sn, ',');
            $refund_array['admin_state'] = '1'; //状态:1为待审核,2为同意,3为不同意
            $refund_array['refund_amount'] = ds_price_format($refund_amount);
            $refund_array['goods_num'] = $goods_num;
            $refund_array['buyer_message'] = input('post.buyer_message');
            $refund_array['add_time'] = time();
            $state = $vrrefund_model->addVrrefund($refund_array, $order);

            if ($state) {
                ds_json_encode(10000,lang('ds_common_save_succ'));
            } else {
                ds_json_encode(10001,lang('ds_common_save_fail'));
            }
    
    }

     /**
     * @api {POST} api/Membervrrefund/refund_form 获取退款信息
     * @apiVersion 1.0.0
     * @apiGroup Membervrrefund
     *
     * @apiHeader {String} X-DS-KEY 用户授权token
     *
     * @apiParam {Int} order_id 订单id
     *
     * @apiSuccess {String} code 返回码,10000为成功
     * @apiSuccess {String} message  返回消息
     * @apiSuccess {Object} result  返回数据
     * @apiSuccess {Object} result.order  虚拟订单信息 （返回字段参考vrorder表）
     * @apiSuccess {Object[]} result.code_list  可兑换的兑换码列表 （返回字段参考vrordercode表）
     */ 
    public function refund_form(){
        $vrrefund_model = model('vrrefund');
        $order_id = intval(input('param.order_id'));
        if ($order_id < 1) {//参数验证
            ds_json_encode(10001,lang('param_error'));
        }
        $condition = array();
        $condition['buyer_id'] = $this->member_info['member_id'];
        $condition['order_id'] = $order_id;
        $order_info = $vrrefund_model->getRightVrorderList($condition);
        $order=$order_info['order_info'];
        if (!$order['if_refund']) {//检查状态,防止页面刷新不及时造成数据错误
            ds_json_encode(10001,lang('param_error'));
        }
        $code_list = $order['code_list'];
        ds_json_encode(10000, '', array('order' => $order, 'code_list' => $code_list));
    }


    /**
     * @api {POST} api/Membervrrefund/index 退款记录列表
     * @apiVersion 1.0.0
     * @apiGroup Membervrrefund
     *
     * @apiHeader {String} X-DS-KEY 用户授权token
     *
     * @apiParam {Int} page 页码
     * @apiParam {Int} per_page 每页数量
     * @apiParam {String} type 查询字段 order_sn订单号 refund_sn退款单号 goods_name商品名
     * @apiParam {String} key 查询关键词
     * @apiParam {String} add_time_from 时间从 YYYY-MM-DD
     * @apiParam {String} add_time_to 时间到 YYYY-MM-DD
     *
     * @apiSuccess {String} code 返回码,10000为成功
     * @apiSuccess {String} message  返回消息
     * @apiSuccess {Object} result  返回数据
     * @apiSuccess {Object[]} result.refund_list  退款列表 （返回字段参考vrrefund表）
     * @apiSuccess {String} result.refund_list.goods_image_url  商品图片完整路径
     * @apiSuccess {String} result.refund_list.admin_state_text  管理员处理状态描述
     * @apiSuccess {Int} result.page_total  总页数
     * @apiSuccess {Boolean} result.hasmore  是否有更多 true是false否
     */ 
    public function index()
    {
        $condition = array();
        $condition['buyer_id'] = $this->member_info['member_id'];

        $keyword_type = array('order_sn', 'refund_sn', 'goods_name');
        if (trim(input('param.key')) != '' && in_array(input('param.type'), $keyword_type)) {
            $type = input('param.type');
            $condition[$type] = array('like', '%' . input('param.key') . '%');
        }
        if (trim(input('param.add_time_from')) != '' || trim(input('param.add_time_to')) != '') {
            $add_time_from = input('param.add_time_from');
            $add_time_to = input('param.add_time_to');
            if ($add_time_from !== false || $add_time_to !== false) {
                $condition['add_time'] = array('between time', array($add_time_from, $add_time_to));
            }
        }
        $vrrefund_model = model('vrrefund');
        $refund_list = $vrrefund_model->getVrrefundList($condition, 10);
        foreach($refund_list as $key => $val){
            $refund_list[$key]['goods_image_url'] = goods_cthumb($val['goods_image'], 480, $val['store_id']);
            $admin_state=$this->getRefundStateArray('admin');
            $refund_list[$key]['admin_state_text'] = $admin_state[$val['admin_state']];
        }
        $result = array_merge(array('refund_list' => $refund_list), mobile_page($vrrefund_model->page_info));
        ds_json_encode(10000, '', $result);
    }


    /**
     * @api {POST} api/Membervrrefund/view 退款记录查看
     * @apiVersion 1.0.0
     * @apiGroup Membervrrefund
     *
     * @apiHeader {String} X-DS-KEY 用户授权token
     *
     * @apiParam {Int} refund_id 退款ID
     *
     * @apiSuccess {String} code 返回码,10000为成功
     * @apiSuccess {String} message  返回消息
     * @apiSuccess {Object} result  返回数据
     * @apiSuccess {String[]} result.code_array  退款兑换码列表
     * @apiSuccess {Object} result.refund  退款信息 （返回字段参考vrrefund表）
     * @apiSuccess {Object} result.order  退款信息 （返回字段参考vrorder表）
     */ 
    public function view()
    {
        $vrrefund_model = model('vrrefund');
        $condition = array();
        $condition['buyer_id'] = $this->member_info['member_id'];
        $condition['refund_id'] = intval(input('param.refund_id'));
        $refund_list = $vrrefund_model->getVrrefundList($condition);
        $refund = $refund_list[0];
        $code_array = explode(',', $refund['redeemcode_sn']);
        $condition = array();
        $condition['order_id'] = $refund['order_id'];
        $order_info=$vrrefund_model->getRightVrorderList($condition);

        ds_json_encode(10000, '', array('code_array' => $code_array, 'refund' => $refund, 'order' => $order_info['order_info']));
    }

    /*退款审核状态*/
    function getRefundStateArray($type = '') {


        if ($type=='admin') {
            $admin_array = array(
                '1' => lang('refund_state_confirm'), '2' => lang('refund_state_yes'), '3' => lang('refund_state_no')
            ); 
            return $admin_array;
        }
    }

}