const items = [
    { id: '7lR4Vd3EYixP', text: '布団から出る\n(:3っ)っ -=三[＿＿]' },
    { id: 'TsXP5w9qLeM-', text: '顔を洗う👐' },
    { id: 'rh022hj9zG58', text: '歯を磨く🦷' },
    { id: '3NRSLMq49xvT', text: '朝食をとる🍞' },
    { id: 'ulnuLLt5TN93', text: 'SNSをチェックする🐦' },
    { id: 'uOwmsTUDqQs5', text: 'NEW\n' }
  ]

items.sort(function(a, b) {
    console.log('a is',a)
    console.log('b is',b)
    // if (nameA < nameB) {
    //   return -1;
    // }
    // if (nameA > nameB) {
    //   return 1;
    // }
  
    // // names must be equal
    return 0;
  });

//   cards.sort((a, b) => a.text.length - b.text.length )