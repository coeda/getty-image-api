let pictureSearch = document.getElementById('search');
let searchBox = document.getElementById('searchBox');

pictureSearch.addEventListener('click', function(event) {
  console.log(searchBox.value);
  let search = searchBox.value;
  let picture = [];
  this.container = document.getElementById('container');
  let oReq = new XMLHttpRequest();
    oReq.addEventListener('progress', function(){
    });
    oReq.addEventListener('error', function(){
      console.log('ERROR :<');
    });
    oReq.addEventListener('load', function(){
      let parsedPictureData = JSON.parse(this.responseText);
      picture = parsedPictureData.images;
      console.log(picture);
      const view = document.createElement('div');
      const items = picture.map(newPicture => {
        console.log(newPicture.display_sizes[0].uri);
        let item = document.createElement('div');
        let image = document.createElement('img');
        image.src = newPicture.display_sizes[0].uri;
        let title = document.createTextNode(newPicture.caption);
        item.appendChild(title);
        item.appendChild(image);
        return item;
      });
      console.log(picture[1]);
      items.forEach(view.appendChild.bind(view));
      updateContainer(picture, container);
    });
  function updateContainer(data, container){
    container.innerHTML = '';
    container.innerHTML = data;
  }
  console.log('hit');
  oReq.open('GET', 'https://api.gettyimages.com/v3/search/images?phrase=' + search);
  oReq.setRequestHeader('Accept', 'application/json');
  oReq.setRequestHeader('Api-Key', ApiKey.apikey);
  console.log(oReq);
  oReq.send();

  });
