## iterm

```
ディレクトリ削除
rm -r ディレクトリ名

ディレクトリ名変更
mv 旧　新

```

## git

```
//新規追加 上　new repositoryの方　existingはversionをすでに管理しているとき
git init
git remote add origin url
git branch -M main
git push -u origin main

//追加
git add
git commit
git push origin branch 名

git pull origin ブランチ名

//ブランチ名変更
git branch -m <新しいブランチ名>

//新ブランチ作成
git checkout -b　ブランチ名

//ブランチ削除
git branch -d ブランチ名

//conflict
git pull --rebase origin ブランチ名
git add
git rebase --continue
gpo ブランチ名　--force

controle r =>fzf
```

node で js を試す

//既存のファイルをローカルに読み込む
git clone URL

//一時変更
git stash 一時保存
git stash list 一覧
git stash pop 0番目のstashを戻す
sl 戻す

//mergeした部分を削除する

git revert -m 1 <commitの横にある黄色い文字列>



## alias

```
vim ~/.zshrc

zshrc に alias を書く
alias co='code .'

source ~/.zshrc
```

node

| pbcopy

npm run start

## token

```
token の作り方
1.tokenを作る
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#using-a-token-on-the-command-line

2.itermで要求されるpasswordにtokenを入力

```

(`${}`) =>string
() =>object

```
movie => gif => github

1.take a video by quick media player

2.do command
❯ ffmpeg -i 画面収録\ 2021-11-06\ 22.27.59.mov(movie file) -vf setpts=PTS/2.5 -r 10 pr.gif

3.drag gif on desktop and drop to github

```

dayjs = require('dayjs')

- prisma で追加したときなど
  migration をする
  prisma db push で実質 migration
