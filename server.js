const express = require('express');
const path = require('path');
const app = express();

// サーバーポートの設定
const PORT = process.env.PORT || 8080;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'dist')));

// すべてのリクエストをindex.htmlにリダイレクト（SPA用）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// サーバー起動
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
