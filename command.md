#git
##新規追加
git init
git remote add origin url
git branch -M main 
git push -u origin main

##追加
git add
git commit
git push origin branch名

git pull origin ブランチ名

ブランチ名変更
git branch -m <新しいブランチ名>



#alias
vim ~/.zshrc

zshrcにaliasを書く
alias co='code .'

source ~/.zshrc