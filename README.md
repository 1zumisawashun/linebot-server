# 注意事項

linebot-server と言いながら改造しまくった結果今は Prisma の検証環境として使用している。  
一応 line-messaging-api の連携もしているが REST API サーバーとして使用する。

- TODO リストを模した CRUD 機能の検証ができる

  - Prisma で postgreSQL に保存できるように実装している
  - なんか prisma 導入してから本番環境へデプロイうまくいかないっぽい。vercal にデプロイできるように調整中

- RSS を JSON に変換し rss.json へのアウトプットが可能

  - API 化はできていないので随時改修する予定
  - npm run update-rss で rss.json への書き出しを更新することができる

- LINE BOT としての活用が可能

  - デプロイ済み（HTTPS 済み）なので実際に下記 QR コードから LINE でのやりとりが可能
  - デプロイ済み（HTTPS 済み） URL を LINE 管理画面に登録する必要がある
  - HTTPS 化していない場合は別途ターミナルで ngrok を用いたトンネリングをする必要がある
  - LINE 管理画面でトンネリングした URL を登録する必要がある

![image](https://user-images.githubusercontent.com/65071534/190901106-9add8217-401a-405c-b6d4-8f7e4a8da43a.png)

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

- ### docker-compose する

```
npm run makeup
```

- ### サーバーを起動しホットリロードする

```
npm run dev:dev
```

- ### トンネリングさせる

```
npm run ngrok
```

- ### rss.json の内容を更新する

```
npm run update-rss
```

- ### デプロイする

```
npm run deploy
```
