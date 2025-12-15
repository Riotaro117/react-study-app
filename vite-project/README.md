# React Study App

小さな Vite + React の学習用アプリケーションです。
Reactを学習し、アウトプットのために作成しました。

---

## 🔧 概要

- 簡易的な React（Vite）プロジェクトのサンプル。
- 開発サーバの起動、ビルド、プレビュー、ESLint を用いた静的解析が可能です。

## 🚀 前提条件

- Node.js (推奨: v16 以上)
- npm または Yarn

## 🧭 セットアップと実行

```bash
# プロジェクトルートに移動
cd vite-project

# 依存関係をインストール
npm install

# 開発サーバを起動
npm run dev
```

開発サーバが起動すると、通常は `http://localhost:5173` でアプリにアクセスできます。

## 📦 利用可能なスクリプト

- `npm run dev` - 開発サーバを起動（Vite）
- `npm run build` - 本番用ビルドを作成
- `npm run preview` - ビルド成果物をローカルでプレビュー
- `npm run lint` - ESLint によるコード解析

> スクリプトは `package.json` の `scripts` を参照してください。

## 🗂 ディレクトリ構成（主要ファイル）

```
vite-project/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ pages/
│  │  └─ Page.jsx
│  └─ index.css
└─ vite.config.js
```

- `src/pages/Page.jsx` にサンプルページコンポーネントがあります。

## 🛠 開発メモ

- ESLint がセットアップされています（`eslint.config.js`）。
- TypeScript は使われていませんが、`@types/react` などの devDependencies が含まれています。

## 💡 貢献

バグ修正や改善提案は PR を歓迎します。小さな変更でも気軽に送ってください。

## 📜 ライセンス

必要に応じて適切なライセンスを追加してください（例: MIT）。

---

作成日: 2025-12-16

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
