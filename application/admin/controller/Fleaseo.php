<?php

namespace app\admin\controller;
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
class Fleaseo extends AdminControl
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        Lang::load(APP_PATH . 'admin/lang/'.config('default_lang').'/flea.lang.php');
        if(config('flea_isuse')!='1'){
           $this->error(lang('flea_isuse_off_tips'),'dashboard/welcome');
        }
    }
    function index(){
        /**
         * 实例化模型
         */
        $config_model = model('config');
        /**
         * 保存信息
         */
        if (request()->isPost()) {
            $update_array = array();
            $update_array['flea_site_title'] = trim(input('post.flea_site_title'));
            $update_array['flea_site_description'] = trim(input('post.flea_site_description'));
            $update_array['flea_site_keywords'] = trim(input('post.flea_site_keywords'));

            $result = $config_model->editConfig($update_array);
            if ($result === true) {
                $this->success(lang('ds_common_save_succ'));
            } else {
                $this->error(lang('ds_common_save_fail'));
            }
        } else {
            /**
             * 读取设置内容 $list_setting
             */
            $list_setting = rkcache('config', true);
            /**
             * 模板输出
             */
            $this->assign('list_setting', $list_setting);
            $this->setAdminCurItem('index');
            return $this->fetch('index');
        }

    }
    /**
     * 闲置首页广告
     */
    public function adv_manage(){
        $config_model = model('config');
        if (request()->isPost()){
            $input = array();
            //上传图片
            $upload_file=BASE_UPLOAD_PATH . DS . ATTACH_PATH;
            $file_name= 'flea_1.jpg';
            if (!empty($_FILES['adv_pic1']['name'])){
                $file = request()->file('adv_pic1');
                $result = $file->rule('uniqid')->validate(['ext' => ALLOW_IMG_EXT])->move($upload_file,$file_name);
                if ($result === FALSE){
                    $this->error($file->getError());
                }else{
                    $input[1]['pic'] = $result->getFilename();
                    $input[1]['url'] = input('post.adv_url1');
                }
            }elseif (input('post.old_adv_pic1') != ''){
                $input[1]['pic'] = input('post.old_adv_pic1');
                $input[1]['url'] = input('post.adv_url1');
            }
            if (!empty($_FILES['adv_pic2']['name'])){
                $file = request()->file('adv_pic2');
                $file_name= 'flea_2.jpg';
                $result = $file->rule('uniqid')->validate(['ext' => ALLOW_IMG_EXT])->move($upload_file,$file_name);
                if ($result === FALSE){
                    $this->error($file->getError());
                }else{
                    $input[2]['pic'] =  $result->getFilename();
                    $input[2]['url'] = input('post.adv_url2');
                }
            }elseif (input('post.old_adv_pic2') != ''){
                $input[2]['pic'] = input('post.old_adv_pic2');
                $input[2]['url'] = input('post.adv_url2');
            }
            if (!empty($_FILES['adv_pic3']['name'])){
                $file = request()->file('adv_pic3');
                $file_name= 'flea_3.jpg';
                $result = $file->rule('uniqid')->validate(['ext' => ALLOW_IMG_EXT])->move($upload_file,$file_name);
                if ($result === FALSE){
                    $this->error($file->getError());
                }else{
                    $input[3]['pic'] = $result->getFilename();
                    $input[3]['url'] = input('post.adv_url3');
                }
            }elseif (input('post.old_adv_pic3') != ''){
                $input[3]['pic'] = input('post.old_adv_pic3');
                $input[3]['url'] = input('post.adv_url3');
            }

            if (!empty($_FILES['adv_pic4']['name'])){
                $file = request()->file('adv_pic4');
                $file_name= 'flea_4.jpg';
                $result = $file->rule('uniqid')->validate(['ext' => ALLOW_IMG_EXT])->move($upload_file,$file_name);
                if ($result === FALSE){
                    $this->error($file->getError());
                }else{
                    $input[4]['pic'] = $result->getFilename();
                    $input[4]['url'] = input('post.adv_url4');
                }
            }elseif (input('post.old_adv_pic4') != ''){
                $input[4]['pic'] = input('post.old_adv_pic4');
                $input[4]['url'] = input('post.adv_url4');
            }

            if (!empty($_FILES['adv_pic5']['name'])){
                $file = request()->file('adv_pic5');
                $file_name= 'flea_5.jpg';
                $result = $file->rule('uniqid')->validate(['ext' => ALLOW_IMG_EXT])->move($upload_file,$file_name);
                if ($result === FALSE){
                    $this->error($file->getError());
                }else{
                    $input[5]['pic'] = $result->getFilename();
                    $input[5]['url'] = input('post.adv_url5');
                }
            }elseif (input('post.old_adv_pic4') != ''){
                $input[5]['pic'] = input('post.old_adv_pic5');
                $input[5]['url'] = input('post.adv_url5');
            }
            $update_array = array();
            if (count($input) > 0){
                $update_array['flea_loginpic'] = serialize($input);
            }
            $result = $config_model->editConfig($update_array);
            if ($result === true){
                $this->log(lang('ds_edit').lang('loginSettings'),1);
               $this->success(lang('ds_common_save_succ'));
            }else {
                $this->log(lang('ds_edit').lang('loginSettings'),0);
                $this->error(lang('ds_common_save_fail'));
            }
        } else {
            $list_setting = rkcache('config', true);
            if ($list_setting['flea_loginpic'] != '') {
                $adv_list = unserialize($list_setting['flea_loginpic']);
            } else {
                $adv_list = '';
            }
            $this->assign('adv_list', $adv_list);
            return $this->fetch('adv');
        }
    }

    protected function getAdminItemList()
    {
        $menu_array = array(
            array(
                'name' => 'index', 'text' => lang('flea_seo'), 'url' => url('Fleaseo/index')
            ),
        );
        return $menu_array;
    }
}