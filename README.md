# 動物性格診断アプリ (Animal Personality Quiz)

日本語の動物性格診断アプリケーションです。あなたの性格や行動パターンから、最も似ている動物を見つけ出します。

## 概要

このアプリは、ユーザーの回答を分析して、その人の性格特性に最も近い動物を特定します。質問に答えていくと、前の回答を踏まえて次の問いかけを選ぶ「対話するような診断」方式で、より正確な結果を提供します。

## 特徴

- 日本語インターフェース
- インタラクティブな質問形式
- 詳細な性格特性分析
- 視覚的に分かりやすい結果表示
- レスポンシブデザイン

## 技術スタック

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- ベイジアン推論アルゴリズム

## デザイン

- メインカラー: 青色 (#3498db) - 特に高い一致度や重要な要素に使用
- 中程度の一致: オレンジ色 (#f39c12)
- 低い一致: 赤色 (#e74c3c)
- シンプルで洗練されたUI
- 数値による視覚的表現（プログレスバーとパーセント表示）

## 開発方法

### 必要条件

- Node.js 16.0以上
- npm 7.0以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/shiroaso04/animal-personality-app.git

# ディレクトリに移動
cd animal-personality-app

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

## 使い方

1. トップページから「診断スタート」をクリック
2. 質問に順番に回答
3. 診断結果で自分に最も近い動物と性格特性を確認

## ライセンス

MIT

---

© 2025 shiroaso04
