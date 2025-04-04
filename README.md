# PDF Assistant for Nurses with LINE OA

這是一個由復健科陳佳菁設定 Google 表單 + Apps Script + LINE 官方帳號整合的智能系統，協助台中慈濟醫院的**專科護理師管理 PDF 教學內容**，讓新進護理人員在 LINE OA 中可以：

- 🔍 搜尋/查詢 PDF 文件內容（透過 AI 解析）
- 🤖 輸入關鍵字觸發 Flex Message 或 Carousel
- 🧠 整合 Typebot 教育聊天機器人（緩解壓力）
- 📦 不需要登入電腦或雲端，完全 LINE 操作

## 🛠 系統組成

| 組件 | 用途 |
|------|------|
| Google 表單 | 專科護理師上傳 PDF 連結、設定分類與回應方式 |
| Apps Script | 自動解析 PDF Google Drive 連結為 direct link |
| LINE 官方帳號 | 使用者介面，提供查詢與互動回應 |
| Typebot | 新人可用來學習、釋放壓力的聊天助手 |
| Flex Message | 美觀、可點擊的多功能回應卡片 |
| PDF AI 查詢系統 | 可從 PDF 自然語言查詢，讓新進人員快速了解知識內容 |

## 📂 本專案包含

- `Code.gs`：Apps Script 程式，用來自動轉換 PDF 連結
- 更多功能會持續更新，如 LINE webhook 程式、範本 JSON 等...

## ✅ 立即部署說明

（這部分將在後續補上完整圖文步驟）

---

👉 **專案開源，歡迎部署使用。**
