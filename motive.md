```
server
- prism studio
- npm run start:dev
- docker-compose up(その前にdockerが立ち上がっているか確認)
- mysql -u motive -p -h 127.0.0.1 -D motive  //exitで終了

web
- npm run dev
```

10/25
brew install OO

場所でversionを変える
node instapp version名
nodenv local( or global ) 12.13.4
source ~/.zshrc

which node(mysql, nodenv)
で調べる

- request url = endpoint (/以下)

- prisma =(ほぼ) mysqlコマンド

conrol f => みぎ　karabina

丸のgreen ステータスコード(200とか)

controller(endpointの集まり、定義) => service(controllerに渡す)