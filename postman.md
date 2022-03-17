- POST

- request(上段)の Body から送る
  {}

- メソッド => POST , GET etc..

- req と res に Header, Body 　を付与する

---

- GET => データを取得する(1 パターン)

- POST => データを送る、どこにどんなデータを送るかを Body で指定する

---

- Request payload === Request Body

- command+ return => Send ボタン

- Postman での作業は基本 3001

---

1.login で token 生成  
2.Authorization Bearer token 名を Header に書く  
tasks/today で 2 をやると task 一覧が見える

---
- query
- urlで大事なのは=> ?(ここからはじまる), =(key = value　になる), &(でつなぐ)
