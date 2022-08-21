```php
- 起動コマンド
php artisan serve


view('フォルダ名 . ファイル名')
- php artisan make:controller コントローラー名
- php artisan make:provider プロバイダー名
- php artisan make:middleware ミドルウェア名
- php artisan make:request フォームリクエスト名
- php artisan make:rule Myrule
- php artisan make:migration マイグレーション名

マイグレーション
1.ファイル作成
- touch database/ファイル名

2.マイグレーションを実行
- php artisan migrate

シーディング(レコードを最初から用意しておく)
- php artisan make:seeder シーダーファイル名

シーディング実行
- php artisan db:seed

- aphp artisan make:model モデル名
```


```sqlite
起動コマンド
- sqlite3 database.splite

終了(これをしないと保存されない)
.exit
```