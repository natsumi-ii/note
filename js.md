
```js
const coordinates = (e) => {
  e.clientX(X座標);
  e.clientY(Y座標);
};

//同じ
sleep(time) {
    console.log(`I sleep ${time} hours every day`);
    console.log('I slept ' + time + ' hours last night')
  }
```

method.pc

array

- map :新しい配列を作る
- filter 　：条件を満たす要素からなる新しい配列を作る
- length 　：要素の数
- reduce 　：縮小のコールバック関数,引数には関数を渡す
- find ：条件を満たす最初の値
- findIndex :条件を満たす最初の値の位置を返す
- some 　：条件を満たす数値があるかどうか、含むかどうかではなく、条件を満たしているか
- every 　：すべての値が条件を満たすか
- flat 　：指定した深さで再帰的に結合した新しい配列を作成
- indexOf 　： 値の位置
- sort ：並び替える
- slice 　：指定した部分の配列を取り出す
- includes 　：配列に特定の要素が含まれているか

<!-- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String -->

string

- toString
- length
- replace :当てはまる初めの文字だけを置き換える
- replaceAll

object

- Object.keys(obj 名)
- Object.values(obj 名)

loop

- for (const x of array)
- array.forEach
- for (let i = 0; i < 10; i++)

number

- parseInt :基数、n 進法

data = {
columns = {
id:1,
text:'hoge' }
}

data.columns = data['columns']
