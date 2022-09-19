var nodemailer =require('nodemailer');
var Email ={
	config: {
		host: 'smtp.163.com',
		port: 25,//587
		auth: {
			user: 'gdpu_zhaohaoyuan@163.com',//发件人
			pass: 'BLUAULPNRDRFGKSJ'//密钥
		}
	},
	get transporter(){
		return nodemailer.createTransport(this.config);
	},
	get verify(){
		return Math.random().toString().substring(2,6);
	}
};

module.exports={
	Email
};
