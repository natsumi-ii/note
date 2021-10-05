#git 
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
```

nodeでjsを試す

#alias
```
vim ~/.zshrc

zshrc に alias を書く
alias co='code .'

source ~/.zshrc
```
node 


