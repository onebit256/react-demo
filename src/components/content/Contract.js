
import React, { Component } from 'react';
import IpfsService from '../../services/IpfsService';
const IpfsHttpClient  = require('ipfs-http-client');

class Menu extends Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            value: null,
        };  
	}
	
	async addToIpds(){
		IpfsService.addToIpfs();
	}

    render() {
      return (
      <div class="layui-fluid">
	  <div class="layui-row layui-col-space15">
	    <div class="layui-col-md12">
	      <div class="layui-card">
	        <div class="layui-card-header">xxx</div>
	        <div class="layui-card-body">
			  
				
				<form onSubmit={this.addToIpds}>
					<div class="formContainer">
						<span>Upload Profile Picture:</span>   
						{/* <input type="file" name="mypic" required/> <br/>  */}
						<input type="submit" value="submit"/>  
					</div>
				</form>




	          <div class="layui-form" wid100="" lay-filter="">
	            <div class="layui-form-item">
					<label class="layui-form-label">地址：</label>
					<input id="file" type="password" placeholder="File Directory"/>	
	            </div>
	            <div class="layui-form-item">
					<label class="layui-form-value">0123</label>
					<input id="category" type="password" placeholder="File Category"/>
	            </div>
	        
	            
	            
	            
	            <div class="layui-form-item">
	              <div class="layui-input-block">
	                <button class="layui-btn" lay-submit="" lay-filter="set_website">提交</button>
	                <button type="reset" class="layui-btn layui-btn-primary">取消</button>
	              </div>
	            </div>
	          </div>
	          
	        </div>
	      </div>
	    </div>
	  </div>
      </div>
      );
    }
  }

export default Menu



