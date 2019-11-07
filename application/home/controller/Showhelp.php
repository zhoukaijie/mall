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
class Showhelp extends BaseMall
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        Lang::load(APP_PATH . 'home/lang/'.config('default_lang').'/showhelp.lang.php');
    }

    /**
     * 店铺帮助页
     *
     */
    public function index()
    {
        $help_model = model('help');
        $help_list = $help_model->getShowStoreHelpList();
        $helptype_id = intval(input('param.t_id'));//帮助类型编号
        if ($helptype_id < 1 || empty($help_list[$helptype_id])) {
            $type_array = current($help_list);
            $helptype_id = $type_array['helptype_id'];
        }
        $this->assign('helptype_id', $helptype_id);
        $help_id = intval(input('param.help_id'));//帮助编号

        if ($help_id < 1 || empty($help_list[$helptype_id]['help_list'][$help_id])) {
            $help_array = @current($help_list[$helptype_id]['help_list']);
            $help_id = $help_array['help_id'];
        }
        $this->assign('help_id', $help_id);
        $help = $help_list[$helptype_id]['help_list'][$help_id];
        $this->assign('help_list', $help_list);//左侧帮助类型及帮助
        $this->assign('help', $help);//当前帮助
        $this->assign('article_list', '');//底部不显示首页的文章分类
        $phone_array = explode(',', config('site_phone'));
        $this->assign('phone_array', $phone_array);
        $this->assign('html_title', config('site_name') . ' - ' . lang('business_management_center'));
        return $this->fetch($this->template_dir.'store_help');
    }
}