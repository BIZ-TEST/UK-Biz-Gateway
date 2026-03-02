const express = require('express');
const axios = require('axios');
const app = express();

// 初始化数据（你可以根据截图修改初始值）
let totalRequests = 3; 
let totalRevenue = 0.30;

// 【重要】这是你发给客户的 Key，以后想多卖给几个人，就在这里加
const VALID_KEYS = ['UK-BIZ-FREE-TEST', 'BOSS-YORK-VIP-888'];

app.get('/verify/:companyNumber', async (req, res) => {
    const { companyNumber } = req.params;
    const userKey = req.query.key; // 获取链接里的 ?key=xxx

    // 1. 验证 Key
    if (!userKey || !VALID_KEYS.includes(userKey)) {
        return res.status(401).json({ error: "Access Denied: Please contact the admin for a valid API Key." });
    }

    try {
        // 2. 调用英国官方接口（此处请填入你申请的真实 API KEY）
        const auth = Buffer.from('你的API_KEY_HERE:').toString('base64');
        const response = await axios.get(`https://api.company-information.service.gov.uk/company/${companyNumber}`, {
            headers: { 'Authorization': `Basic ${auth}` }
        });

        // 3. 计费逻辑
        totalRequests++;
        totalRevenue += 0.10;

        // 4. 终端打印输出（让你在约克家里实时看收益）
        console.log(`\n==============================`);
        console.log(`💰 正在收税：约克家庭基站运行中...`);
        console.log(`📈 累计处理单量：${totalRequests}`);
        console.log(`💵 预估虚拟收益：£${totalRevenue.toFixed(2)}`);
        console.log(`==============================`);

        // 5. 返回给客户的干净数据
        res.json({
            fee: "£0.10",
            status: response.data.company_status,
            company_name: response.data.company_name,
            address: response.data.registered_office_address.address_line_1,
            created_at: response.data.date_of_creation
        });
    } catch (error) {
        res.status(404).json({ error: "Company not found. Please check the 8-digit number." });
    }
});

app.listen(3000, () => console.log('🚀 UK Biz Gateway is live on port 3000'));