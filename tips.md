#　困ったときは

```
npm init
npm install
```

# symbolic

- symbolic することで、ファイル移動後も移動前と同じ path でアクセスできる
- ex) ~/.zshrc
  書き方： ln -s 旧パス(~/.zshrc) 新パス(dotfiles/.zshrc)
  terminal で実行するので一度実行すれば OK

---

- gui <==> cli

- package-lock.json
  version を lock している
  github で管理する

- scripts
  package.json の scripts

```json
"scripts": {
        "dev": "nest start --watch",
}
```

- 頭には"npm run xxx"

- 相対パスと絶対パス

- [WIP] 途中です

- ? === optional
