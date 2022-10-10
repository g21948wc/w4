const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '華氏40度のとき、:insertx: は出かけた。 :inserty: についたとき、怖がって:insertz:。Bobは一部始終を見ていましたが、驚きませんでした。:insertx: ３００ポンドの, とても暑い日だった。';
const insertX = ['津田', 'ミッキー', 'スヌーピー'];
const insertY = ['スカイツリー,　'ディズニーランド', '首相官邸'];
const insertZ = ['歩道の水たまりに溶けていった。', '自然発火しました。', 'なめくじになって道を這って逃げた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `50kg`;
    const temperature =  `摂氏−1度`;
    newStory = newStory.replace('華氏４０度', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
