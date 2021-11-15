# symbolic 
## symbolicすることで、ファイル移動後も移動前と同じpathでアクセスできる
## ex) ~/.zshrc 
書き方： ln -s 旧パス(~/.zshrc) 新パス(dotfiles/.zshrc)
terminalで実行するので一度実行すればOK
---

{}

- gui <==> cli

- package-lock.json
versionをlockしている
githubで管理する

- scripts
package.jsonのscripts

```json
"scripts": {
        "dev": "nest start --watch",
}
```
頭には"npm run xxx"

