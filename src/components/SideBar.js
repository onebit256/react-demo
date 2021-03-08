import { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class SideBar extends Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            value: null,
        };  
    }

    render() {
      return (
        <div class="layui-side-scroll">
	      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
	        <li class="layui-nav-item">
              <Link class="" to="/contract">Contracts</Link>    
	          <dl class="layui-nav-child">
	            <dd><a href="javascript:;">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	            <dd><a href="javascript:;">列表三</a></dd>
	            <dd><a href="">超链接</a></dd>
	          </dl>
	        </li>
	        <li class="layui-nav-item  layui-nav-itemed">
	          <a href="javascript:;">Operational Data</a>
	          <dl class="layui-nav-child">
	            <dd><a href="javascript:;" class="index-init layui-this" data-url="modular/money/apply_for.html">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	          </dl>
	        </li>
	        
	        <li class="layui-nav-item">
	          <a href="javascript:;">External Data</a>
	          <dl class="layui-nav-child">
	            <dd><a href="javascript:;">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	            <dd><a href="">超链接</a></dd>
	          </dl>
	        </li>
	        
	        <li class="layui-nav-item">
	          <a href="javascript:;">Settings</a>
	          <dl class="layui-nav-child">
	            <dd><a href="javascript:;">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	          </dl>
	        </li>
	    
	        {/* <li class="layui-nav-item"><a href="">云市场</a></li>
	        <li class="layui-nav-item"><a href="">发布商品</a></li>
	 */}
	      </ul>
	    </div>
      );
    }
  }

export default SideBar;
