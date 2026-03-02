# UK-Biz-Gateway
UK Company Information Micro-Service A high-speed, simplified API gateway for retrieving UK Companies House data.  Designed for developers and trade-compliance teams.
# 🇬🇧 UK Company Information Micro-Service

A high-speed, simplified API gateway for retrieving UK Companies House data. 
Designed for developers and trade-compliance teams.

### 🚀 Live Test
Use the following endpoint to test (Public Test Key included):
`https://你的ngrok网址/verify/00000006?key=UK-BIZ-FREE-TEST`

### ✨ Key Features
- **Real-time Status**: Instantly check if a company is `Active` or `Dissolved`.
- **Developer Friendly**: Clean JSON output instead of complex official headers.
- **Micro-service Architecture**: Lightweight Node.js implementation.

### 💰 Commercial Access
For private API keys and bulk query support, please contact the admin.


🚀 UK-Biz-Gateway: 英国公司数据极速验证网关
🔍 为什么需要它？
直接调用英国 Companies House 官方 API 门槛高、文档杂、返回数据臃肿。本项目通过部署在 英国约克 (York) 的家庭基站，将复杂的官方接口封装为秒级的简洁 JSON 数据，完美适配跨境电商、外贸风控、ERP 系统接入。

✨ 核心优势
秒级响应：直接从英国本土节点调取，告别国内访问官方库的卡顿。

数据精简化：剔除 90% 无用信息，只返回公司名、状态、地址、成立日期等核心字段。

状态识别：精准识别 Active（正常）或 Dissolved（已注销）状态，防范外贸诈骗。

低成本接入：无需复杂的 OAuth 认证，一个简单的 GET 请求搞定一切。

🛠️ 快速测试 (Live Demo)
你可以直接在浏览器地址栏输入以下链接进行压测（已内置公测 Key）：

https://nonintuitively-unlathered-krystyna.ngrok-free.dev/verify/00000006?key=UK-BIZ-FREE-TEST

输出示例：

JSON
{
  "fee": "£0.10",
  "company_name": "MARINE AND GENERAL MUTUAL LIFE ASSURANCE SOCIETY",
  "status": "dissolved",
  "address": "Cms Cameron Mckenna Llp Cannon Place",
  "created_at": "1862-10-25"
}
💰 商业授权与 Key 申请:
个人/测试 Key：请在 Issue 中留言。

商业版/高频 Key：支持按量付费（£0.10/单），提供专属高带宽通道。

联系方式：[微信：UK-BIZ
		  邮箱：z1803315755@gmail.com]

