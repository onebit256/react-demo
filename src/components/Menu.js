
import React, { Component, useState } from 'react';
import AuthService from '../services/AuthService';

function Menu() {
    
    const [value,setValue] =useState();

    function logOut() {
        AuthService.logout();
    }

    
      return (
        <div class="layui-header">
	    <div class="layui-logo">区块链LOGO</div>
        <ul class="layui-nav layui-layout-left">
                <li class="layui-nav-item"><a href="">控制台</a></li>
                <li class="layui-nav-item"><a href="">货币管理</a></li>
                <li class="layui-nav-item"><a href="">用户管理</a></li>
                <li class="layui-nav-item">
                    <a href="javascript:;">其它功能</a>
                    <dl class="layui-nav-child">
                    <dd><a href="">邮件管理</a></dd>
                    <dd><a href="">消息管理</a></dd>
                    <dd><a href="">授权管理</a></dd>
                    </dl>
                </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
                <li class="layui-nav-item">
                    <a href="javascript:;">
                        {/* <img src="http://t.cn/RCzsdCq" class="layui-nav-img">贤心</img> */}
                    </a>
                    <dl class="layui-nav-child">
                    <dd><a href="">基本资料</a></dd>
                    <dd><a href="">安全设置</a></dd>
                    </dl>
                </li>
  
                <li class="layui-nav-item"><a href="/login" onClick={logOut}>LogOut</a></li>
        </ul>
	    </div>
      );

  }

export default Menu



