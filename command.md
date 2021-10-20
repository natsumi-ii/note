- iterm

```
ディレクトリ削除
rm -r ディレクトリ名
```

- git

```
//新規追加
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

//conflict
git pull --rebase origin ブランチ名
git add
git rebase --continue
gpo ブランチ名　--force

controle r =>fzf
```

node で js を試す

- alias

```
vim ~/.zshrc

zshrc に alias を書く
alias co='code .'

source ~/.zshrc
```

node

[WIP] 途中です

| pbcopy

npm run start

- token

```
token の作り方
1.tokenを作る
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#using-a-token-on-the-command-line

2.itermで要求されるpasswordにtokenを入力

```

(`${}`) =>string
() =>object

? optional
