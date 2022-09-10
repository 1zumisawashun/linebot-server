# 注意事項

- RSS を JSON に変換し rss.json へのアウトプットが可能

  - API 化はできていないので随時改修する予定
  - npm run update-rss で rss.json への書き出しを更新することができる

- LINE BOT としての活用が可能

  - HTTPS 化していないので別途ターミナルで ngrok を用いたトンネリングをする必要がある
  - LINE 管理画面でトンネリングした URL を登録する必要がある

- TODO リストを模した CRUD 機能の検証ができる

- 商品情報の API として活用できる
  - 使用する際はクライアント側に src/public/products と src/public/users をコピペする

# 初期設定

- ### package.json を作成する

```
npm init -y
```

- ### tsconfig.json を作成する

```
tsc --init
```

# ターミナルで実行すること

- ### サーバーを起動する(ts ファイル変更があったら自動でトランスパイルしてアプリを再起動する)

```
npm run dev
```

- ### トンネリングさせる

```
npm run ngrok
```

- ### rss.jsonの内容を更新する

```
npm run update-rss
```