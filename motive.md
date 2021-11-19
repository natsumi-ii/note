```
server
- prism studio
- npm run start:dev
- docker-compose up(その前にdockerが立ち上がっているか確認)
- mysql -u motive -p -h 127.0.0.1 -D motive  //exitで終了

web
- npm run dev
```

- brew install XXX

## 場所で version を変える

```node
node install version名
nodenv local( or global ) 12.13.4
source ~/.zshrc

which node(mysql, nodenv)
で調べる

```

- request url = endpoint (/以下)

- prisma =(ほぼ) mysql コマンド

- control f => 右　 karabina で設定する

- 丸の green ステータスコード(200 とか)

- controller(endpoint の集まり、定義) => service(controller に渡す)

---

- nestjs は => serve 側で使っている
- nextjs は => web 側で使っている
