# Carousel コンポーネント ドキュメント

## 概要

このディレクトリには、Carouselコンポーネントの技術的な詳細や実装に関するドキュメントが格納されています。

## ファイル一覧

### [scrollIntoView.md](./scrollIntoView.md)
- `scrollIntoView`メソッドがカルーセルのスクロールを実現する仕組み
- DOM要素の階層的スクロール処理
- CSS Scroll Snapとの連携
- 代替手法との比較
- デバッグ方法と検証コード

## Carousel コンポーネントの概要

### 主要な機能
- **スナップスクロール**: `snap-start`を使用したアイテム単位のスクロール
- **ボタンナビゲーション**: 左右ボタンによる前後のアイテムへの移動
- **手動スクロール**: ユーザーの直接スクロール操作への対応
- **レスポンシブ対応**: アイテム数や画面サイズの変更に自動対応

### 技術仕様
- **表示アイテム数**: `Math.floor(コンテナ幅 / アイテム幅)`で自動計算
- **最大インデックス**: `アイテム総数 - 表示可能アイテム数`
- **スクロール方式**: `scrollIntoView`によるネイティブスクロール
- **同期機能**: スクロールイベントとcurrentIndexの双方向同期

### ファイル構成
```
carousel/
├── Carousel.tsx           # メインコンポーネント
├── CarouselItem.tsx       # 個別アイテムコンポーネント
├── CarouselPage.tsx       # 使用例・テストページ
└── _docs/                 # 技術ドキュメント
    ├── README.md          # このファイル
    └── scrollIntoView.md  # scrollIntoViewの詳細解説
```

## 使用方法

### 基本的な使用例

```jsx
<Carousel>
  <CarouselItem className="basis-1/2">
    <div>
      <img src="image1.jpg" alt="Item 1" />
    </div>
  </CarouselItem>
  <CarouselItem className="basis-1/2">
    <div>
      <img src="image2.jpg" alt="Item 2" />
    </div>
  </CarouselItem>
  {/* 必要なだけCarouselItemを追加 */}
</Carousel>
```

### 重要なCSSクラス
- `basis-1/2`: アイテム幅を50%に設定（2つのアイテムが同時表示）
- `snap-start`: アイテムの左端でスナップ
- `overflow-x-auto`: 水平スクロールを有効化

## トラブルシューティング

### ボタンが正しく無効化されない
- `currentIndex`の同期を確認
- `maxIndex`の計算を確認
- コンソールログでデバッグ情報を確認

### スクロールが期待通りに動作しない
- `scrollIntoView`のオプション設定を確認
- CSS Scroll Snapの設定を確認
- アイテムのDOM構造を確認

## 今後の拡張予定

- [ ] 自動再生機能
- [ ] インジケーター表示
- [ ] タッチ・スワイプ操作対応
- [ ] カスタムトランジション効果
- [ ] 無限ループ機能

## 参考資料

- [MDN - Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [MDN - CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Tailwind CSS - Scroll Snap](https://tailwindcss.com/docs/scroll-snap-type)